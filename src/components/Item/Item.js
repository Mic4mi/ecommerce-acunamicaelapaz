import './style.css';
import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <div className='ItemContainer'>
            <div className='DescriptionContainer'>
                <Link to={`/item/${item.id}`}>
                    <img id="product-img" src={item.img} alt={item.name} />
                </Link>
                <div className='TextContent'>
                    <h5 id="productName" className='text-desc-product'>{item.name}</h5>
                    <h6 id="productDescription" className='text-desc-product'>{item.description}</h6>
                    <h5 id="productPrice" className='text-desc-product'>${item.price}</h5>
                </div>
            </div>
        </div>
    )
}

export default Item