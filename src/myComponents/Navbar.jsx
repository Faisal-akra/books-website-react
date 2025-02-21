import logo from "../assests/navbar/logo.jpeg"

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>

      <div className=" flex justify-evenly">
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">Best Sellers</a>
        </div>
        <div>
          <a href="">Books</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
