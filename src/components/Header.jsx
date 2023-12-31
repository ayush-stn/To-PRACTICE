import Home from "./Home";

const Header = () => {
    return (
        <div className="">
    <div>
        <div className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500   rounded-full mx-40 h-12  my-9 shadow-black shadow-md     ">
        <ul className=" flex space-x-80 mx-14">
            <li className=" mx-1o  my-3"> <button onClick={onclick} className="cursor-pointer hover:bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white font-bold my-1 px-5 rounded-full ">Home </button></li>
            <li className="mx-44 my-3"><button onclick={onclick} className="cursor-pointer  hover:bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold my-1 px-5 rounded-full ">About-us </button> </li>
            <li className=" mx-44 my-3 "><button onclick={onclick} className="cursor-pointer  hover:bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold my-1 px-5 rounded-full ">login</button> </li>
        </ul>
        <div className=" my-3 ">
        <img  className=" fixed bottom-4 left-4  p-2 rounded-full     hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-300  h-[130px] my-[500px]  "
src="https://cdn.pixabay.com/photo/2023/08/16/03/09/lion-8193176_1280.png" 
alt="Lion" />
        </div>
        </div>
    </div>
        </div>
    )
}
export default Header;