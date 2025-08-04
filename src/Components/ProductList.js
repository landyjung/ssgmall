import { useParams } from "react-router-dom";
import { category } from "../productData";
import { Link } from "react-router-dom";

function ProductList() {
const { categoryName } = useParams(); 
const selectedCategory = category[categoryName.toUpperCase()] || [];


return (
    <div className="product-list">
        <h2>{categoryName}</h2>
        <div className="product-items">
            {
                selectedCategory.map((item, idx) => (
                <div key={idx} className="product-item">
                    <Link to={`/product/${item.id}`} state={{product:item}}>
                    <img src={item.images[0]} alt={item.name} />
                    <h3 className="title">{item.name}</h3>
                    <div>
                        <p>
                            <span className='text'>정 가  :</span>
                            <span className='original-price'>{item.price.toLocaleString()}</span>
                        </p>
                        <p>
                            <span className='text'>혜택가격 : </span>
                            <span className='discount-price'> {item.discountPrice ? item.discountPrice.toLocaleString() : item.price.toLocaleString()}</span>
                        </p>
                    </div>
                    <div>
                        <button >장바구니</button>
                        <button>자세히보기</button>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
);
}

export default ProductList;