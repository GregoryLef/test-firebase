import { Pizza } from "../type/Types";

interface ModalProps {
    isOpen : boolean;
    onClose: ()=> void;
    pizza : Pizza | null
}

export default function Modal({pizza, onClose, isOpen}: ModalProps) {
    if (!isOpen || !pizza) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
  <div className="bg-white p-3 rounded-md shadow-md w-full max-w-100 relative mx-4">
    <span
      className="bg-orange-600 hover:bg-orange-700 cursor-pointer p-2 absolute top-2 right-2 text-white rounded-md"
      onClick={onClose}
    >
      &times;
    </span>
    <img src={pizza.image} alt={pizza.name} className="w-auto h-auto object-contain mb-4" />
    <h2 className="text-xl font-semibold mb-2 text-stone-700">{pizza.name}</h2>
    <p className="text-stone-700 mb-2"><b>Ingredients: </b>{pizza.ingredient}</p>
    <p className="text-stone-700 mb-2"><b>Tailles : </b>M / XL / XXL</p>
    <p className="text-orange-700 font-black text-xl">{pizza.price} €</p>
  </div>
</div>
  )
}
