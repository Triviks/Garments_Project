import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/labcoats.css';
import { labcoats } from './data/productsData';

export default function Labcoats() {
    return (
        <>
            {/* Start */}
            <Helmet>
                <title>Buy Labcoats - Rio Garments</title>
            </Helmet>

            {/* NAVBAR */}
            <Navbar activeButton={"products"} />

            {/* Body */}
            <div className='labcoatsList container-xxl'>
                {labcoats.map((labcoat) => (
                    <div key={labcoat.id} className='labcoats'>
                        <img src={labcoat.imageUrl} alt={labcoat.name} width={200} height={240} />
                        <div className='labcoatDetails'>
                            <h3>{labcoat.name}</h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                        <p><span>&#8377;</span>{labcoat.price}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />

        </>
    )
}