import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div>
        <section className="row">
            <div className="col-md-12">
                <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    <div className="carousel-inner">
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
                            <img src="images/slide5.webp" alt="slide 5" className="w-100 d-block" height="300px"/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide6.jpg" alt="slide 6" className="w-100 d-block" height="300px"/>

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
        
  );
};

export default Carousel;