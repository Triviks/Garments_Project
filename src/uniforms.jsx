import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/uniforms.css';
import {uniforms} from './data/productsData';

export default function Uniforms() {
    return (
        <>
            {/* Start */}
            <Helmet>
                <title>Buy Uniforms - Rio Garments</title>
            </Helmet>

            {/* NAVBAR */}
            <Navbar activeButton={"products"} />

            {/* Body */}
            <div className='uniformsList container-xxl'>
                {uniforms.map((uniform) => (
                    <div key={uniform.id} className='uniforms'>
                        <img src={uniform.imageUrl} alt={uniform.name} width={200} height={240} />
                        <div className='uniformDetails'>
                            <h3>{uniform.name}</h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                        <p><span>&#8377;</span>{uniform.price}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />

        </>
    )
}