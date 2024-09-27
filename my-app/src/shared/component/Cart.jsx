import { useContext } from "react";
import CartContext from "../../hooks/CartContext";
import { currencyFormatter } from "./formatter";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items, addToCart, removeFromCart } = useContext(CartContext);
  const totalQuantity = items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0);

  const totalPrice = items.reduce((totalPrice, item) => {
    return (totalPrice = item.price * item.quantity);
  }, 0);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-medium mb-4">Your Cart</h2>
        <ul className="divide-y divide-gray-200">
          {items &&
            items.map((item) => (
              <li
                key={item.id}
                className="py-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageLinks[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-md font-medium">{item.name}</h3>
                    <p className="text-gray-500">{item.brand}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-lg ml-2"
                    disabled={item.quantity === item.stock} // Consider stock availability
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <span className="text-gray-700 font-medium">
                    {item.quantity}
                  </span>

                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-lg ml-2"
                    disabled={item.quantity === item.stock} // Consider stock availability
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <span className="mx-2">x</span>
                  <span className="text-gray-700 font-medium">
                    {currencyFormatter.format(item.price.toFixed(2))}
                  </span>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex justify-between mt-4">
          <span className="text-gray-700 font-medium text-lg">
            Total quantity:
          </span>
          <span className="text-slate-950 font-medium text-lg">
            {totalQuantity}
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-gray-700 font-medium text-lg">Total:</span>
          <span className="text-slate-950 font-medium text-lg">
            {currencyFormatter.format(totalPrice)}
          </span>
        </div>
        <Link
          to="/checkout"
          className="bg-black hover:bg-black-500 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full"
        >
          Checkout
        </Link>
      </div>
    </>
  );
}
