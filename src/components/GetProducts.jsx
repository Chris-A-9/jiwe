import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Footer from './Footer'

const GetProduct = () => {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState("")
  const [error,setError]=useState("")

  // use navigate hook for geting different component
  const navigate=useNavigate()

  const img_url="https://bigmich59.alwaysdata.net/static/images/"
  
  const getProducts=async ()=>{
    try {
      setLoading("please wait as we load products...")
      const response =await axios.get("https://bigmich59.alwaysdata.net/api/get_product_details")
      console.log(response)
      setLoading("")
      setProducts(response.data)
    
    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <div className='row container-fluid mt-4 text-center'>
        <h1 className='text-primary'>Available Product</h1>
        <h6 className='text-info'>{loading}</h6>
        <h6 className='text-danger'>{error}</h6>

        {/* map our array products */}
        {products.map((product)=>(
          <div className='justify-content-center col-md-3'>
            <div className='card shadow p-4 mt-2'>
              <img src={img_url+product.product_photo} alt="" className='product_img'/>
              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p className='text-muted'>{product.product_description}</p>
                <b className='text-warning'>{product.product_cost}</b> <br />
                <button className='btn btn-dark' onClick={()=>navigate('/makepayment',{state:{product}})}>Buy Now</button>
              </div>
            </div>

          </div>
        ))}
    </div>
    <Footer/>
    </div>
  )
}

export default GetProduct;