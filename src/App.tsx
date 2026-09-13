import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
        DevStack
      </h1>
      <p className="text-slate-400 mt-2">Modern Tech Stack Builder</p>
    </div>
  );
};

export default App;
