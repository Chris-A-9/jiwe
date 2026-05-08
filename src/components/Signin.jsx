import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // hooks to inform user
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    // function to programaticaly redirect to diferent component using path
    const navigate = useNavigate()

    // function to handle signin
    const submit = async (e) => {
        e.preventDefault(
            // console.log("Sign in invoked")
            setLoading("Please wait as we sign you in...")  // set progress message 
        )
        try {
            // prepare our data using the formDta object
            // FormData allows the storing of key-value pairs by use of method append
            const data = new FormData()
            data.append("email", email)
            data.append("password", password)

            // sending post request to our flask api endpoint
            // axios is a library that helps in sending of different https requests ei post/get
            // await is used in asynchronous function to pause for sometime until the response has been recieved 
            // response- anytime we make a request to server we will always have a response which will be stored in the response variable
            const response = await axios.post("https://bigmich59.alwaysdata.net/api/signin", data)
            console.log(response)
            setLoading("")

            // check if successfull by use of the response
            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data))
                // redirect to get product component
                navigate("/")
            } else {
                setError(response.data.message)
            }

        } catch (error) {
            setLoading("")
            setError(error.message)
        }

    }
    return (
    <div style={{ backgroundColor: "#e6ab0cff", minHeight: "100vh", padding: "20px" }}>
        <Navbar />
        <div className="row mt-4 justify-content-center">
            <div className="col-md-6 card shadow p-3 text-center">
                <h1>Signin</h1>
                <h5 className="text-info">{loading}</h5>
                <h5 className="text-danger">{error}</h5>

                <form onSubmit={submit}>
                    {email}
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />



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

                </form> <br />

                <p>Dont have an account?
                    <Link to={'/signup'}>Sign Up</Link>
                </p>

            </div>
        </div>
    </div>

    )
}

export default Signin