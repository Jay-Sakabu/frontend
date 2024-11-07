//Links for my sanity, ref later
// https://tailwindcss.com/docs/using-with-preprocessors
// https://stackoverflow.com/questions/69108874/when-installing-tailwind-css-in-vue-3-do-i-need-a-postcss-config-js-file
// People keep recommending it, citing faster builds? Probably a non-issue here, but use anyway
// https://tailwindcss.com/docs/reusing-styles#extracting-components-and-partials
// https://react.dev/reference/react/lazy

// https://tailwindcss.com/docs/responsive-design I've been designing the wrong way the entire time, headache for now, fixed down the line

// For use in prod
// https://tailwindcss.com/docs/optimizing-for-production


// Resource Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './input.css';  

// Pages
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';


//TODO: Give landing page dedicated file, take that stuff out of here and restructure

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Header />

        {/* Main Content Area */}
        <div className="flex-grow ml-64 ">
          <Main>
            <Routes>
              <Route 
                path="/" 
                element={
                  <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg animate-fade-in">
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
                      Welcome to My Portfolio
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      Explore my projects and get to know more about my work! Test test
                    </p>
                    <a href="https://www.google.com/" className="btn-primary">Get Started</a>
                    <p className="text-lg text-gray-700 mb-6">
                      Here is some extra text
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      and here's even more
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      and here's even more
                    </p>
                  </div>
                } 
              />
              {/* ROUTES Possibly add dedicated routes folder */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </Main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;