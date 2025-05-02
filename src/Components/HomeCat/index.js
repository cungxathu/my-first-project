import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';

const HomeCat =()=> {
        return(
            <section className="homeCat">
              <div className="container">              
              <div className="d-flex align-items-center">
                                <div className="info w-100"> 
                                    <h3 className="hd text-center">XU HƯỚNG TÌM KIẾM</h3>  
                                </div>
                            </div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={-20}
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
                
                    <div className="item text-center">
                        <img src="https://lili.vn/wp-content/uploads/2022/06/Lac-tay-cap-doi-bac-dinh-da-CZ-trai-tim-cua-bien-Erasmus-LILI_199377_3-400x400.jpg"
                         />
                  
                        <h6>VÒNG - LẮC</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img src="https://lili.vn/wp-content/uploads/2021/12/Nhan-doi-bac-hiep-si-va-cong-chua-dinh-da-CZ-LILI_819229_1.jpg"
                         />
                  
                        <h6>NHẪN</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img src="https://lili.vn/wp-content/uploads/2022/09/Day-chuyen-doi-bac-dinh-da-CZ-hinh-ca-voi-va-buom-Brenna-LILI_123985_4-400x400.jpg"
                         />
                  
                        <h6>DÂY CHUYỀN</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img src="https://lili.vn/wp-content/uploads/2022/03/Bong-tai-bac-nu-dinh-da-CZ-co-4-la-LILI_453329_1-400x400.jpg"
                         />
                  
                        <h6>BÔNG TAI</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img src="https://lili.vn/wp-content/uploads/2023/10/Hat-charm-bac-nu-dinh-da-CZ-hinh-cuc-hoa-mi-Eileen-LILI_085652_3-400x400.jpg"
                         />
                  
                        <h6>CHARM PANDORA</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img src="https://lili.vn/wp-content/uploads/2021/08/Khuyen-ron-bac-nu-dinh-da-Zircon-LILI_868451_5-400x400.jpg"
                         />
                  
                        <h6>KHUYÊN XỎ</h6>
                    </div>
                </SwiperSlide>
                </Swiper>
              </div>
            </section>
        )

}
export default HomeCat