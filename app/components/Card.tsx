import { Pizza } from "../type/Types";
import { useState } from "react";
import {toast} from "react-toastify"

interface CardProps {
    pizza : Pizza;
    addToCart: (pizza: Pizza) => void;
    onCardClick: (pizza: Pizza) => void;
}

export default function Card({pizza, addToCart, onCardClick}: CardProps) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(pizza)
        setQuantity(quantity + 1)
        toast.success('Pizza ajoutée a votre commande')
    };


  return (
    <div className="border border-gray-200 rounded-md p-4 shadow-md relative cursor-pointer hover:-mt-2.5 transition-all">
      <img src={pizza.image} alt={pizza.name} className="w-auto h-auto object-contain mb-4"/>
      <div className="bg-orange-700 text-white py-2 px-3 rounded-md font-bold absolute top-5 right-5">{pizza.price} €</div>
      <h3 className="text-center font-bold">{pizza.name}</h3>
      <div className="flex items-center justify-center gap-2">
        <button onClick={()=> onCardClick(pizza)} className="bg-orange-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-orange-700">Voir Pizza</button>
        <button onClick={handleAddToCart} className="bg-orange-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-orange-700">Commander</button>
      </div>
    </div>
  )
}
