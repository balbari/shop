import React from 'react'
import { useNavigate } from 'react-router-dom'


function ProductCard({ item }) {
    // console.log(item)
    const navigate = useNavigate();
    const showD = () => {
        navigate(`/products/${item.id}`)
    }

    return (
        <div className='item' onClick={showD}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            <div className='text'>
                <p>size</p>
                <p>{item?.new == true ? '☆신제품☆' : ''}</p>
            </div>
            <ul>
                {item.size.map((size, idx) => (
                    <li key={idx}>{size}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductCard
