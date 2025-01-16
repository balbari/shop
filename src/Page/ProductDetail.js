import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function ProductDetail() {
    const [product, setProduct] = useState(null);
    let {id} = useParams();

    const data = async() => {
        try{
            const response = await axios.get(`https://my-json-server.typicode.com/balbari/shop/products/${id}`);
            // console.log(response.data)
            setProduct(response.data)
        }catch(error){
            console.error('에러')
        }
    }
    
    useEffect(()=>{
        data();
    },[id])
    console.log(product)

  return (
    <div className='product_detail'>
      <img src={product?.img} alt={product?.title} />
      <h3>{product?.title}</h3>
      <h4>{product?.price}원</h4>
      <p>{product?.new ? "신제품" : ''}</p>
      <p>사이즈</p>
      <ul>
        {
            product?.size.map((size,idx) => (
                <li key={idx}>{size}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default ProductDetail
