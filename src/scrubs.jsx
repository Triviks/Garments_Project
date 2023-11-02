import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/scrubs.css';
import {scrubs} from './data/productsData';

export default function Scrubs() {

    return (
        <>
            {/* Start */}
            <Helmet>
                <title>Buy Scrubs - Rio Garments</title>
            </Helmet>

            {/* NAVBAR */}
            <Navbar activeButton={"products"} />

            {/* Body */}
            <div className='scrubsList container-xxl'>
                {scrubs.map((scrub) => (
                    <div key={scrub.id} className='scrubs'>
                        <img src={scrub.imageUrl} alt={scrub.name} width={200} height={240} />
                        <div className='scrubDetails'>
                            <h3>{scrub.name}</h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                        <p><span>&#8377;</span>{scrub.price}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />

        </>
    )
}