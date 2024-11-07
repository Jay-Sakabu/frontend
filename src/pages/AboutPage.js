import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow flex flex-col items-center justify-center p-8 relative">
        {/* Black Box with TailwindCSS Animation */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg animate-fade-in z-0">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            I am a passionate web developer with experience in building React-based applications. This is from AboutPage.js.
            I enjoy creating responsive, user-friendly interfaces and exploring new technologies.
          </p>
          <p className="text-lg">
            My skills include JavaScript, React, TailwindCSS, and more. 
            I am constantly learning and improving my skills to stay updated in the fast-paced world of web development.
          </p>

            {/* PDF Display */}
      <div className="w-full max-w-3xl mb-6">
        <embed 
          src="/JaySakabu.pdf" 
          type="application/pdf" 
          className="w-full h-96 border rounded-lg"
        />
      </div>

      {/* Download Button */}
      <a 
        href="/JaySakabu.pdf" 
        download 
        className="btn-primary bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
      >
        Download My Resume
      </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;