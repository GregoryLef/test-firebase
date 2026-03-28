"use client"

import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import ListPizza from "./components/ListPizza";
import Footer from "./components/Footer";
import { Pizza } from "./type/Types";
import {db} from "../app/db/firebaseConfig"
import {collection, getDocs} from "firebase/firestore"
import { ToastContainer } from 'react-toastify';

export default function Home() {

  const [cartQuantity, setCartQuantity] = useState(0);
  const [pizzas, setPizza] = useState<Pizza[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      const pizzaCollection = collection(db, "pizza");
      const pizzaSnapshot = await getDocs(pizzaCollection);
      const pizzaData = pizzaSnapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      })) as Pizza[]
      setPizza(pizzaData)
    };
    fetchData()
  },[])

  const addToCart = (pizza: Pizza) => {
    setCartQuantity(cartQuantity +1)
  }
  
  return (
    <>
    <Nav cartQuantity={cartQuantity}/>
    <Header/>
    <ListPizza pizzas={pizzas} addToCart={addToCart}/>
    <ToastContainer/>
    <Footer/>
    </>
  );
}
