import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {

    setCart((prevCart) => {

      const exist = prevCart.find(
        (item) => item.product_id === product.product_id
      );

      if (exist) {

        return prevCart.map((item) =>

          item.product_id === product.product_id
            ? { ...item, qty: item.qty + 1 }
            : item
        );

      } else {

        return [...prevCart, { ...product, qty: 1 }];

      }
    });
  };

  // REMOVE PRODUCT
  const removeFromCart = (product_id) => {

    setCart((prevCart) =>
      prevCart.filter(
        (item) => item.product_id !== product_id
      )
    );
  };

  // INCREASE QTY
  const increaseQty = (product_id) => {

    setCart((prevCart) =>

      prevCart.map((item) =>

        item.product_id === product_id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (product_id) => {

    setCart((prevCart) =>

      prevCart.map((item) =>

        item.product_id === product_id
          ? {
              ...item,
              qty: item.qty > 1
                ? item.qty - 1
                : 1
            }
          : item
      )
    );
  };

  // TOTAL PRICE
  const totalPrice = cart.reduce(

    (total, item) =>

      total + (item.product_cost * item.qty),

    0
  );

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice
      }}
    >

      {children}

    </CartContext.Provider>
  );
};