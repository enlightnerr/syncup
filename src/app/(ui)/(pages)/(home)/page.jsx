'use client';
import axios from 'axios';
import { Prosto_One } from 'next/font/google';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const prosto_one = Prosto_One({
  weight: '400',
  subsets: ['latin'],
});

const HomePage = () => {
  const [contactFormData, setContactFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleContact = async () => {
    try {
      setLoading(true);
      if (
        contactFormData.fullname.length < 3 &&
        contactFormData.email.length < 5 &&
        !contactFormData.email.includes('@')
      ) {
        toast.error('Please enter correct details');
      } else {
        const res = await axios.post('/api/contact', contactFormData);
        toast.success('Founder will contact shortly');
      }
      setContactFormData({
        fullname: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      contactFormData.fullname.length > 3 &&
      contactFormData.email.length > 3 &&
      contactFormData.email.includes('@')
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [contactFormData]);

  return (
    <div className="home__container">
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <div className="heading__container">
        <h1 className={`${prosto_one.className}`}>
          {/* Unite, Create, Innovate, Sync */}
          Bridging gaps for visionary minds!
        </h1>
      </div>
      <div className="contact-form__container">
        <form action="" className="contact-form">
          <div className="form-heading__container">
            <h2>Curios to know more?</h2>
          </div>
          <div className="fullname__container">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              required={true}
              placeholder="John Doe"
              value={contactFormData.fullname}
              onChange={(e) => {
                setContactFormData((prev) => {
                  return { ...prev, fullname: e.target.value };
                });
              }}
            />
          </div>
          <div className="email__container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@google.com"
              required={true}
              value={contactFormData.email}
              onChange={(e) => {
                setContactFormData((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
          </div>
          <div className="message__container">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Please write your message here..."
              required={true}
              value={contactFormData.message}
              onChange={(e) => {
                setContactFormData((prev) => {
                  return { ...prev, message: e.target.value };
                });
              }}
            />
          </div>
        </form>
        <div className="form-button__container">
          <button
            type="submit"
            onClick={handleContact}
            className={btnDisabled ? 'button-inactive' : 'button-active'}
          >
            {loading ? 'Sending' : 'Send'}
          </button>
        </div>
      </div>
      <div className="blob__container absolute">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="fixed -left-10 bottom-0 -z-10 w-[700px] animate-bounce blur-3xl 
          sm:top-20 md:w-[800px] lg:left-44 lg:w-[800px]"
        >
          <path
            fill="#687EFF"
            d="M48,-39.7C60.8,-22.2,68.9,-2.3,65,14.9C61.1,32,45.2,46.5,26,56.9C6.7,67.3,-15.9,73.7,-35.8,67C-55.6,60.2,-72.7,40.4,-76.3,19C-79.9,-2.3,-69.9,-25.1,-54.9,-43.1C-40,-61.2,-20,-74.5,-1.2,-73.5C17.6,-72.6,35.2,-57.3,48,-39.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
