import './Footer.css';

export default function Footer() {

    let date = new Date();
    let year = date.getFullYear();

    return (

        <footer className='absolute bg-purple bottom-0 flex justify-center w-full'>

            <section id="contact-section">

                <h3 className="footer-title text-mobile-lg-body sm:text-desktop-lg-body">Contact</h3>

            </section>

            <section id="social-section">

                <h3 className="footer-title text-mobile-lg-body sm:text-desktop-lg-body">Social</h3>

            </section>

            <p id='copyright' className='text-white'>
                © {year} Gavin Hensley. All Rights Reserved.
            </p>

        </footer>

    )

}