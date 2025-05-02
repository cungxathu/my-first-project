import HomeBanner from "../../Components/HomeBanner";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";



const Home =()=>{

    var productSliderOptions = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000 ,
        swipe: true,
        touchMove: true,
        centerMode: true,  // Căn giữa các item
        centerPadding: '0', // Khoảng cách mặc định giữa các slide
      };    

    return(
        <>
            <HomeBanner/>
            <HomeCat/>
          

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-12 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-100"> 
                                    <h3 className="hd text-center">SẢN PHẨM BÁN CHẠY</h3>  
                                </div>
                            </div>
                            <div className="product_row w-100 mt-4">
                            <Swiper
                                    slidesPerView={4}
                                    spaceBetween={20}
                                     pagination={{
                                        dynamicBullets: true,
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 30000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                      }}
                                    modules={[Autoplay,Pagination]}
                                    className="mySwiper"
                                    >
                                    <SwiperSlide>
                                      <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                      <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                      <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                      <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                      <ProductItem/>
                                    </SwiperSlide>

                                    
                                </Swiper>
                            
                                
                            </div>
                            <Button className="viewAllBtn d-block mx-auto mt-4">Xem Thêm</Button>
                            





                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-100">
                                    <h3 className="hd text-center">SẢN PHẨM MỚI</h3>
                                </div>
                            </div>
                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            
                            
                            
                                
                            </div>
                            <Button className="viewAllBtn d-block mx-auto mt-4">Xem Thêm</Button>




                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-100">
                                    <h3 className="hd text-center">SẢN PHẨM KHUYẾN MÃI</h3>
                                </div>
                            </div>
                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            
                            
                            
                                
                            </div>
                            <Button className="viewAllBtn d-block mx-auto mt-4">Xem Thêm</Button>
                        </div>
                    </div>
                    
    
                    
                </div>
                <div className="hero-container">
                      <div className="hero-overlay ">
                        <h1 className="hero-title">PJI - Premium Jewelry - Trang Sức Cao Cấp</h1>
                        <p className="hero-text">
                          Đến với PJI, trang sức không chỉ là một phụ kiện – đó là hiện thân của niềm đam mê, tình yêu của chúng tôi, và cuối cùng, là món quà của PJI dành cho bạn.
                        </p>
                        <Link to="/about" className="hero-button">
                        Về Chúng Tôi
                        </Link>
                      </div>
                    </div>
            </section>
          
        </>
    )
}
        
    


export default Home;