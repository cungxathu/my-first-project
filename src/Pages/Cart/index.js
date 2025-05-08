import { Link } from "react-router-dom";
import QuantityBox from '../../Components/QuantityBox';
import { IoIosClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCartSharp } from "react-icons/io5";

const Cart = () =>{
    return(
        <>
            <section className="section cartPage">
                <div className="container">
                <h2 className="hd1 mb-1">Your Cart</h2>
                    <p>There are <b className="text-red">3</b> products in your cart</p>

                    <div className="row">
                        <div className="col-md-9 pr-5">
                        

                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                               <th width="35%">Product</th>
                               <th width="15%">Unit Price</th>
                               <th width="25%">Quantity</th>
                               <th width="15%">Subtotal</th>
                               <th width="10%">Remove</th>
                            </tr>
                            </thead>
                        
                        <tbody>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center cartimgWrapper">
                                        <div className="imgWrapper">
                                            <img src="https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png" className="w-100" />
                                        </div>

                                        <div className="info px-3">
                                            <h6>Nhẫn Vàng 18K Đính đá CZ PNJ XM00Y005207</h6>
                                        </div>
                                    </div>
                                    </Link>
                                </td>
                                <td width="15%">6.088.000 đ</td>
                                <td width="25%">
                                    <QuantityBox />
                                </td>
                                <td width="15%" >6.088.000 đ</td>
                                <td width="10%"><span className="remove"><IoIosClose /></span></td>
                            </tr>
                            
                        </tbody>
                        </table>
                    </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border p-3 cartDetails">
                                <h4>CART TOTALS</h4>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Subtotal</span>
                                    <span className="ml-auto text-red font-weight-bold">6.088.000 đ</span>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Shipping</span>
                                    <span className="ml-auto "><b>Free</b></span>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Totals</span>
                                    <span className="ml-auto text-red font-weight-bold">6.088.000 đ</span>
                                </div>

                                <br/>
                                <Button className='btn-red btn-lg btn-big btn-round mr-2 ml-3'><IoCartSharp />Thanh Toán</Button>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
export default Cart;