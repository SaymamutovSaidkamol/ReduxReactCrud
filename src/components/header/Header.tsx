import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="container mx-auto  ">
      <div className="flex justify-around text-2xl py-5">
        <div>
          <Link to={"/"}> LOGO</Link>
        </div>
        <div className="flex gap-55 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/create"}>Create</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
