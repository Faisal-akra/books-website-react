import About from "./myComponents/About";
import BestSeller from "./myComponents/BestSeller";
import Books from "./myComponents/Books";
import Navbar from "./myComponents/Navbar";


const App = () => {
   return(
      <div>
   <Navbar/>
   <About/>
   <h1 className="text-center mt-10 mb-10 text-lg font-bold ">Best-Sellers</h1>
   <BestSeller/>
   <h1 className="text-center mt-10 mb-10 text-lg font-bold ">Books</h1>

   <Books/>
   </div>
   )
}

export default App;