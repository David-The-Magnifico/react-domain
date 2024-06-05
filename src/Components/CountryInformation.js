import React, { useState } from "react";
import './CountryInformation.css';
import CountryInfo from './CountryInfo';
import debounce from 'lodash/debounce';

function CountryInformation() {
    const [countryName, setCountryName] = useState('');
    const [countryData, setCountryData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (!countryName) {
            setError('The input field cannot be empty!!');
            setCountryData(null);
            return;
        }

        const finalURL = `https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`;
        fetch(finalURL)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 404) {
                    setError("Country Information is not Found!!");
                    setCountryData(null);
                } else {
                    setError('');
                    setCountryData(data[0]);
                }
            })
            .catch(() => {
                setError('An error occurred while fetching data.');
                setCountryData(null);
            });
    };

    const debouncedSearch = debounce(handleSearch, 300);

    return(
        <div className="container">
            <div className="search">
                <input
                    type="text"
                    id="countryName"
                    placeholder="Enter a country name here..."
                    value={countryName}
                    onChange={(e) => {
                        setCountryName(e.target.value);
                        debouncedSearch(); // Debounce search input
                    }}
                />
                <button id="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div id="result">
                {error && <h3>{error}</h3>}
                {countryData && (<CountryInfo countryData={countryData} />)}
            </div>
        </div>
    );
}

export default CountryInformation;