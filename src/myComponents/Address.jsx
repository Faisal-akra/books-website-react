import address from "../assests/address/address.jpeg"

const Address = () => {
  return(
    <div className="flex justify-evenly items-center">


<div className="flex flex-col text-lg font-bold">
 <a href="#main">Main-Menu</a>
 <a href="#about">About</a>
 <a href="#best">Best-Sellers</a>
 <a href="#books">Books</a>


</div>

<div className="text-lg font-bold">
  <h1>About Us</h1>
  <h2>University Rd.near University town,
  </h2>
  <h3>Peshawar Khyber Pakhtunkhuwa</h3>
  <p>0300-0000000</p>
</div>



<div className="">
  <img src={address} alt="" className="w-[500px]" />
</div>






    </div>
  )
}

export default Address;