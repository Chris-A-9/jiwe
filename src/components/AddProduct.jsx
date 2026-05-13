import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

const AddProduct = () => {
    const [product_name, setProductName] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [product_cost, setProductCost] = useState("")
    const [product_photo, setProductPhoto] = useState("")

    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    

    const submit = async (e) => {
        e.preventDefault()
        setLoading("Kindly wait as we process your inputs...")

        try {
            const data = new FormData()
            data.append("product_name", product_name)
            data.append("product_description", product_description)
            data.append("product_cost", product_cost)
            data.append("product_photo", product_photo)

            const response = await axios.post("https://bigmich59.alwaysdata.net/api/add_product", data)
            console.log(response)
            setLoading("")
            setSuccess(response.data.message)

            setProductName("")
            setProductDescription("")
            setProductCost("")
            setProductPhoto("")
        } catch (error) {
            setLoading("")
            setError(error.message)
        }

    }
  return (
    <div style={{ backgroundColor: "#e6ab0cff", minHeight: "100vh", padding: "20px" }}>
        <Navbar/>
         <div className="row justify-content-center mt-5">
            <div className="card shadow col-md-6 p-5 text-center">
                <h1>AddProduct</h1>
                <h6 className="text-info">{loading}</h6>
                <h6 className="text-danger">{error}</h6>
                <h6 className="text-success">{success}</h6>
                <form onSubmit={submit}>

                    {product_name}
                    <input type="text" className="form-control" placeholder="Enter product name" required value={product_name} onChange={(e) => setProductName(e.target.value)} /><br />

                    {product_description}
                    <input type="text" className="form-control" placeholder="Enter descriptiopn" required value={product_description} onChange={(e) => setProductDescription(e.target.value)} /> <br />

                    {product_cost}
                    <input type="number" className="form-control" placeholder="Input cost" required value={product_cost} onChange={(e) => setProductCost(e.target.value)} /> <br />


                    <b className="text-primary">Browse/Upload Product Photo</b> <br />
                    <input type="file" className="form-control" required accept='image/*' onChange={(e) => setProductPhoto(e.target.files[0])} /> <br />

                    <button type='submit' className="btn btn-primary">Upload Product</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default AddProduct