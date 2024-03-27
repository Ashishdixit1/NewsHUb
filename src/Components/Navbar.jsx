import React, { useState } from 'react';

const Navbar = ({ setCategory, searchNews }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchNews(searchQuery);
    setSearchQuery(''); // Clear the search input after searching
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-5'>NewsHub</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <ul className="navbar-nav" >
              <li className='nav-item' onClick={() => setCategory("technology")}><div className="nav-link">Technology</div></li>
              <li className='nav-item' onClick={() => setCategory("business")}><div className="nav-link">Business</div></li>
              <li className='nav-item' onClick={() => setCategory("health")}><div className="nav-link">Health</div></li>
              <li className='nav-item' onClick={() => setCategory("sports")} ><div className="nav-link">Sports</div></li>
              <li className='nav-item' onClick={() => setCategory("science")} ><div className="nav-link">Science</div></li>
              <li className='nav-item' onClick={() => setCategory("entertainment")} ><div className="nav-link">Entertainment</div></li>
            </ul>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
              value={searchQuery} 
              onChange={handleInputChange} 
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
