import Sidebar from './components/Sidebar/Sidebar.jsx';
import CatalogToolbar from './components/CatalogToolbar/CatalogToolbar.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import Pagination from "./components/Pagination/Pagination.jsx";
import "./Showcase.css"

function Showcase() {
    return (
        <div className="container">
            <div className="shop">
                <Sidebar />
                <div className="products-wrapper">
                    <CatalogToolbar />
                    <ProductList />
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default Showcase;
