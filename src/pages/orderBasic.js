import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Order = () => {
  // MODAL STATE
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  // FORM RESPONSE STATES
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

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // GETFORM API
    const form = e.target;
    let formData = new FormData(form);
    formData.append('NEW ORDER', 'BASIC');

    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/7cf93cc3-c68e-431e-8bae-04020c1c73bc',
      data: formData,
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });

    openModal();
  };

  return (
    <>
      <Header />
      <section className="w-full max-w-2xl px-6 mt-16 mb-6 py-12 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-3xl font-semibold text-center text-gray-800 ">Order: BASIC</h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">Name</label>

                <input
                  name="Name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                />
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">
                  Phone Number:
                </label>

                <input
                  name="Phone Number"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
                  type="tel"
                />
              </div>
              <div className="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">E-mail</label>

                <input
                  name="Email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 ">Message</label>

              <textarea
                name="Message"
                className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Order
              </button>
            </div>
          </div>
        </form>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Order successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your order has been successfully submitted. We’ve sent you an email with all of
                    the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Footer />
    </>
  );
};
export default Order;
