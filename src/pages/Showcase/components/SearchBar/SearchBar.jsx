import search from "../../../../assets/search.svg";

function SearchBar() {
    return (
        <div className="search">
            <input type="text" placeholder="Search" className="input search-row"/>
            <img src={search} alt="Search Icon" className="search-icon"/>
        </div>
    )
}

export default SearchBar;
