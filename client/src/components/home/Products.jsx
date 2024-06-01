/* eslint-disable no-undef */
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex gap-8 md:gap-2 px-6 justify-center items-center flex-wrap ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map((shoe) => (
            <SingleProduct key={shoe._id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
