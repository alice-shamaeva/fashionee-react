import Button from "../../../../components/Button/Button.jsx";
import Colors from "./Colors/Colors.jsx";
import Price from "./Price/Price.jsx";
import Categories from "./Categories/Categories.jsx";
import { useContext } from "react";
import FiltersContext from "../../FiltersContext.jsx";

function Filters() {
    const { applyFilters } = useContext(FiltersContext);

    return (
        <div className="mobile-filters">
            <input type="checkbox" id="filters-toggle" className="filters-checkbox"/>

            <label htmlFor="filters-toggle" className="filters-label">
                Filters
                <span className="filters-arrow"></span>
            </label>

            <div className="filters-content">
                <Categories />

                <Price />

                <Colors />

                <div className="sidebar-item">
                    <Button onClick={applyFilters}>Apply Filter</Button>
                </div>
            </div>
        </div>
    )
}

export default Filters;
