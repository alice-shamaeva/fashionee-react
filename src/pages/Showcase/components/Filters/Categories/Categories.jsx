import { useContext } from "react";
import FiltersContext from "../../../FiltersContext.jsx";

function Categories() {
    const { availableCategories, selectedCategory, selectedCategoryChange } = useContext(FiltersContext)
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Categories</div>
            <div className="sidebar-content">
                <ul className="custom-list">
                    {availableCategories.map((category) => {
                        return <li className={category === selectedCategory ? "item active" : "item"} key={category} onClick={() => selectedCategoryChange(category)}>{category}</li>;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Categories;
