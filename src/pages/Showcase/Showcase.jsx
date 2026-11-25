import Sidebar from './components/Sidebar/Sidebar.jsx';
import CatalogToolbar from './components/CatalogToolbar/CatalogToolbar.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import Pagination from "./components/Pagination/Pagination.jsx";
import "./Showcase.css"
import productsData from "../../data/products.json"
import {useState} from "react";

const productsList = productsData.products;

function Showcase() {
    const [currentPage, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = productsList.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const productsCount = filteredProducts.length;

    const productsPerPage = 12;
    const pagesCount = Math.ceil(productsCount / productsPerPage);
    const endIndex = currentPage * productsPerPage;
    const startIndex =  endIndex - productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    const handleSearchChange = (value) => {
        setSearchQuery(value);
        setPage(1);
    };

    return (
        <div className="container">
            <div className="shop">
                <Sidebar searchQuery={searchQuery} searchChange={handleSearchChange} />
                <div className="products-wrapper">
                    <CatalogToolbar count={productsCount} />
                    <ProductList products={currentProducts} />
                    {pagesCount > 1 && (
                        <Pagination setPage={setPage} pagesCount={pagesCount} currentPage={currentPage} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Showcase;
