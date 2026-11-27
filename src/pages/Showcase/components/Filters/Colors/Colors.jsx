import { useContext } from "react";
import FiltersContext from "../../../FiltersContext.jsx";

function Colors() {
    const { availableColors, selectedColors, selectedColorsChange } = useContext(FiltersContext);

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Colors</div>
            <div className="sidebar-content">
                <div className="colors">
                    {availableColors.map((color) => {
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
    )
}

export default Colors;
