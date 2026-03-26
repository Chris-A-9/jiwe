import React from 'react';

const Footer = () => {
    return (
        <>
            <section className="row bg-success text-light p-4 mt-4">

                {/* About */}
                <div className="col-md-4">
                    <h4 className="text-center">About Us</h4>
                    <p>
                        Our shop is located along Mfangano Road near Magundo Shopping Center in Nairobi.
                        We also have various branches all over the country to ensure everyone benefits from
                        our products. We mostly focus on men's wear to keep them stunning and presentable.
                    </p>
                    <p>
                        We also do deliveries countrywide and our workers treat clients well,
                        maintaining a good rapport.
                    </p>
                </div>

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
                            cols="30" 
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
                        <img src="/images/fb.png" alt="Facebook" width="40" />
                    </a>

                    <a href="https://www.instagram.com">
                        <img src="/images/in.png" alt="Instagram" width="40" />
                    </a>

                    <a href="https://www.x.com">
                        <img src="/images/x.png" alt="X" width="40" />
                    </a>

                    <p className="mt-3">
                        We are found on all platforms @wyckrisproduct.com. Follow us and stay updated
                        on the latest trends.
                    </p>

                    <p>Thank you for viewing our page</p>

                    <a href="https://www.whatsapp.com">
                        <img 
                            src="/images/whatsapp.png" 
                            alt="WhatsApp" 
                            height="80" 
                        />
                    </a>

                    <div className="btn btn-success mt-2">
                        0768942225
                    </div>

                    <p>OR</p>

                    <div className="btn btn-success">
                        0122328974
                    </div>
                </div>
            </section>

            {/* Footer bottom */}
            <section className="row fs-6 bg-dark text-light p-3 text-center">
                <h4>Created By Wyckliff &copy; 2026. All Rights Reserved</h4>
            </section>
        </>
    );
};

export default Footer;