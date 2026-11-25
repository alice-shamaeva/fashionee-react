import search from "../../../../assets/search.svg";

function SearchBar({ searchQuery, searchChange }) {
    return (
        <div className="search">
            <input type="text" placeholder="Search" className="input search-row" value={searchQuery} onChange={(event) => {
                searchChange(event.target.value);
            }}/>
            <img src={search} alt="Search Icon" className="search-icon"/>
        </div>
    )
}

export default SearchBar;
