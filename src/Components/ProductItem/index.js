import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useNavigate } from 'react-router-dom';


const ProductItem = () =>{

    const navigate = useNavigate();

    const context = useContext(MyContext);

    const viewProductDetails=(id)=>{
        context.setisOpenProductModal(true);

    }

   

    return(
        <>
        <div className="item productItem" onClick={() => navigate(`/product/${1}`)} // 👉 chuyển trang chi tiết
        style={{ cursor: 'pointer' }} >
                                        <div className="imgWrapper">
                                            <img src="https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png" className="w-100" alt="Product"/>
                                        
                                        <span className="badge badge-primary">-14.1%</span>
                                        
                                        <div className="actions">
                                            <Button onClick={(e) => { e.stopPropagation(); viewProductDetails(1);}}><TfiFullscreen/></Button>
                                            <Button onClick={(e) => e.stopPropagation()}><IoIosHeartEmpty style={{fontSize: '20px'}}/></Button>
                                        </div>
                                        
                                        </div>
                                        <div className="info">
                                        <h4 className="spham">Nhẫn Vàng 18K Đính đá CZ PNJ XM00Y005207</h4>
                                        <div className="d-flex align-items-center">
                                        <span className="oldPrice">7.088.000 đ</span>
                                        <span className="netPrice text-danger  ml-2 ">6.088.000 đ</span>
                                        </div>
                                        <p className="promotion mt-4">Tặng bình giữ nhiệt PJI</p>
                                        <p className="sold">133 đã bán</p>
                                        </div>
                                        
                                    </div>

                                    


                                    {/* <ProductModal/>  */}
                                    
        </>
    )

    

}

export default ProductItem