import React from 'react';
import Catalogue from './components/Catalogue';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">Product Catalogue</h1>
      <Catalogue />
    </div>
  );
}

export default App;
