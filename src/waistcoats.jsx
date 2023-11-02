import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/waistcoats.css';
import { waistcoats } from './data/productsData';

export default function Waistcoats() {
    return (
        <>
            {/* Start */}
            <Helmet>
                <title>Buy Waistcoats - Rio Garments</title>
            </Helmet>

            {/* NAVBAR */}
            <Navbar activeButton={"products"} />

            {/* Body */}
            <div className='waistcoatsList container-xxl'>
                {waistcoats.map((waistcoat) => (
                    <div key={waistcoat.id} className='waistcoats'>
                        <img src={waistcoat.imageUrl} alt={waistcoat.name} width={200} height={240} />
                        <div className='waistcoatDetails'>
                            <h3>{waistcoat.name}</h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                        <p><span>&#8377;</span>{waistcoat.price}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />

        </>
    )
}