import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      console.log(query);
    }
  };

  return (
    <div className="header">
      <div className="header-title">
        <img className="logo" src={logo} alt="Recipe-Pedia logo" />
        <h1>Recipe-Pedia</h1>
      </div>
      <nav>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search Recipe"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            aria-label="Search for recipes"
          />
          <button
            onClick={handleSearch}
            className="search-icon"
            aria-label="Search"
            title="Search"
          >
            <FaSearch />
          </button>
        </div>
        <div className="cuisines">
          <button className="cuisine" onClick={() => onSearch('Indian')}>Indian</button>
          <button className="cuisine" onClick={() => onSearch('Italian')}>Italian</button>
          <button className="cuisine" onClick={() => onSearch('Chinese')}>Chinese</button>
          <button className="cuisine" onClick={() => onSearch('Japanese')}>Japanese</button>
        </div>
      </nav>
    </div>
  );
}