import Books from "./Components/Books/Books"
import Cart from "./Components/Cart/Cart"
import './App.css'
import { useState } from "react"


function App() {
  const [addToCart, setAddToCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleAddToCart = (book) => {
    const newAddToCart = [...addToCart, book];


    const totalPriceString = book.bookPrice;
    const totalPriceStringSplit = totalPriceString.split('.');
    const totalPriceNumber = parseFloat(totalPriceStringSplit[1].replace(",", ""));

    let totalPrice = totalPriceNumber;
    totalPrice = totalPrice + totalPriceNumber
  
    console.log(totalPrice);
    

    setAddToCart(newAddToCart)
    setTotalPrice(totalPrice);

  }

  return (
    <>
      <h1>House of Book</h1>
      <div className='home-style'>
          <Books handleAddToCart={handleAddToCart}></Books>
          <Cart addToCart={addToCart} totalPrice={totalPrice}></Cart>
      </div>
    </>
  )
}

export default App
