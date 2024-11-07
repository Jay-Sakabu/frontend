import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow flex flex-col items-center justify-center p-8 relative">
        {/* Black Box with TailwindCSS Animation */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg animate-fade-in z-0">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg mb-6">
           I have literally nothing to show here
          </p>
          <p className="text-lg">
           <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png' alt='pika'></img>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;