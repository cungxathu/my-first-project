import React from "react";
import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { RiExchangeBoxLine } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import Logo from '../../Assets/imges/Logo.png';
import { Link } from 'react-router-dom';
import { GoClock } from "react-icons/go";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Button from '@mui/material/Button';
import FeedbackForm from "./Feedback";



const Footer = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    return(
        <footer>
            <div class="container">
                <div class="bg-white text-black ">
                    <div class="mx-auto px-4 py-8 ">
        
                <div class="top-section">
                    <div>
                        <CiFaceSmile size={50} />
                        <h2>KHÁCH HÀNG HÀI LÒNG</h2>
                        <p>Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động</p>
                    </div>
                    <div>
                        <CiMedal size={50}/>
                        <h2>CHẤT LƯỢNG CAO CẤP</h2>
                        <p>Mọi sản phẩm đều được thiết kế và chế tác bởi các nghệ nhân hàng đầu</p>
                    </div>
                    <div>
                        <RiExchangeBoxLine size={50} />
                        <h2>ĐỔI TRẢ DỄ DÀNG</h2>
                        <p>10 ngày đổi trả (PJI đến tận nơi nhận hàng). Hoàn tiền nếu không hài lòng</p>
                    </div>
                    <div>
                    <FaHeadset  size={50}/>
                    <h2>HỖ TRỢ NHIỆT TÌNH</h2>
                    <p>Tất cả câu hỏi đều được các chuyên viên của PJI tư vấn, giải đáp kỹ càng</p>
                    </div>
                </div>

        
                <div class="bottom-section">
            
                    <div class="contact-info">
                        <Link to={'/'}><img src={Logo} alt='Logo'></img></Link>
                        <p><LuPhone /> 0838009900 (chính)</p>
                        <p><LuPhone /> 0838009900 (phụ)</p>
                        <p><FaRegEnvelope /> Contact@PJI.vn</p>
                        <p><LiaMapMarkerAltSolid />  Hà Nội</p>
                        <p><GoClock /> Thứ 2 - CN : 8h00 - 24h00</p>
                        <div className="flex items-center custom-icons ">
                            <a href="https://www.facebook.com/thien.nguda.9" className="">
                                <FaFacebookSquare style={{ fontSize: "2rem", color: "#1877F2" }} />
                            </a>
                            <a href="#" className="">
                                <FaInstagram style={{ fontSize: "2rem", color: "#E4405F" }}/>
                            </a>
                            <a href="#" className="">
                                <AiFillTikTok style={{ fontSize: "2rem", color: "#000000" }} />
                            </a>
                            <a href="#" className="">
                                <FaYoutube style={{ fontSize: "2rem", color: "#FF0000" }} />
                            </a>
                        </div>

                    </div>

            
                    <div>
                        <h3>DỊCH VỤ KHÁCH HÀNG</h3>
                        <ul>
                            <li>Điều khoản và điều kiện</li>
                            <li>Chính sách trả hàng hoàn tiền</li>
                            <li>Chính sách giao hàng</li>
                            <li>Chính sách quyền riêng tư</li>
                            <li>Hướng dẫn mua hàng online</li>
                        </ul>
                    </div>

            
                    <div>
                        <h3>CẨM NANG SỬ DỤNG</h3>
                        <ul>
                            <li>Tại sao nên chọn bạc cao cấp?</li>
                            <li>Cách làm trắng bạc tại nhà</li>
                            <li>Phân biệt các loại bạc S925, S999,...</li>
                            <li>Những tác dụng của bạc</li>
                            <li>Cách bảo quản trang sức bạc</li>
                        </ul>
                    </div>

            
                    <div>
                        <h3>THÔNG TIN CHUNG</h3>
                        <ul>
                            <li>Tin trang sức</li>
                            <li>Quyền lợi thành viên</li>
                            <li>Tiếp thị liên kết PJI</li>
                            <li>Ưu đãi khi đánh giá</li>
                            <li>Nhận quà tri ân</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>
                    <div class="feedback">
                        <h3>Ý KIẾN ĐÓNG GÓP</h3>
                        <p>PJI luôn mong nhận được ý kiến đóng góp từ bạn để nâng cấp dịch vụ và sản phẩm tốt hơn.</p>
                        <p>Nếu bạn có ý kiến, đừng ngần ngại đóng góp cho PJI nhé. PJI xin cảm ơn!</p>
                        <Button className="feedback-button" onClick={() => setIsOpenModal(true)}>
                                GỬI Ý KIẾN
                        </Button>
                        <FeedbackForm isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
                    </div>
                </div>

        
                
            </div>

    
        
        </div>
        </div>
    </footer>
        
    )
}
    

export default Footer;