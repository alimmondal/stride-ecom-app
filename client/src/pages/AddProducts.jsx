import { Button, TextInput } from "flowbite-react";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AddProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    // const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, brand, price, description, image_url };

    const res = await fetch("http://localhost:5000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data) {
          toast.success("Product created successfully");
        }
        form.reset();
      });
  };

  return (
    <div className="max-w-lg mx-auto w-full p-3">
      <h1 className="text-5xl font-bold text-center">Add a Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              required
            />
          </div>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <Button
              // className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              gradientDuoTone="purpleToPink"
            >
              Add product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
