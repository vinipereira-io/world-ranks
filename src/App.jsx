import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/country/:countryId" element={<CountryDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
