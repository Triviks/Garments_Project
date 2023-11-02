import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/overcoats.css';
import {overcoats} from './data/productsData';

export default function Overcoats() {
    return (
        <>
            {/* Start */}
            <Helmet>
                <title>Buy Overcoats - Rio Garments</title>
            </Helmet>

            {/* NAVBAR */}
            <Navbar activeButton={"products"} />

            {/* Body */}
            <div className='overcoatsList container-xxl'>
                {overcoats.map((overcoat) => (
                    <div key={overcoat.id} className='overcoats'>
                        <img src={overcoat.imageUrl} alt={overcoat.name} width={200} height={240} />
                        <div className='overcoatDetails'>
                            <h3>{overcoat.name}</h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                        <p><span>&#8377;</span>{overcoat.price}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />

        </>
    )
}