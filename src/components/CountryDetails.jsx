import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CountryDetails() {
  const { countryId } = useParams();
  const navigate = useNavigate();
  
  const countryData = {
    name: 'United States',
    capital: 'Washington, D.C.',
    population: '331,002,651',
    area: '9,833,517 km²',
    region: 'Americas',
    languages: ['English'],
  };

  return (
    <div className="p-5 max-w-[1000px] mx-auto">
      <button 
        className="px-4 py-2 mb-5 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="flex items-center gap-5 mb-10 md:flex-row flex-col">
        <img 
          src={`https://flagcdn.com/w320/${countryId.toLowerCase()}.png`}
          alt={`${countryData.name} flag`}
          className="w-[120px] rounded shadow-md"
        />
        <h1 className="text-3xl font-bold text-gray-900">{countryData.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-gray-600 text-sm mb-2">Capital</h3>
          <p className="text-gray-900">{countryData.capital}</p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-gray-600 text-sm mb-2">Population</h3>
          <p className="text-gray-900">{countryData.population}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;