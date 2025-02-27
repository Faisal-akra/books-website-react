import About from "./myComponents/About";
import Address from "./myComponents/Address";
import BestSeller from "./myComponents/BestSeller";
import Books from "./myComponents/Books";
import Footer from "./myComponents/Footer";
import Navbar from "./myComponents/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <h1 id="best" className="text-center mt-10 mb-10 text-lg font-bold ">
        Best-Sellers
      </h1>
      <BestSeller />
      <h1 id="books" className="text-center mt-10 mb-10 text-lg font-bold ">Books</h1>
      <Books />

      <Address/>
      <Footer/>
    </div>
  );
};

export default App;
