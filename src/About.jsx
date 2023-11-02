import { Helmet } from 'react-helmet';
import './assets/css/About.css';
// import abt from './assets/images/pexels-craig-adderley-1682699.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


export default function About() {
    return(
        <>
            {/* Start */}
            <Helmet>
                <title>About Us</title>
            </Helmet>

            <Navbar activeButton={"about"}/>


            {/* Body */}
            <div className='container-xxl' id='abtmain'>
                <div className='abtImg'>
                    {/* <img src={abt} width={400}/> */}
                    <h1>About Us</h1>
                </div>
                <p className='abtText'>
                Welcome to our newly established company, dedicated to offering a comprehensive range of garment services tailored to meet the diverse needs of our esteemed clientele. We take great pride in delivering a wide spectrum of services, including premium stitching, uniform creation, overcoats, scrub dresses, air hostess attire, monochrome ensembles, and much more. <br />
                Our team is composed of highly skilled and extensively trained tailors renowned for their precision, unwavering attention to detail, and punctual service delivery. We approach our work with utmost seriousness, ensuring that every garment we create is of the highest quality and exceeds your expectations. <br /> <br />
                At our company, we serve a diverse clientele, each with unique demands. We firmly believe in providing personalized services to cater to individual preferences. We carefully listen to your specific requirements and deliver tailor-made solutions perfectly aligned with your needs.
                With a proven track record of delivering exceptional service, we have had the privilege of serving up to 450 clients in a single instance. Our expertise and proficiency are evident in the exceptional quality of our work, making us the preferred choice for numerous clients.
                Our company places a premium on values such as quality, integrity, and unwavering commitment to delivering the finest services to our clients. We eagerly anticipate the opportunity to serve you and provide you with the highest standard of garment services available.
                </p>
            </div>
        


            {/* FOOTER */}
            <Footer />
        </>
    );
}