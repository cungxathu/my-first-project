import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import { useContext, useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from "../QuantityBox"
import { IoIosHeartEmpty } from "react-icons/io";
import { MyContext } from '../../App';


const ProductModal = (props)=>{

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    var settings = {
        dots:false,
        infinite:false,
        speed:500,
        slidesToShow:5,
        slidesToScroll:1,
        fade:false,
        arrows:true
    };

    var settings2 = {
        dots:false,
        infinite:false,
        speed:700,
        slidesToShow:1,
        slidesToScroll:1,
        fade:false,
        arrows:false
    };

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }


    return(
        <>
            <Dialog open={true} className="productModal"  onClose={()=>context.setisOpenProductModal(false)}>      
                <Button className='close_' onClick={()=>context.setisOpenProductModal(false)}><MdClose/></Button>
                <h4 className='mb-1 font-weight-bold'>Nhẫn Vàng 18K Đính đá CZ PNJ XM00Y005207</h4>
                    <div className='d-flex align-items-center'>
                        <div className='d-flex align-items-center mr-4'>
                            <span>Mã:</span>
                            <span className='ml-2'><b>SKU-1001</b></span>
                        </div>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} size="small" readOnly />
                    </div>
                    <hr/>
                    <div className='row mt-2 productDetaileModal'>
                        <div className='col-md-5'>
                            <div className='productZoom position-relative'>
                                <div className='badge badge-primary'>-14.1%</div>
                                <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                    
                                                <div className='item'>
                                                    <InnerImageZoom
                                                        zoomType="hover" zoomScale={1}
                                                        src={`https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png`}/>
                                                </div>

                                                <div className='item'>
                                                    <InnerImageZoom
                                                        zoomType="hover" zoomScale={1}
                                                        src={`https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-2.png`}/>
                                                </div>

                                                <div className='item'>
                                                    <InnerImageZoom
                                                        zoomType="hover" zoomScale={1}
                                                        src={`https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-3.png`}/>
                                                </div>

                                                <div className='item'>
                                                    <InnerImageZoom
                                                        zoomType="hover" zoomScale={1}
                                                        src={`https://cdn.pnj.io/images/detailed/237/on-gnxm00y005207-nhan-vang-18k-dinh-da-ecz-pnj-1.jpg`}/>
                                                </div>

                                                <div className='item'>
                                                    <InnerImageZoom
                                                        zoomType="hover" zoomScale={1}
                                                        src={`https://cdn.pnj.io/images/detailed/237/on-gnxm00y005207-nhan-vang-18k-dinh-da-ecz-pnj-2.jpg`}/>
                                                </div>
          
                                </Slider>
                            </div>

                            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>

                                <div className='item'>
                                    <img src={`https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png`} 
                                    className='w-100' onClick={() => goto(0)}/>
                                </div>

                                <div className='item'>
                                    <img src={`https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-2.png`} 
                                    className='w-100' onClick={() => goto(1)}/>
                                </div>

                                <div className='item'>
                                    <img src={`https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-3.png`}
                                     className='w-100'onClick={() => goto(2)}/>
                                </div>

                                <div className='item'>
                                    <img src={`https://cdn.pnj.io/images/detailed/237/on-gnxm00y005207-nhan-vang-18k-dinh-da-ecz-pnj-1.jpg`} 
                                    className='w-100'onClick={() => goto(3)}/>
                                </div>

                                <div className='item'>
                                    <img src={`https://cdn.pnj.io/images/detailed/237/on-gnxm00y005207-nhan-vang-18k-dinh-da-ecz-pnj-2.jpg`} 
                                    className='w-100'onClick={() => goto(4)}/>
                                </div>

                            </Slider>
                        </div>

                        <div className='col-md-7'>
                            <div className='d-flex info align-items-center mb-3'>
                                <span className='oldPrice lg mr-2'>7.088.000 đ</span>
                                <span class="netPrice text-danger lg ">6.088.000 đ</span>
                            </div>

                            <span className='badge bg-primary'>Còn hàng</span>
                            
                            <p className='mt-3'>Sở hữu thiết kế trẻ trung cộng hưởng cùng ánh kim 
                                quý phái của vàng 18K, chiếc nhẫn PJI tôn lên vẻ đẹp hiện đại và thời thượng của các quý cô,
                                giúp nàng trông thật xinh đẹp rạng rỡ khi trưng diện. Sở hữu thiết kế đủ mềm mại nhưng lại đầy quyền năng,
                                đủ phá cách như cho một sự khác lạ, vừa mang nét hiện đại, trẻ trung bởi sự rành mạch trong đường nét,
                                lại vừa giữ được sự mềm mại, kiêu sa giữa sự ngẫu hứng cùng vàng và đá, 
                                chiếc nhẫn đính đá CZ ấn tượng như người phụ nữ trưởng thành với phong cách và con đường riêng để khẳng định bản ngã của chính mình.</p>

                            <p className='mt-2 '><b>Lưu ý: Sản phẩm Free Size có thể điều chỉnh kích thước tùy ý. Nếu bạn yêu cầu khắc tên, vui lòng ấn liên hệ  để được hỗ trợ</b></p>


                            <div className='d-flex align-items-center'>
                                <QuantityBox/>
                                <Button className='btn-red btn-lg btn-big btn-round mr-2 ml-3'>Thêm vào giỏ hàng</Button>
                                <Button className='btn-white btn-lg btn-big btn-round'>Gọi Ngay(miễn Phí)</Button>
                            </div>


                            <div className='d-flex align-items-center mt-5 actions'>
                            <Button className='btn-round btn-sml' variant="outlined"><IoIosHeartEmpty/> &nbsp;   THÊM VÀO DANH SÁCH YÊU THÍCH</Button>
                            </div>

                        </div>
                    </div>
            </Dialog>
        </>
    )
}

export default ProductModal;