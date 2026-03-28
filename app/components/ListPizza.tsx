import { useState } from "react";
import {Pizza} from "../type/Types"
import Card from "./Card";
import Modal from "./Modal";


interface ListPizzaProps {
  pizzas : Pizza[];
  addToCart : (pizza:Pizza) => void
}

export default function ListPizza({pizzas, addToCart}: ListPizzaProps) {

  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (pizza:Pizza) => {
    setSelectedPizza(pizza)
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setSelectedPizza(null)
    setIsModalOpen(false);
  }

  return (
    <div className="max-w-250 w-full mx-auto p-5" id="pizzaList">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pizzas.map((pizza)=> (
          <Card key={pizza.name} pizza={pizza} addToCart={addToCart} onCardClick={handleOpenModal} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} pizza={selectedPizza}/>
    </div>
  )
}
