import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Button } from "flowbite-react";

const Profile = () => {
  const { logout, user } = useAuth();
  // console.log(user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={user?.photoURL || "/public/placeholder.jpg"}
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <h1 className="">Name: {user?.displayName}</h1>
        <h1 className="">Email: {user?.email}</h1>
        <Link to={"/dashboard/add-products"}>
          <Button
            type="button"
            gradientDuoTone="purpleToPink"
            className="w-full"
          >
            Create a product
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
