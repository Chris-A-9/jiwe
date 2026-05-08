import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Footer from './Footer'
import { useCart } from "../CartContext";

const GetProduct = () => {

  const { addToCart } = useCart();

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.product_name.toLowerCase().includes(search.toLowerCase()) ||
      product.product_description.toLowerCase().includes(search.toLowerCase())

    return matchesSearch
  })

  const img_url = "https://bigmich59.alwaysdata.net/static/images/"

  // GET PRODUCTS
  const getProducts = async () => {
    try {
      setLoading("Please wait as we load products...")

      const response = await axios.get(
        "https://bigmich59.alwaysdata.net/api/get_product_details"
      )

      setLoading("")
      setProducts(response.data)

    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div
      style={{
        backgroundColor: "#a5e60cff",
        minHeight: "100vh",
        padding: "12px"
      }}
    >

      <Navbar />

      <Carousel />

      <div className='row container-fluid mt-4 text-center'>

        <h1 className='text-black'>
          Available Products
        </h1>

        <h6 className='text-info'>{loading}</h6>

        <h6 className='text-danger'>{error}</h6>

        {/* SEARCH */}
        <div className='col-md-10 mx-auto mb-2'>

          <div className='row'>

            <div className='col-md-8'>
              <input
                type="text"
                className='form-control'
                placeholder='Search Product'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className='col-md-4'>
              <button
                className='btn btn-info w-100'
                onClick={() => setSearch("")}
              >
                RESET
              </button>
            </div>

          </div>

        </div>

        {/* PRODUCTS */}
        {filteredProducts.map((product) => (

          <div
            className='justify-content-center col-md-3 mb-4'
            key={product.product_id}
          >

            <div className='card shadow p-2 mt-3 h-100 '>

              <img
                src={img_url + product.product_photo}
                alt=""
                className='product_img'
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body">

                <h5>{product.product_name}</h5>

                <p className='text-'>
                  {product.product_description}
                </p>

                <b className='text-warning'>
                  Ksh {product.product_cost}
                </b>

                <br />

                <div className="d-flex gap-2 mt-3">

                  {/* BUY NOW */}
                  <button
                    className='btn btn-info w-50'
                    onClick={() =>
                      navigate('/makepayment', { state: { product } })
                    }
                  >
                    Buy Now
                  </button>

                  {/* ADD TO CART */}
                  <button
                    className='btn btn-dark w-50'
                    onClick={() => addToCart(product)}
                  >
                    🛒 Cart
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      <Footer />

    </div>
  )
}

export default GetProduct