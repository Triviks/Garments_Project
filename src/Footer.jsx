import './assets/css/Footer.css';
import compname from './assets/images/Rio_Garments_(3).png';

export default function Footer() {
    return(
        <>
            <footer className='footer container-fluid'>
                <div className='footer_contact'>
                    <h2>CONTACT US</h2>
                    <p>Address - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, repellendus odit.<br /> Mobile - xxxxxxxx</p>
                    <p>E-Mail - xxxx@gmail.com</p>  
                    {/* <p>Mobile - +91 xxxxxxxxxx</p> */}
                </div>

                <div className='socials'>
                    <span><ion-icon name="logo-instagram"></ion-icon></span>
                    <span><ion-icon name="logo-facebook"></ion-icon></span>
                    <span><ion-icon name="logo-twitter"></ion-icon></span>
                    <span><ion-icon name="logo-youtube"></ion-icon></span>
                    <span><ion-icon name="logo-pinterest"></ion-icon></span>
                    <span><ion-icon name="logo-linkedin"></ion-icon></span>
                </div>

                <div className='copyright'>
                    <img src={compname} /> <br />
                    <small>Copyright <sup>&copy;</sup> 2020 by RIO GARMENTS. All Rights Reserved</small>
                </div>
            </footer>
        </>
    );
}
