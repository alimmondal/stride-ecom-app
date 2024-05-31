import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";
import { Button, Modal, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");

  // console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = async (_id) => {
    setShowModal(false);
    try {
      const result = await fetch(`http://localhost:5000/shoes/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setProducts(products.filter((product) => product._id !== _id));
          if (data) {
            toast.success("Product deleted successfully");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(products.length);

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {/* {currentUser.isAdmin && products.length > 0 ? ( */}
      <>
        <Table hoverable className="shadow-md">
          <Table.Head>
            {/* <Table.HeadCell>Date updated</Table.HeadCell> */}
            <Table.HeadCell>Product image</Table.HeadCell>
            <Table.HeadCell>Post title</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
            <Table.HeadCell>
              <span className=""> Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {products.map((shoe) => (
            <Table.Body key={shoe._id} className="divided-y ">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                {/* <Table.Cell> */}
                {/* {new Date(post.updatedAt).toLocaleDateString()} */}
                {/* {new Date().toLocaleDateString()} */}
                {/* </Table.Cell> */}
                <Table.Cell>
                  <Link to={`/products/${shoe?._id}`}>
                    <img src={shoe?.image_url} alt="Shoes" className="w-36" />
                  </Link>
                </Table.Cell>

                <Table.Cell className="">
                  <Link
                    className="font-medium text-gray-900 dark:text-white"
                    to={`/products/${shoe?._id}`}
                  >
                    {shoe?.title}
                  </Link>
                </Table.Cell>

                <Table.Cell>
                  <span className="">{shoe?.price}</span>
                </Table.Cell>

                <Table.Cell>
                  <Link
                    to={`/products/${shoe?._id}`}
                    className="font-medium hover:underline cursor-pointer"
                  >
                    See Details
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <span
                    // onClick={() => {
                    // setShowModal(true);
                    // setPostIdToDelete(shoe?._id);
                    // }}
                    onClick={() => handleDelete(shoe?._id)}
                    className="font-medium text-red-500 hover:underline cursor-pointer"
                  >
                    Delete
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`edit/${shoe?._id}`}>
                    <span className="text-emerald-500 hover:underline">
                      Edit
                    </span>
                  </Link>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>

        {/* {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 text-sm py-7"
            >
              Show more
            </button>
          )} */}
      </>
      {/* ) : (
        <p className="">You have no Product</p>
      )} */}

      {/*Delete Modal */}
      {/* <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeletePost}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default AllProducts;
{
  /* <div>
      <h1 className="text-5xl font-bold text-center">All Produts</h1>
      <div className="my-16 flex flex-wrap gap-4">
        {products.map((shoe) => (
          <SingleProductCardDashboard
            key={shoe._id}
            shoe={shoe}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div> */
}
