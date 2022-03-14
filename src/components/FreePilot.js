import React from 'react';
import Button from './Button';

export default function FreePilot() {
  return (
    <section className="container mx-auto my-20 py-24 bg-gray-100 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to work together?</h3>
      <p className="mt-8">
        <Button className="bg-primary-lighter hover:bg-primary-darker" size="xl">
          Free Pilot for your Venue
        </Button>
      </p>
    </section>
  );
}
