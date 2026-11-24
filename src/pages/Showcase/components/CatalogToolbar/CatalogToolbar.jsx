function CatalogToolbar() {
    return (
        <div className="sort-and-count">
            <div className="products-count">
                There are <span className="bold">67</span> products in this category
            </div>
            <div className="sort">
                <select className="input">
                    <option value="RELEVANCE">Relevance</option>
                    <option value="ASC">By ASC</option>
                    <option value="DESC">By DESC</option>
                </select>
            </div>
        </div>
    );
}

export default CatalogToolbar;
