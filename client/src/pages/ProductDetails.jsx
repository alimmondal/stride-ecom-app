import { Button } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  // console.log(shoe);

  const { _id, brand, description, image_url, price, title } = shoe;

  return (
    <div className="w-4/5 flex items-center justify-evenly gap-8 px-8 sm:px-16 md:px-48 md:py-28">
      <div className="">
        <img
          className="h-[600px] w-[1000px]"
          src={image_url}
          alt="product image"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h3 className="text-2xl font-semibold">{price} $$</h3>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <p className="text-lg font-light">{description}</p>
        <Button gradientDuoTone="purpleToPink">Checkout</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
