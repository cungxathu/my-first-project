import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HomeBanner =() =>{

    var settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000 // 3000 = 3s
      };
    return(
        <>
            <div className="HomeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://bizweb.dktcdn.net/100/461/213/themes/870653/assets/slider_1.jpg?1738828080259" className="w-100"/>

                </div>
                <div className="item">
                    <img src="https://bizweb.dktcdn.net/100/461/213/themes/870653/assets/slider_2.jpg?1738828080259" className="w-100"/>

                </div>
                <div className="item">
                    <img src="https://bizweb.dktcdn.net/100/461/213/themes/870653/assets/slider_3.jpg?1738828080259" className="w-100"/>

                </div>
                <div className="item">
                    <img src="https://locphuc.com.vn/Content/Images/Banner/banner-09-2020/KimCuong_PC.jpg" className="w-100"/>

                </div>
                <div className="item">
                    <img src="https://bizweb.dktcdn.net/100/461/213/themes/870653/assets/slider_1.jpg?1738828080259" className="w-100"/>

                </div>
                </Slider>
                
                
            </div>
        </>
    )
}
export default HomeBanner;