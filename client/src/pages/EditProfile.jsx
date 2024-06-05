import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Button, TextInput } from "flowbite-react";

const EditProfile = () => {
  const data = useLoaderData();
  // console.log(data);

  // const [name, setName] = useState(shoe.title);
  // const [age, setAge] = useState(shoe.price);
  // const [mobile, setMobile] = useState(shoe.brand);
  // const [email, setEmail] = useState(shoe.description);
  // const [image_url, setImageURL] = useState(shoe.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobile = form.mobile.value;

    const userData = { name, age, mobile, email: data?.email };
    console.log(userData);
    await fetch(`http://localhost:5000/user/${data.email}`, {
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
          toast.success("User updated successfully");
        }
      });
  };
  return (
    <div className="max-w-lg mx-auto w-full p-2">
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <TextInput
              type="text"
              name="name"
              placeholder="Name"
              value={data?.name}
              // onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextInput
              type="email"
              name="email"
              disabled
              value={data?.email}
              // onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextInput
              type="number"
              name="age"
              placeholder="age"
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextInput
              type="text"
              name="mobile"
              placeholder="Mobile"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <Button type="submit" gradientDuoTone="purpleToPink">
              Update profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
