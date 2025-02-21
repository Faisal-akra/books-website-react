import book from "../assests/about/book.jpeg";

const About = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-evenly p-5">
        <div className="flex flex-col justify-center   ">
          <h1 className="font-sans text-2xl font-bold">Find the books you are  reading <br />for the read</h1>

          <input className="w-fit rounded-lg border-2 border-black mt-2"
            type="text"
            placeholder="serach here"
          
          />
        </div>

        <div className="flex  ">
          <img src={book} alt="" className="w-[300px] " />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col text-lg  font-sans ">
        <h1 className="font-bold">Faisal-Akram Books-Store</h1>
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
