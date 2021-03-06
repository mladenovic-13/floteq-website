import { Link } from 'gatsby';
import React from 'react';

export default function FreePilot() {
  return (
    <section className="container mx-auto md:p-20 text-center">
      <h3 className="text-5xl font-semibold">Ready to work together?</h3>
      <p className="mt-8">
        <button
          type="button"
          className="bg-primary-lighter hover:bg-primary-darker text-xl inline-flex items-center justify-center px-8 py-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <Link to="/request-demo">FREE PILOT FOR YOUR VENUE</Link>
        </button>
      </p>
    </section>
  );
}
