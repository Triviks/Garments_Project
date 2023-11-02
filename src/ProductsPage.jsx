import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import scrubs from './assets/images/Scrubs/DSV-OLB-front_1024x1024.png';
import unifroms from './assets/images/Uniforms/group-children-uniforms-with-number-1-front_235573-4223.png';
import aprons from './assets/images/Aprons/it-s-time-spring-cleaning-garden.png';
import waistcoats from './assets/images/Waist Coats/young-elegant-handsome-businessman-male-model-blue-suit-fashionable-glasses-posing-studio.png';
import labcoats from './assets/images/Lab Coats/medium-shot-doctor-wearing-mask.png';
import overcoats from './assets/images/Over Coats/20168447_pd109-pdvintagecloth00388-image.png';

import { Link } from 'react-router-dom';

import './assets/css/ProductsPage.css';

export default function Products() {
    return(
        <>
            {/* Start */}
            <Helmet>
                <title>Buy from Rio Garments</title>
            </Helmet>
            
            {/* NAVBAR */}
            <Navbar activeButton={"products"} />

            {/* Body */}
            <div className='container-xxl' id='prodmain'>
                <Link to="/scrubs" className='no-underline'>
                    <div className='productBox'>
                        <div className='product'>
                            <img src={scrubs} height={220} /> <br /> 
                            <span>Shop now <br />high quality scrubs</span>
                        </div>

                        <div className='description'>
                            Scrubs <br />
                            Scrubs <br />
                            Scrubs <br />
                            Scrubs
                        </div>

                    </div>
                </Link>
                

                <Link to="/uniforms" className='no-underline'>
                    <div className='productBox'>
                        <div className='product'>
                            <img src={unifroms} height={220} width={270} /> <br /> 
                            <span>Shop now <br />durable uniforms</span>

                        </div>

                        <div className='description'>
                            Uniforms <br />
                            Uniforms <br />
                            Uniforms <br />
                            uniforms
                        </div>
                    </div>
                </Link>

                <Link to="/aprons" className='no-underline'>
                    <div className='productBox'>
                        <div className='product'>
                            <img src={aprons} height={220} /> <br /> 
                            <span>Shop now <br />premium aprons</span>
                        </div>

                        <div className='description'>
                            Aprons <br />
                            Aprons <br />
                            Aprons <br />
                            Aprons
                
                        </div>
                    </div>
                </Link>

                <Link to="/waistcoats" className='no-underline'>
                    <div className='productBox'>
                        <div className='product'>
                            <img src={waistcoats} height={220} /> <br /> 
                            <span>Shop now <br />Best-in-class waistcoats</span>
                        </div>

                        <div className='description'>
                            WaistCoats <br />
                            WaistCoats <br />
                            WaistCoats <br />
                            WaistCoats
                        </div>
                    </div>
                </Link>

                <Link to="/labcoats" className='no-underline'>
                    <div className='productBox'>
                        <div className='product'>
                            <img src={labcoats} height={220} /> <br /> 
                            <span>Shop now <br />medical grade labcoats</span>
                        </div>

                        <div className='description'>
                            LabCoats <br />
                            LabCoats <br />
                            LabCoats <br />
                            LabCoats
                        </div>
                    </div>
                </Link>

                <Link to="/overcoats" className='no-underline'>
                    <div className='productBox'>
                        <div className='product'>
                            <img src={overcoats} height={220} /> <br /> 
                            <span>Shop now <br />classic overcoats</span>
                        </div>

                        <div className='description'>
                            OverCoats <br />
                            OverCoats <br />
                            OverCoats <br />
                            OverCoats
                        </div>
                    </div>  
                </Link>

            </div>

            {/* FOOTER */}
            <Footer />
        </>
    );
}