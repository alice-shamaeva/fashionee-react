import { useContext } from "react";
import FiltersContext from "../../../FiltersContext.jsx";

function Price() {
    const { availableMinPrice, availableMaxPrice, minPrice, maxPrice, minPriceChange, maxPriceChange } = useContext(FiltersContext);

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Price</div>
            <div className="sidebar-content">
                <div className="price-bar">
                    <input type="number" placeholder={availableMinPrice} className="input" min={0} step={0.01} value={minPrice} onChange={(event) => {
                        minPriceChange(event.target.value);
                    }} />
                    <input type="number" placeholder={availableMaxPrice} className="input" min={0} step={0.01} value={maxPrice} onChange={(event) => {
                        maxPriceChange(event.target.value);
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Price;
