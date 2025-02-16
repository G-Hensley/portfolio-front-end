import './Footer.css';
import { GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react';

export default function Footer() {

    let date = new Date();
    let year = date.getFullYear();

    return (

        <footer className='absolute bg-purple bottom-0 flex gap-32 justify-center py-6 text-primary-cyan-900 w-full'>

            <section id="contact-section">

                <h3 className="footer-title text-mobile-lg-body sm:text-desktop-lg-body">Contact Me</h3>

                <form className='flex flex-col items-center mb-4'>
                    <div id="name-email-container" className='flex gap-4'>
                        <div className="input-container flex flex-col">
                            <label htmlFor="name" className="font-body-ff">Name:</label>
                            <input type="text" id="name" className="contact-input" placeholder='Your Name' required/>
                        </div>

                        <div className="input-container flex flex-col">
                            <label htmlFor="email" className="font-body-ff">Email:</label>
                            <input type="email" id="email" className="contact-input" placeholder='Email' required/>
                        </div>
                    </div>
                    <div className="message-btn-container flex gap-12 items-center">
                        <div className="input-container flex flex-col">
                            <label htmlFor="message" className="font-body-ff">Message:</label>
                            <textarea id="message" className="contact-input" placeholder='Message' rows={4} required/>
                        </div>

                        <button id='contact-btn' type="submit" className="btn py-2 px-4 font-body-ff h-fit mt-2">Submit</button>
                    </div>
                </form>

            </section>

            <section id="social-section" className='flex flex-col gap-4 h-fit py-2'>

                <a target='_blank' href="https://github.com/G-Hensley/" className="social-link h-fit">
                    <GithubLogo size={36} className='social-icon'/>
                </a>
                <a target='_blank' href="https://linkedin.com/in/g-hensley/" className="social-link h-fit">
                    <LinkedinLogo size={36} className='social-icon'/>
                </a>
                <a target='_blank' href="https://x.com/GavinHensleyDev" className="social-link h-fit">
                    <XLogo size={36} className='social-icon'/>
                </a>

            </section>

            <p id='copyright' className='absolute bottom-0 text-md text-primary-magenta-900 font-body-ff'>
                © {year} Gavin Hensley. All Rights Reserved.
            </p>

        </footer>

    )

}