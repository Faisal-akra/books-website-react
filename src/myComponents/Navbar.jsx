import logo from "../assests/navbar/logo.jpeg"

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>

      <div className=" flex flex-col sm:border    md:flex md:flex-row md:justify-center md:gap-10 lg:justify-evenly">
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
