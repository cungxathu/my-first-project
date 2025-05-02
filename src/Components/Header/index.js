import { Link } from 'react-router-dom';
import Logo from '../../Assets/imges/Logo.png';
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { FiUser } from "react-icons/fi";
import { CiBag1 } from "react-icons/ci";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { useContext } from 'react';


const Header =()=>{

    const context = useContext(MyContext);

    return(
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Chào mừng bạn đến với PJI</p>
                     
                </div>
            </div>

            <header className="header"> 
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='Logo'></img></Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>

                            {
                                context.countryList.length!==0 && <CountryDropdown/> 
                            }
                        

                            <SearchBox/>

                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'><FiUser/></Button>
                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='price'>0VND</span>
                                    <div className='position-relative ml-2'>
                                    <Button className='circle'><CiBag1/></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation/>



        </div>
        
        </>
    )
}

export default Header;