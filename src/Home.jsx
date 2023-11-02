import { Helmet } from 'react-helmet';
import './assets/css/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import closet from './assets/images/wepik-export-20230720144424bE4k cool.jpg';
import ReadMore from './Global';

export default function Home() {
    return(
        <>
            {/* Start */}
            <Helmet>
                <title>Rio Garments - Home</title>
            </Helmet>
            
            {/* NAVBAR */}
            <Navbar activeButton={"home"} />

            {/* Body */}
            <div className='container-xxl' id='main'>
                <div>
                    <h1>CURATED WITH</h1>
                    <h1>LOVE</h1>
                    <div className='para'>
                        <p>
                        Welcome to our recently established business. We are committed to providing a wide range of garment services that are specialised to satisfy the various needs of our esteemed clientele. We take great pride in providing a broad range of services, such as fine stitching, uniform design, overcoats, scrub dresses, air hostess attire, monochrome outfits, and much more.
                        </p>
                    </div>
                    <button className='readmore' onClick={ReadMore}>Read More...</button>
                </div>
                
                <div className='image'>
                    <img src={closet} />
                </div>

            </div>

            



            {/* FOOTER */}
            <Footer />
        </>
    );
}