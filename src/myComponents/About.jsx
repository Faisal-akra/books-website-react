import book from "../assests/about/book.jpeg";

const About = () => {
  return (
    <div className="mt-10">
      <div className="flex  md:flex md:justify-evenly md:p-5">


        <div className="   flex flex-col justify-center   ">
          <h1 className="        md:font-sans md:text-2xl md:font-bold">Find the books you are  reading <br />for the read</h1>

          <input className="w-fit rounded-lg border-2 border-black mt-2"
            type="text"
            placeholder="serach here"
          
          />
        </div>

        <div className="flex">
          <img src={book} alt="" className="  w-[100px]    md:w-[300px] " />
        </div>
      </div>


      

      <div className="  sm:w-[250px] items-center justify-center text-center   md:w-[100%] md:flex md:justify-center md:items-center flex-col text-lg  font-sans ">
        <h1 className=" md:font-bold md:flex md:justify-center">Faisal-Akram Books-Store</h1>
        <p>Were books and people meet</p>
        <p>Bringing books and accessories doorstep</p>

        <p>
        
          Explore our online store and order your favourite Vovels,souner and
          much more
        </p>
      </div>
    </div>
  );
};

export default About;
