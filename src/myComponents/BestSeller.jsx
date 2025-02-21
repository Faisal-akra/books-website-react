import img1 from "../assests/bestSeller/img.jpeg";
import img2 from "../assests/bestSeller/img2.jpeg"
import img3 from "../assests/bestSeller/img3.jpeg"
import img4 from "../assests/bestSeller/img4.jpeg"
import img5 from "../assests/bestSeller/img5.jpeg"
import img6 from "../assests/bestSeller/img6.jpeg"

const BestSeller = () => {
  return (


    <div >



    <div className="hidden     md:flex justify-evenly ">


      <div className=" flex flex-col border border-black w-fit justify-center items-center bg-gray-300 text-white h-fit">
        <div className="">
          <img src={img1} alt="" className="w-52 h-44" />
        </div>

        <div className=" bg-gray-600 w-full text-center mt-1">
          <h1>By Paul hhhhh</h1>
        </div>

        <div>
          <button className="border border-black w-fit bg-gray-600 mt-1">
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex flex-col border border-black w-fit justify-center items-center bg-gray-300 text-white">
        <div className="">
          <img src={img2} alt="" className="w-52 h-44" />
        </div>

        <div className=" bg-gray-600 w-full text-center mt-1">
          <h1>By Paul Munro</h1>
        </div>

        <div>
          <button className="border border-black w-fit bg-gray-600 mt-1">
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex flex-col border border-black w-fit justify-center items-center bg-gray-300 text-white">
        <div className="">
          <img src={img3} alt="" className="w-52 h-44" />
        </div>

        <div className=" bg-gray-600 w-full text-center mt-1">
          <h1>By Paul Munro</h1>
        </div>

        <div>
          <button className="border border-black w-fit bg-gray-600 mt-1">
            Buy Now
          </button>
        </div>
      </div>
    </div>








   
    <div className="hidden md:flex justify-evenly mt-5">
      <div className="flex flex-col border border-black w-fit justify-center items-center bg-gray-300 text-white h-fit">
        <div className="">
          <img src={img4} alt="" className="w-52 h-44" />
        </div>

        <div className=" bg-gray-600 w-full text-center mt-1">
          <h1>By Paul Munro</h1>
        </div>

        <div>
          <button className="border border-black w-fit bg-gray-600 mt-1">
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex flex-col border border-black w-fit justify-center items-center bg-gray-300 text-white">
        <div className="">
          <img src={img5} alt="" className="w-52 h-44" />
        </div>

        <div className=" bg-gray-600 w-full text-center mt-1">
          <h1>By Paul Munro</h1>
        </div>

        <div>
          <button className="border border-black w-fit bg-gray-600 mt-1">
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex flex-col border border-black w-fit justify-center items-center bg-gray-300 text-white">
        <div className="">
          <img src={img6} alt="" className="w-52 h-44" />
        </div>

        <div className=" bg-gray-600 w-full text-center mt-1">
          <h1>By Paul Munro</h1>
        </div>

        <div>
          <button className="border border-black w-fit bg-gray-600 mt-1">
            Buy Now
          </button>
        </div>
      </div>

      
    </div>
















{/* for mobile screen */}



<div className=" grid grid-cols-2 grid-rows-2  gap-6 justify-items-center text-center   md:hidden">


<div className="flex flex-col border border-black w-fit justify-center justify-items-center bg-gray-300 text-white h-fit">
  <div className="">
    <img src={img1} alt="" className="w-28 h-24" />
  </div>

  <div className=" bg-gray-600 w-full text-center mt-1">
    <h1>By Paul hhhhh</h1>
  </div>

  <div>
    <button className="border border-black w-fit bg-gray-600 mt-1">
      Buy Now
    </button>
  </div>
</div>

<div className="flex flex-col border border-black w-fit justify-center justify-items-center bg-gray-300 text-white">
  <div className="">
    <img src={img2} alt="" className="w-28 h-24" />
  </div>

  <div className=" bg-gray-600 w-full text-center mt-1">
    <h1>By Paul Munro</h1>
  </div>

  <div>
    <button className="border border-black w-fit bg-gray-600 mt-1">
      Buy Now
    </button>
  </div>
</div>

<div className="flex flex-col border border-black w-fit justify-center justify-items-center bg-gray-300 text-white">
  <div className="">
    <img src={img3} alt="" className="w-28 h-24" />
  </div>

  <div className=" bg-gray-600 w-full text-center mt-1">
    <h1>By Paul Munro</h1>
  </div>

  <div>
    <button className="border border-black w-fit bg-gray-600 mt-1">
      Buy Now
    </button>
  </div>
</div>


<div className="flex flex-col border border-black w-fit justify-center justify-items-center bg-gray-300 text-white h-fit">
  <div className="">
    <img src={img4} alt="" className="w-28 h-24" />
  </div>

  <div className=" bg-gray-600 w-full text-center mt-1">
    <h1>By Paul hhhhh</h1>
  </div>

  <div>
    <button className="border border-black w-fit bg-gray-600 mt-1">
      Buy Now
    </button>
  </div>
</div>


<div className="flex flex-col border border-black w-fit justify-center justify-items-center bg-gray-300 text-white h-fit">
  <div className="">
    <img src={img5} alt="" className="w-28 h-24" />
  </div>

  <div className=" bg-gray-600 w-full text-center mt-1">
    <h1>By Paul hhhhh</h1>
  </div>

  <div>
    <button className="border border-black w-fit bg-gray-600 mt-1">
      Buy Now
    </button>
  </div>
</div>


<div className="flex flex-col border border-black w-fit justify-center justify-items-center bg-gray-300 text-white h-fit">
  <div className="">
    <img src={img6} alt="" className="w-28 h-24" />
  </div>

  <div className=" bg-gray-600 w-full text-center mt-1">
    <h1>By Paul hhhhh</h1>
  </div>

  <div>
    <button className="border border-black w-fit bg-gray-600 mt-1">
      Buy Now
    </button>
  </div>
</div>




</div>






    </div>
  );
};

export default BestSeller;
