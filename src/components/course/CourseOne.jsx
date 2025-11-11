import React from 'react';

const CourseOne = () => {
  return (
    <div className=" mt-20">


      {/* Hero Section */}
      <section className="bg-blue-100 p-5 md:p-16 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center  md:px-12">
          <div className="max-w-2xl">
            <p className="uppercase text-sm tracking-wider text-gray-800 mb-2">Ini ACADEMIC CERTIFICATIONS</p>
            <h2 className="text-4xl md:text-5xl font-light leading-normal bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6">Foundations Certifications</h2>
            <p className="text-gray-700 leading-relaxed">
              The Ini Foundations Certification proves your digital skills through hands-on website building. Modular training helps you earn an industry-recognized credential and stand out in the job market.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="w-40 h-40 border-2 border-gray-700 rounded-full flex flex-col justify-center items-center text-center">
              <span className="text-lg font-medium">FOUNDATIONS</span>
              <span className="text-sm">Ini CERTIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h3 className="text-4xl md:text-5xl font-light leading-normal bg-gradient-to-t from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6">Who is this for</h3>
        <p className="text-gray-700 leading-relaxed">
          Students, recent graduates, and professionals building their first Ini website who want to demonstrate their emerging digital skills for employers, recruiters, and their network.
        </p>
        <p className="text-gray-600 text-sm mt-4">
          This certification is also available to attendees of our Ini University webinars.
        </p>
      </section>

      {/* What you will learn */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-gray-200">
        <h3 className="text-4xl md:text-5xl font-light leading-normal bg-gradient-to-t from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6">What you will learn:</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>3 simple steps to plan your site with ease</li>
          <li>Showcase your skills and value to any audience</li>
          <li>Design and customize your professional site on Ini</li>
        </ul>
      </section>

      {/* How to get certified */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h3 className="text-4xl md:text-5xl font-light leading-normal bg-gradient-to-t from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6">How to get certified</h3>
        <div className="space-y-6">
          {[ 
            { step: '01', text: 'Enroll in the Ini Foundations Pathway' },
            { step: '02', text: 'Complete the Foundations Knowledge Check and publish your Ini website' },
            { step: '03', text: 'Submit your application materials to the Ini Foundations Application form' }
          ].map(({ step, text }) => (
            <div key={step} className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
              <div className="bg-white w-28 flex justify-center items-center text-3xl font-light py-8 border-r border-gray-300">{step}</div>
              <div className="flex-1 p-6 text-lg">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-light">Creators showcase their websites</h3>
          <p className="text-sm text-gray-600 max-w-sm text-right">
            Explore user-built sites that showcase bold vision, style, and storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black text-white rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x200" alt="Voice Performer" className="w-full" />
            <div className="p-4">
              <h4 className="text-lg font-medium">JIN YEONG SO</h4>
              <p className="text-sm">Singer & Actor</p>
              <p className="text-xs mt-2 opacity-80">VOICE PERFORMER<br />JIN YEONG SO, BERKLEE COLLEGE OF MUSIC</p>
            </div>
          </div>

          <div className="bg-white border rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x200" alt="Communication Design" className="w-full" />
            <div className="p-4">
              <h4 className="text-lg font-medium">MIN PARK</h4>
              <p className="text-sm">Communication Design</p>
              <p className="text-xs mt-2 text-gray-600">COMMUNICATION DESIGN<br />MIN PARK, PRATT INSTITUTE</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x200" alt="Acting" className="w-full" />
            <div className="p-4">
              <h4 className="text-lg font-medium">JOHN HARMON COOPER</h4>
              <p className="text-sm">Actor, Singer, Writer</p>
              <p className="text-xs mt-2 text-gray-600">ACTING<br />JOHN HARMON COOPER, YALE UNIVERSITY</p>
            </div>
          </div>
        </div>
      </section> */}


    </div>
  );
};

export default CourseOne;