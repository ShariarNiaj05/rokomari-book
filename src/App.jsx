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
    const totalPriceNumber = parseFloat(totalPriceStringSplit[1]);
    // const newTotalPrice = [...totalPrice, totalPriceNumber]
    if (totalPriceNumber.includes(',')) {
      console.log('inside if ');
    }
    
    
    setAddToCart(newAddToCart)
    // setTotalPrice(totalPrice);
    console.log(totalPriceStringSplit, totalPriceNumber);
  }

  return (
    <>
      <h1>House of Book</h1>
      <div className='home-style'>
          <Books handleAddToCart={handleAddToCart}></Books>
          <Cart addToCart={addToCart}></Cart>
      </div>
    </>
  )
}

export default App
