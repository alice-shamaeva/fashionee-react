import Filters from '../Filters/Filters.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ReviewedProducts from "../ReviewedProducts/ReviewedProducts.jsx";
import banner from '../../../../assets/season-sale-banner.svg';

function Sidebar({ searchQuery, searchChange, appliedFilters }) {
    return (
        <div className="sidebar">
            <SearchBar searchQuery={searchQuery} searchChange={searchChange} />
            <Filters appliedFilters={appliedFilters} />
            <ReviewedProducts/>
            <div className="sidebar-banner">
                <a href="#">
                    <img src={banner} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;
