import React from 'react'
import Header from './Header/Header'
import ProductList from './productList/ProductList'

export default function Shop() {
  return (
    <div id='container'>
   <Header/>
   <section>
    <ProductList/>
   </section>
    </div>
  )
}
