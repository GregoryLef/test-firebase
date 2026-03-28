"use client"

import { GiFullPizza } from "react-icons/gi";
import { FaPizzaSlice,FaHome, FaShoppingCart } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { useRouter } from "next/navigation";

interface NavProps {
  cartQuantity : number
}

export default function Nav({cartQuantity}: NavProps) {

  const router = useRouter();

  const menu = [
    {name: 'Home', icon:FaHome},
    {name: 'Nos Pizzas', icon:FaPizzaSlice},
    {name: 'Contact', icon:IoIosMail},
  ]
  return (
    <nav className="fixed z-100 shadow-md w-full bg-white h-25 flex justify-between items-center px-5 text-stone-700">

      <div className="flex items-center gap-2 cursor-pointer" onClick={()=> router.push("/")}>
        <GiFullPizza className="text-orange-700 text-2xl"/>
        <span className="font-black">GO PIZZA</span>
      </div>
      <ul className="hidden md:flex items-center gap-4">
         {menu.map((items,index)=> (
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-700 hover:underline" key={index}>
            <span><items.icon/></span>
            <span>{items.name}</span>
          </li>
         ))}
      </ul>
      <button className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800 flex items-center gap-2">
        <FaShoppingCart/>
        <span>{cartQuantity}</span>
      </button>
    </nav>
  )
}
