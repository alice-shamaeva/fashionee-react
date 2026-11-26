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
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedColors, setSelectedColors] = useState([]);
    const [appliedFilters, setAppliedFilters] = useState({
        minPrice: "",
        maxPrice: "",
        category: "All",
        colors: [],
    });
    const [sortOrder, setSortOrder] = useState("RELEVANCE");

    const filteredProducts = productsList.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMinPrice = appliedFilters.minPrice === "" || product.price >= Number(appliedFilters.minPrice);
        const matchesMaxPrice = appliedFilters.maxPrice === "" || product.price <= Number(appliedFilters.maxPrice);
        const matchesCategory = appliedFilters.category === "All" || (appliedFilters.category === "New Arrivals" && product.isNew) || product.categories.includes(appliedFilters.category);
        const matchesColors = appliedFilters.colors.length === 0 || appliedFilters.colors.includes(product.color);
        return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesCategory && matchesColors;
    });

    const sortedProducts = [...filteredProducts];

    if (sortOrder === "ASC") {
        sortedProducts.sort((productA, productB) => productA.price - productB.price);
    } else if (sortOrder === "DESC") {
        sortedProducts.sort((productA, productB) => productB.price - productA.price);
    }

    const productsCount = filteredProducts.length;

    const productsPerPage = 12;
    const pagesCount = Math.ceil(productsCount / productsPerPage);
    const endIndex = currentPage * productsPerPage;
    const startIndex =  endIndex - productsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

    const handleSearchChange = (value) => {
        setSearchQuery(value);
        setPage(1);
    };

    const handleMinPriceChange = (value) => {
        setMinPrice(value);
        setPage(1);
    }

    const handleMaxPriceChange = (value) => {
        setMaxPrice(value);
        setPage(1);
    }

    const handleSelectedCategoryChange = (value) => {
        setSelectedCategory(value);
        setPage(1);
    }

    const handleAppliedFilters = () => {
        setAppliedFilters({
            minPrice,
            maxPrice,
            category: selectedCategory,
            colors: selectedColors,
        });
        setPage(1);
    }

    const handleSortOrder = (value) => {
        setSortOrder(value);
        setPage(1);
    }

    const handleSelectedColorsChange = (value) => {
        let newColors;
        if (selectedColors.includes(value)) {
            newColors = selectedColors.filter((color) => color !== value);
        } else {
            newColors = [...selectedColors, value];
        }

        setSelectedColors(newColors);
        setPage(1);
    }

    return (
        <div className="container">
            <div className="shop">
                <Sidebar searchQuery={searchQuery} maxPrice={maxPrice} minPrice={minPrice} searchChange={handleSearchChange} maxPriceChange={handleMaxPriceChange} minPriceChange={handleMinPriceChange} selectedCategoryChange={handleSelectedCategoryChange} selectedCategory={selectedCategory} selectedColors={selectedColors} selectedColorsChange={handleSelectedColorsChange} appliedFilters={handleAppliedFilters}/>
                <div className="products-wrapper">
                    <CatalogToolbar count={productsCount} sortOrderChange={handleSortOrder} sortOrder={sortOrder}/>
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
