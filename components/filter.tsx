"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface City {
  name: string;
}

export function Filter() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  useEffect(() => {
    fetch("/api/cities")
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handlePriceChange = (value: number[]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  return (
    <div className="max-w-lg flex flex-col items-center gap-4 mx-auto">
      <div className="w-full">
        <div className="flex flex-grow gap-3">
          <input
            type="text"
            name="location"
            placeholder="Search"
            className="w-full pr-3 py-2 rounded-lg border border-darkGray pl-5"
          />
          <button
            type="submit"
            className="btn-primary flex pl-4 py-4 items-center text-sm"
          >
            <Search size={16} className="mr-3" />
            Search
          </button>
        </div>
      </div>
      <p className="text-lightBlue">Filter settings</p>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        className="max-w-[262px] w-full py-2 rounded-lg border border-lightBlue pl-5"
      >
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
