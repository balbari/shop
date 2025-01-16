import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { useSearchParams } from 'react-router-dom';

function ProductAll() {
    const [productList, setProductList] = useState([]);
    const [query] = useSearchParams();
    // const data = async() => {
    //     const response = await axios.get('http://localhost:5000/products')
    //     setProductList(response.data)
    // }

    const data = async () => {
        const searchQuery = query.get('q') || ''; //url 검색어 가져오기
        console.log(searchQuery)
        try {
            const response = await axios.get(`https://my-json-server.typicode.com/balbari/shop/products/${searchQuery}`);
            const filterData = response.data.filter(item =>
                item.title.includes(searchQuery) //title 필드에 검색어 포함 여부 확인
            )
            setProductList(filterData)
        } catch (error) {
            console.error('에러')
        }
    };
    useEffect(() => {
        data();
    }, [query]);

    console.log(productList);
    return (
        <div className='contents'>
            {
                productList.map(menu => (
                    <ProductCard key={menu.id} item={menu} />
                ))
            }
        </div>
    )
}

export default ProductAll
