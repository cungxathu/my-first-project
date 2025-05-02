import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { PiGenderIntersex } from "react-icons/pi";
import { BsBoxes } from "react-icons/bs";


const Navigation = () =>{

    const [isopenSidebarVal,setisopenSidebarVal]= useState(false);

    return(
        <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2 mt-2 navPart1'>
                            <div className='catWrapper'>
                            <Button className='allCartTab align-items-center' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                                    <span className='icon1 mr-2'><IoMdMenu/></span>
                                    <span class='text'>Danh Mục</span>
                                    <span className='icon2 ml-2' ><FaAngleDown/></span>
                            </Button>

                            <div className={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/nhan"><Button>Nhẫn <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Vòng-Lắc<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Kiềng<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Dây Chuyền<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Bông Tai<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Đồng Hồ</Button></Link></li>
                                    <li><Link to="/"><Button>Trang Sức Đôi<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <BsBoxes/>Loại
                                            </a>
                                            < Link to="/"><Button>Vòng-Lắc</Button></Link>
                                            <Link to="/"><Button>Nhẫn</Button></Link>
                                            <Link to="/"><Button>Dây Chuyền</Button></Link>
                                            
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Trang Sức Bộ<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            </div>
                        </div>

                        <div className='col-sm-10 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                                <li className='list-inline-item'><Link to="/nhan"><Button>Nhẫn</Button></Link>
                                    <div className='submenu shadow'>
                                    <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Vòng-Lắc</Button></Link>
                                    <div className='submenu shadow'>
                                    <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Kiềng</Button></Link>
                                    <div className='submenu shadow'>
                                    <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Dây Chuyền</Button></Link>
                                    <div className='submenu shadow'>
                                    <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Bông Tai</Button></Link>
                                    <div className='submenu shadow'>
                                    <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Đồng Hồ</Button></Link></li>
                                <li className='list-inline-item'><Link to="/"><Button>Trang Sức Đôi</Button></Link>
                                    <div className='submenu shadow'>
                                    <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <BsBoxes/>Loại
                                            </a>
                                            < Link to="/"><Button>Vòng-Lắc</Button></Link>
                                            <Link to="/"><Button>Nhẫn</Button></Link>
                                            <Link to="/"><Button>Dây Chuyền</Button></Link>
                                            
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Trang Sức Bộ</Button></Link>
                                    <div className='submenu shadow'>
                                    <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <FiBox/> Chất Liệu
                                            </a>
                                            < Link to="/"><Button>Bạc</Button></Link>
                                            <Link to="/"><Button>Vàng</Button></Link>
                                            <Link to="/"><Button>Đá Quý</Button></Link>
                                            <Link to="/"><Button>Ngọc Trai</Button></Link>
                                            </div>
                                            <div className='submenu-column'>
                                            <a className="submenu-title">
                                                <PiGenderIntersex/>Giới Tính
                                            </a>
                                            <Link to="/"><Button>Nam</Button></Link>
                                            <Link to="/"><Button>Nữ</Button></Link>
                                            <Link to="/"><Button>Unisex</Button></Link>
                                            </div>
                                    </div>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )


}

export default Navigation;
