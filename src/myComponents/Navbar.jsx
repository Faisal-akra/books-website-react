import logo from "../assests/navbar/logo.jpeg"

const Navbar = () => {
  return (
    <div id="main" className="flex flex-col justify-center gap-4">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>

      <div className=" flex flex-col sm:border    md:flex md:flex-row md:justify-center md:gap-10 lg:justify-evenly p-3 bg-gray-700 text-white  font-bold">
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#best">Best Sellers</a>
        </div>
        <div>
          <a href="#books">Books</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
