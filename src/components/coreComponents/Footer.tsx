import './Footer.css';
import ClickableIcon from './ClickableIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
// import { IoLogoNodejs } from 'react-icons/io';
import { GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react';
import { BiLogoTypescript, BiLogoTailwindCss } from 'react-icons/bi';
import { IoLogoVercel } from 'react-icons/io5';
// import { SiPrisma, SiExpress } from "react-icons/si";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer({ children }: { children: React.ReactNode }) {
  const date = new Date();
  const year = date.getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_66hzzbj', // Replace with your EmailJS service ID
        'template_dnzt6oa', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'KSVDEaxkGo5NLSlgp' // Replace with your EmailJS public key
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const techStack = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faReact}
          className='skill-icon text-4xl md:text-5xl'
        />
      ),
      link: 'https://react.dev/',
      label: 'React',
    },
    // { icon: <IoLogoNodejs className="skill-icon text-4xl md:text-5xl" />, link: "https://nodejs.org/", label: "Node.js" },
    // { icon: <BiLogoPostgresql className="skill-icon text-4xl md:text-5xl" />, link: "https://www.postgresql.org/", label: "PostgreSQL" },
    // { icon: <SiPrisma className="skill-icon text-4xl md:text-5xl" />, link: "https://www.prisma.io/", label: "Prisma" },
    {
      icon: <BiLogoTypescript className='skill-icon text-4xl md:text-5xl' />,
      link: 'https://www.typescriptlang.org/',
      label: 'TypeScript',
    },
    {
      icon: <BiLogoTailwindCss className='skill-icon text-4xl md:text-5xl' />,
      link: 'https://tailwindcss.com/',
      label: 'Tailwind CSS',
    },
    // { icon: <BiLogoGraphql className="skill-icon text-4xl md:text-5xl" />, link: "https://graphql.org/", label: "GraphQL" },
    // { icon: <BiLogoHeroku className="skill-icon text-4xl md:text-5xl" />, link: "https://www.heroku.com/", label: "Heroku" },
    {
      icon: <IoLogoVercel className='skill-icon text-4xl md:text-5xl' />,
      link: 'https://vercel.com/',
      label: 'Vercel',
    },
    // { icon: <SiExpress className="skill-icon text-4xl md:text-5xl" />, link: "https://expressjs.com/", label: "Express" },
  ];

  const socialIcons = [
    {
      icon: <GithubLogo className='skill-icon text-4xl md:text-5xl' />,
      link: 'https://github.com/G-Hensley/',
      label: 'GitHub',
    },
    {
      icon: <LinkedinLogo className='skill-icon text-4xl md:text-5xl' />,
      link: 'https://linkedin.com/in/g-hensley/',
      label: 'LinkedIn',
    },
    {
      icon: <XLogo className='skill-icon text-4xl md:text-5xl' />,
      link: 'https://x.com/GavinHensleyDev',
      label: 'X',
    },
  ];

  return (
    <footer
      className='bottom-0 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-32 py-6 relative pb-12 text-primary-cyan-900 w-full'
      id='footer'
      role='contentinfo'
      aria-label='Footer with contact form and social links'>
      {children}

      <section
        id='tech-stack-section'
        className='flex flex-col gap-2 items-center mx-4 md:mx-0 md:ml-4 2xl:w-1/3'
        aria-labelledby='tech-stack-title'>
        <h3
          id='tech-stack-title'
          className='footer-title text-mobile-lg-body md:text-desktop-lg-body'>
          Tech Stack
        </h3>

        <div
          className='icon-container flex gap-y-4 gap-x-8 flex-wrap 2xl:w-3/4 justify-center'
          aria-label='Technology links'>
          {techStack.map((tech, index) => (
            <ClickableIcon
              key={index}
              icon={tech.icon}
              link={tech.link}
              label={tech.label}
            />
          ))}
        </div>
      </section>

      <section
        id='contact-section'
        className='self-center h-fit w-fit md:justify-bottom'
        aria-labelledby='contact-title'>
        <h3
          id='contact-title'
          className='footer-title text-mobile-lg-body md:text-desktop-lg-body'>
          Contact Me
        </h3>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center md:mb-4'
          aria-labelledby='contact-title'
          noValidate>
          <div
            id='name-email-container'
            className='flex flex-col xl:flex-row xl:gap-4 w-full'>
            <div className='input-container flex flex-col'>
              <label
                htmlFor='name'
                className='font-body-ff md:text-desktop-body'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='contact-input'
                placeholder='Your Name'
                required
                aria-required='true'
                aria-invalid={formData.name === '' ? 'true' : 'false'}
              />
            </div>

            <div className='input-container flex flex-col'>
              <label
                htmlFor='email'
                className='font-body-ff md:text-desktop-body'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='contact-input'
                placeholder='Your Email'
                required
                aria-required='true'
                aria-invalid={formData.email === '' ? 'true' : 'false'}
              />
            </div>
          </div>
          <div className='message-btn-container flex flex-col gap-4 items-center w-full'>
            <div className='input-container flex flex-col w-full'>
              <label
                htmlFor='message'
                className='font-body-ff md:text-desktop-body'>
                Message:
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='contact-input'
                placeholder='Your Message Here...'
                rows={4}
                required
                aria-required='true'
                aria-invalid={formData.message === '' ? 'true' : 'false'}
              />
            </div>

            <button
              type='submit'
              id='contact-btn'
              className='btn font-body-ff h-fit md:text-desktop-body'
              disabled={status === 'sending'}
              aria-busy={status === 'sending'}>
              {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
            </button>
          </div>
          {status === 'success' && (
            <p className='text-green-500 mt-2' role='status' aria-live='polite'>
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className='text-red-500 mt-2' role='alert'>
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </section>

      <section
        id='social-section'
        className='flex flex-col gap-2 justify-center items-center md:mr-4 2xl:w-1/3 h-full'
        aria-labelledby='social-title'>
        <h3
          id='social-title'
          className='footer-title text-mobile-lg-body md:text-desktop-lg-body'>
          Social
        </h3>

        <div
          className='icon-container flex md:flex-col gap-y-4 gap-x-8 items-center 2xl:w-3/4'
          aria-label='Social media links'>
          {socialIcons.map((tech, index) => (
            <ClickableIcon
              key={index}
              icon={tech.icon}
              link={tech.link}
              label={tech.label}
            />
          ))}
        </div>
      </section>

      <p
        id='copyright'
        className='absolute bottom-0 text-md text-primary-magenta-900 font-body-ff w-full text-center bg-charcoal py-2'>
        © {year}{' '}
        <a
          className='underline'
          href='https://github.com/G-Hensley/'
          aria-label="Gavin Hensley's GitHub profile">
          Gavin Hensley
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
}
