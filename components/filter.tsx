"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import { useRouter, useSearchParams } from 'next/navigation';

interface City {
  name: string;
}

type FilterProps = {
  searchLocation: string | string[] | undefined;
}

export function Filter({ searchLocation }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(980000);
  const [searchInput, setSearchInput] = useState<string | string[] | undefined>("");
  useEffect(() => {
    const locationParam = searchParams.get('location');
    const cityParam = searchParams.get('city');
    const minPriceParam = searchParams.get('min-price');
    const maxPriceParam = searchParams.get('max-price');

    setSearchInput(locationParam || searchLocation || '');
    setSelectedCity(cityParam || '');

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

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    
    if (searchInput) searchParams.set('location', searchInput.toString().toLowerCase());
    if (selectedCity) searchParams.set('city', selectedCity.toString());
    if (minPrice > 0) searchParams.set('min-price', minPrice.toString());
    if (maxPrice < 980000) searchParams.set('max-price', maxPrice.toString());

    const queryString = searchParams.toString();
    router.push(`filter/?${queryString}`);
  };

  return (
    <div className="max-w-lg px-6 flex flex-col items-center gap-4 mx-auto">
      <div className="w-full">
        <div className="flex flex-grow gap-3">
          <input
            type="text"
            name="location"
            placeholder="Search"
            className="w-full pr-3 py-2 rounded-lg border border-darkGray pl-5"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="btn-primary flex pl-4 py-4 items-center text-sm"
            onClick={handleSearch}
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
      <div className="w-full">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[minPrice, maxPrice]}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={state => `Thumb value ${state.valueNow}`}
          renderThumb={(props) => <div {...props} />}
          pearling
          minDistance={10}
          min={0}
          max={980000}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between mt-2">
          <span>{minPrice}€</span>
          <span>{maxPrice}€</span>
        </div>
      </div>
    </div>
  );
}
