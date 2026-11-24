import ProductCard from "../ProductCard/ProductCard.jsx";

function ProductList({ products }) {
    return (
        <div className="products">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
