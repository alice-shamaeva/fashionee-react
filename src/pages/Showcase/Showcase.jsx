import Sidebar from './components/Sidebar/Sidebar.jsx';
import CatalogToolbar from './components/CatalogToolbar/CatalogToolbar.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import Pagination from "./components/Pagination/Pagination.jsx";
import "./Showcase.css"
import productsData from "../../data/products.json"
import {useState} from "react";

const productsList = productsData.products;
const productsCount = productsList.length;

function Showcase() {
    const [currentPage, setPage] = useState(1);
    const productsPerPage = 12;
    const pagesCount = Math.ceil(productsCount / productsPerPage);
    const endIndex = currentPage * productsPerPage;
    const startIndex =  endIndex - productsPerPage;
    const currentProducts = productsList.slice(startIndex, endIndex);

    return (
        <div className="container">
            <div className="shop">
                <Sidebar />
                <div className="products-wrapper">
                    <CatalogToolbar count={productsCount} />
                    <ProductList products={currentProducts} />
                    <Pagination setPage={setPage} pagesCount={pagesCount} currentPage={currentPage} />
                </div>
            </div>
        </div>
    );
}

export default Showcase;
