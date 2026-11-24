import heart from '../../../../assets/heart.svg';

function ProductCard({ product }) {
    return (
        <div className="product">
            <div className="photo">
                <img src={product.image} alt={product.name} />
                <div className="top-bar">
                    <div className="labels">
                        {product.isSale && <div className="label sale">
                            Sale
                        </div>}
                        {product.isNew && <div className="label new">
                            New
                        </div>}
                    </div>
                    <div className="favorites">
                        <img src={heart} alt="Heart Icon"/>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="name">
                    {product.name}
                </div>
                <div className="price">
                    <div className="current-price">${product.price.toFixed(2)}</div>
                    {product.oldPrice !== null && <div className="old-price">${product.oldPrice.toFixed(2)}</div>}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
