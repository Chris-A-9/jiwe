import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

const MakePayment = () => {
    const { cart, totalPrice } = useLocation().state || {}

    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const img_url =
      "https://bigmich59.alwaysdata.net/static/images/"

    console.log(cart)
    console.log(totalPrice)

    const submit = async (e) => {
        e.preventDefault()
        setError("")
        setMessage("Please wait as we process your payment..")

        try {
            const data = new FormData()
            data.append("phone", phone)
            data.append("amount", totalPrice)

            const response = await axios.post("https://bigmich59.alwaysdata.net/api/mpesa_payment", data)
            console.log(response)

            setMessage(response.data.message)

        } catch (error) {
            setMessage("")
            setError(error.message)

        }
    }
  return (
    <div>
        <Navbar/>
         <div className='row justify-content-center mt-3 text-center'>
            <h1 className='text-success'>LIPA NA M-PESA</h1>
            <h6 className='text-success'>{message}</h6>
            <h6 className='text-danger'>{error}</h6>
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">

    <h3 className='text-primary'>
        Total Cart Payment
    </h3>

    {cart?.map((item) => (
        <div
            key={item.product_id}
            className='border rounded p-2 mb-2'
        >
            <img
                src={img_url + item.product_photo}
                alt=""
                width="120"
                className='img-fluid rounded'
            />

            <p>
                Product Name:
                {item.product_name}
            </p>

            <p>
                Quantity:
                {item.qty}
            </p>

            <p className='text-warning'>
                Cost:
                KSH {item.product_cost}
            </p>
        </div>
    ))}

    <h4 className='text-success'>
        Total Amount: KSH {totalPrice}
    </h4>
                        <form onSubmit={submit}>
                            <p className='text-start text-primary'>Phone number to make payment</p>
                            <input type='tel' placeholder='254...' className='form-control' value={phone} required onChange={(e) => setPhone(e.target.value)} /> <br />
                            <button className='btn btn-success' type='submit'>Pay Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakePayment