import React from 'react'
import './ProductList.css'
import Product from './Product'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
     <div className="pl-texts">
       <h1 className='pl-title'>Create & Inspire. It's Kumar</h1>
       <p className='pl-desc'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, esse magni quisquam odit, illo harum expedita, nostrum cupiditate unde ipsam nobis eveniet
       </p>
     </div>
     <div className="pl-list">
       {products.map((item) => (
         <Product key={item.id} img={item.img} link={item.link} />
       ))}
     </div>
    </div>
  )
}

export default ProductList