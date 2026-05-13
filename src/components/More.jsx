import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Navbar";

const More = () =>{
  return (
  
    <div>
      <Navbar/>
      <div className="container-fluid">
      
      {/* SECTION 1 - NAVBAR */}
      <section className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a href="/" className="navbar-brand">JIWE PRODUCTS</a>

            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarcollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </section>

      {/* SECTION 2 - IMAGES */}
      <section className="row">
        <div className="col-md-6 text-center">
          <img src="images/clo1.jpg" alt="" height="400" width="100%" style={{ transition: "0.5s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>

        <div className="col-md-6 text-center">
          <img src="images/clo2.jpg" alt="" height="400" width="100%" style={{ transition: "0.5s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")} 
          /> <br />
        </div>
      </section>
(STAY COOL){
    <div>
        <section>

            <div className="col-md-12">
                <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/tisho.png" alt="slide 1" className="w-100 d-block" height="300px"/>
                        </div>
                        <div className="carousel-item active">
                            <img src="images/slide1.png" alt="slide 1" className="w-100 d-block" height="300px"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide2.jpg" alt="slide 2" className="w-100 d-block" height="300px"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide3.png" alt="slide 3" className="w-100 d-block" height="300px"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide4.webp" alt="" className="w-100 d-block" height="300px"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/tishoo.png" alt="slide 5" className="w-100 d-block" height="300px"/>
                        </div>
                         </div>
                    <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev">
                        <span className="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    <a href="#mycarousel" data-bs-slide="next" className="carousel-control-next">
                        <span className="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>
            </div>
        </section>
    </div>
}

      <section className="row">
      <div className="col-md-12 text-center">
        <p>For beter shopping experience i would like to recomend you to this shop since it has the best quality t-shirts one could ever ask for.We also give our frequent customers discounts since they have helped our shop in becoming what we are today.
          Anyone xcan shop in our shops and we plan in moving our legacy in every county in kenya. we have shops located in Nairobi, Kisumu, Mombasa, Lamu, Kakamega, Kiambu and Eldoret.
          Please shop with us and get the latest trends in the city
        </p>

      </div>
      </section>

      {/* FOOTER */}
      <section className="row bg-warning text-light p-4 mt-4">
        
        
        {/* Contact */}
        <div className="col-md-4">
          <h4 className="text-center">Contact Us</h4>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
            />
            <br />
            <textarea
              rows="5"
              placeholder="Leave a Comment..."
              className="form-control"
            ></textarea>
            <br />
            <input
              type="submit"
              value="Send Message"
              className="btn btn-danger"
            />
          </form>
        </div>

        {/* Social */}
        <div className="col-md-4 text-center">
          <h4>Stay Connected</h4>

          <a href="https://www.facebook.com">
            <img src="images/fb.png" alt="" />
          </a>

          <a href="https://www.instagram.com">
            <img src="images/in.png" alt="" />
          </a>

          <a href="https://www.x.com">
            <img src="images/x.png" alt="" />

          </a>

          <p className="mt-3">
            Follow us @wyckrisproduct.com for latest trends
          </p>

          <a href="https://www.whatsapp.com">
  <img
    src="/images/whatsap.webp"
    height="80"
    alt="WhatsApp"
  />
</a>

          <div className="mt-2">
            <span className="btn btn-secondary">0768942225</span>
            <span className="mx-2">OR</span>
            <span className="btn btn-success">0122328974</span>
          </div>
        </div>

            <div className="col-md-4">
        <section>
          <div className="col-md-10 card shadow p-1  bg-warning">
            <img src="images/jiwe.png" alt="jiwe" />
          </div>
        </section>

      </div>
      </section>

      {/* COPYRIGHT */}
      <section className="row fs-6 bg-dark text-light p-3 text-center">
        <h4>Created By Wyckliff © 2026. All Rights Reserved</h4>
      </section>
    </div>
    </div>
  );
}

export default More;