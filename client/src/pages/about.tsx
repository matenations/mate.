import React from "react";

const AboutMate = () => (
  <main className="min-h-screen bg-white text-gray-900 p-8">
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Mate</h1>
      <p className="mb-6 text-lg">
        Welcome to Mate! This site is a showcase of our team, ambassadors, partners, and more. Explore the sections to learn about our mission, people, and collaborations.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Meet our team and ambassadors</li>
        <li>Discover our partners</li>
        <li>Contact us for collaborations</li>
      </ul>
      <p className="text-md text-gray-700">
        For more information, browse the navigation or reach out via our contact page.
      </p>
    </section>
  </main>
);

export default AboutMate;
