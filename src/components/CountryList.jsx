import React from 'react';
import { Link } from 'react-router-dom';

function CountryList() {
  // Mock data - you'll replace this with real API data later
  const countries = [
    { id: 'US', name: 'United States', population: '331,002,651', region: 'Americas' },
    { id: 'GB', name: 'United Kingdom', population: '67,886,011', region: 'Europe' },
    { id: 'FR', name: 'France', population: '67,391,582', region: 'Europe' },
    { id: 'BR', name: 'Brazil', population: '214,300,000', region: 'Americas' },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">
        All Countries
      </h2>
      
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                Flag
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Population
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Region
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {countries.map((country) => (
              <tr 
                key={country.id}
                className="hover:bg-gray-50"
              >
                <td className="whitespace-nowrap py-4 pl-4 pr-3">
                  <img 
                    src={`https://flagcdn.com/w40/${country.id.toLowerCase()}.png`}
                    alt={`${country.name} flag`}
                    className="h-6 w-auto"
                  />
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <Link 
                    to={`/country/${country.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {country.name}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                  {country.population}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                  {country.region}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryList;
