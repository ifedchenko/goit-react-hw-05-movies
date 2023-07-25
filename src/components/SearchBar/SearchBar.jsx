import css from './SearchBar.module.css';
import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get('query');
    
    if (query) {
      setSearchQuery(query);
    }
  }, [location]);

  const handleSearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter movie name');
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <div className={css.searchBar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
          onChange={handleSearch}
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
