import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useCart } from '../CartContext'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice
  } = useCart()
  const navigate = useNavigate()

  const img_url =
    "https://bigmich59.alwaysdata.net/static/images/"

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        paddingBottom: "30px"
      }}
    >

      <Navbar />

      <div className="container mt-4">

        <h1 className="text-center mb-4">
          🛒 My Cart
        </h1>

        {cart.length === 0 ? (

          <div className="text-center">
            <h3>Your cart is empty</h3>
          </div>

        ) : (

          <div className="row">

            {cart.map((item) => (

              <div
                className="col-md-12 mb-4"
                key={item.product_id}
              >

                <div className="card shadow-lg p-3">

                  <div className="row align-items-center">

                    {/* IMAGE */}
                    <div className="col-md-3 text-center">

                      <img
                        src={img_url + item.product_photo}
                        alt=""
                        className="img-fluid rounded"
                        style={{
                          height: "220px",
                          objectFit: "cover"
                        }}
                      />

                    </div>

                    {/* DETAILS */}
                    <div className="col-md-6">

                      <h3>
                        {item.product_name}
                      </h3>

                      <p className="text-muted">
                        {item.product_description}
                      </p>

                      <h5 className="text-warning">
                        Ksh {item.product_cost}
                      </h5>

                      <h6>
                        Quantity: {item.qty}
                      </h6>

                    </div>

                    {/* BUTTONS */}
                    <div className="col-md-3 text-center">

                      <div className="d-flex justify-content-center gap-2 mb-3">

                        {/* INCREASE */}
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            increaseQty(item.product_id)
                          }
                        >
                          +
                        </button>

                        {/* DECREASE */}
                        <button
                          className="btn btn-warning"
                          onClick={() =>
                            decreaseQty(item.product_id)
                          }
                        >
                          -
                        </button>

                      </div>

                      {/* REMOVE */}
                      <button
                        className="btn btn-danger w-100"
                        onClick={() =>
                          removeFromCart(item.product_id)
                        }
                      >
                        Remove Product
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

           {/* TOTAL */}
      <div className="text-end mt-4">

        <h2 className="text-dark">
          Total Price:
         <span className="text-success">
          {" "}Ksh {totalPrice}
        </span>
      </h2>

          {/* PROCEED TO CHECKOUT BUTTON */}
        <button
  className="btn btn-success btn-lg mt-2"
  onClick={() =>
    navigate("/makepayment", {
      state: {
        cart,
        totalPrice
      }
    })
  }
>
  Proceed to Checkout
</button>

          </div>

          </div>

        )}

      </div>

      <Footer />

    </div>
  )
}

export default CartPage