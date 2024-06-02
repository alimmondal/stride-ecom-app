import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";

const EditProfile = () => {
  const user = useLoaderData();
  console.log(user);
  // const [title, setTitle] = useState(shoe.title);
  // const [price, setPrice] = useState(shoe.price);
  // const [brand, setBrand] = useState(shoe.brand);
  // // const [id, setId] = useState(shoe.id);
  // const [description, setDescription] = useState(shoe.description);
  // const [image_url, setImageURL] = useState(shoe.image_url);

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

    await fetch(`http://localhost:5000/shoes/${shoe._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data) {
          toast.success("Product updated successfully");
        }
      });
  };
  return (
    <div className="max-w-lg mx-auto w-full p-2">
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form>
          <div className="mt-2">
            <TextInput
              type="text"
              name="title"
              placeholder="Title"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextInput
              type="text"
              name="brand"
              placeholder="Brand"
              // value={brand}
              // onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextInput
              type="number"
              name="price"
              placeholder="Price"
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextInput
              type="text"
              name="description"
              placeholder="Description"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextInput
              type="text"
              name="image_url"
              placeholder="Image URL"
              // value={image_url}
              // onChange={(e) => setImageURL(e.target.value)}
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <Button type="submit" gradientDuoTone="purpleToPink">
              Update product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
