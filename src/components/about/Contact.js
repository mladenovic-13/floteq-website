import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';

export default function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/7cf93cc3-c68e-431e-8bae-04020c1c73bc',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <section id="contact" className="py-16">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="text-lg py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Where to find us:</p>
          <div className="space-y-4 ">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                1300 FLOTEQ Suite 305,
                <br /> 5 Celebration Drive Bella Vista NSW 2153
              </span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Sindjeliceva 40, Vracar Belgrade, 11000, Serbia</span>
            </p>

            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>miles@floteq.com.au</span>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            <span className="mb-1">Full Name</span>
            <input
              name="Name"
              type="text"
              placeholder="Leroy Jenkins"
              className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
            />
          </label>
          <label className="block">
            <span className="mb-1">Email Address</span>
            <input
              name="Email"
              type="email"
              placeholder="leroy@jenkins.com"
              className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
            />
          </label>
          <label className="block">
            <span className="mb-1">Contact tel:</span>
            <input
              name="Phone"
              type="tel"
              placeholder="Phone Number"
              className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              name="Message"
              rows="5"
              className="block w-full rounded-md border-2 focus:ring focus:ring-opacity-75 bg-white "
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-primary-lighter hover:bg-primary-darker text-white self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-violet-400 hover:ring-violet-400"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
