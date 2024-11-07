import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="flex-grow flex items-center justify-center text-center p-8 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
};

export default Main;