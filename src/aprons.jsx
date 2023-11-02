import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/aprons.css';
import {aprons} from './data/productsData';

export default function Aprons() {
    return (
        <>
            {/* Start */}
            <Helmet>
                <title>Buy Aprons - Rio Garments</title>
            </Helmet>

            {/* NAVBAR */}
            <Navbar activeButton={"products"} />

            {/* Body */}
            <div className='apronsList container-xxl'>
                {aprons.map((apron) => (
                    <div key={apron.id} className='aprons'>
                        <img src={apron.imageUrl} alt={apron.name} width={200} height={240} />
                        <div className='apronDetails'>
                            <h3>{apron.name}</h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                        <p><span>&#8377;</span>{apron.price}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />

        </>
    )
}