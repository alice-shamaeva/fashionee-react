import Button from "../../../../components/Button/Button.jsx";

function Filters({ maxPriceChange, minPriceChange, maxPrice, minPrice, selectedCategoryChange, selectedCategory, selectedColorsChange, selectedColors, appliedFilters }) {

    const categories = ["All", "Men", "Women", "Accessories", "New Arrivals"];
    const colors = ["Brown", "Red", "Blue", "Black", "White"]

    return (
        <div className="mobile-filters">
            <input type="checkbox" id="filters-toggle" className="filters-checkbox"/>

            <label htmlFor="filters-toggle" className="filters-label">
                Filters
                <span className="filters-arrow"></span>
            </label>

            <div className="filters-content">
                <div className="sidebar-item">
                    <div className="sidebar-title">Categories</div>
                    <div className="sidebar-content">
                        <ul className="custom-list">
                            {categories.map((category) => {
                                return <li className={category === selectedCategory ? "item active" : "item"} key={category} onClick={() => selectedCategoryChange(category)}>{category}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="sidebar-title">Price</div>
                    <div className="sidebar-content">
                        <div className="price-bar">
                            <input type="number" placeholder="0" className="input" min={0} step={0.01} value={minPrice} onChange={(event) => {
                                minPriceChange(event.target.value);
                            }} />
                            <input type="number" placeholder="0" className="input" min={0} step={0.01} value={maxPrice} onChange={(event) => {
                                maxPriceChange(event.target.value);
                            }} />
                        </div>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="sidebar-title">Colors</div>
                    <div className="sidebar-content">
                        <div className="colors">
                            {colors.map((color) => {
                                return (
                                    <div className="color" key={color}>
                                        <input type="checkbox" className="color-checkbox" id={color} name={color}
                                           value={color} checked={selectedColors.includes(color)} onChange={() => selectedColorsChange(color)} />
                                        <label htmlFor={color} className="color-name">{color}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="sidebar-item">
                    <Button onClick={appliedFilters}>Apply Filter</Button>
                </div>
            </div>
        </div>
    )
}

export default Filters;
