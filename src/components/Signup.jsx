import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Signup = () => {
    // hooks to hold our inputs
    // hooks will be updated later in our program
    // it returns a stateful value and a function to update it

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    // hooks to update user on what is hapenning
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
     const [showPassword, setShowPassword] = useState(false);
    // async function  -enables the await so that it does not proceed with other lines of code until the responce has been received because its coming from a diferent sever and there may be network issues or slow 
    const submit = async (e) => {
        // e.preventDefault() - it is a function thst prevents the psge from loading which clears our hooks/state variables
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading("please wait as we register you...")

        // handles the errors that occcurs
        try {
            // formdata object to store our key-value pairs
            const data = new FormData()
            //   append the key values pair to our data object
            data.append("username", username)
            data.append("email", email)
            data.append("phone", phone)
            data.append("password", password)

            // sending the post request to our flask api
            // axios is a library that helps in making http requests eg. post/get/put/delet etc
            const response = await axios.post("https://bigmich59.alwaysdata.net/api/signup", data)
            console.log(response)
            setLoading("")
            setSuccess(response.data.message)

            // clear our form 
            setUsername("")
            setEmail("")
            setPhone("")
            setPassword("")
        } catch (error) {
            setError(error.message)
        }

    }


    return (
        <div>
            <Navbar/>
            <div className="row mt-4 justify-content-center">
                <div className="col-md-6 card shadow p-3 text-center">

                    <h1>Signup</h1>
                    <h5 className="text-info">{loading}</h5>
                    <h5 className="text-danger">{error}</h5>
                    <h5 className="text-success">{success}</h5>
                    <form onSubmit={submit}>
                        {username}
                        <input type="text" className="form-control" placeholder="Enter Username" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />

                        {email}
                        <input type="email" className="form-control" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                        {phone}
                        <input type="tel" className="form-control" placeholder="Enter Phone No." required
                            value={phone} onChange={(e) => setPhone(e.target.value)} /><br />

                          {/* 👇 PASSWORD FIELD WITH EYE ICON */}
                <div style={{ position: "relative" }}>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control" 
                        placeholder="Input Password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ paddingRight: "40px" }}
                    />

                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer"
                        }}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </span>
                </div>

                <br />

                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>

                        
                        
                        
                    </form>
                    <p className="text-secondary">Already have an account? <Link to={'/signin'}>Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup