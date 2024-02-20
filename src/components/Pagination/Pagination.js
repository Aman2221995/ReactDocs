import React, { useEffect, useState } from 'react';
import './Pagination.css';

const Pagination = () => {
    const[products,setProducts] = useState([]);
    const[page,setPage] = useState(1);

    const fetchProduct = async() => {
        let data = await fetch('https://dummyjson.com/products?limit=100');
        let data1 = await data.json();
        console.log(data1.products)
        if(data1 && data1.products) {
          setProducts(data1.products);
        }
    }

    useEffect(()=>{
            fetchProduct()
    },[]);

    const setHandler = (a) =>{
      if(a>=1 && a<=Math.ceil(products.length/10) && a!==page){
        setPage(a)
      }
    }

    console.log(products.length)

  return (
    <div>
      {products.length>0 && (
        <div className='products'>
          {
            products.slice(page*10-10,page*10).map((prod)=>{
              return(
                <span className='products__single' key={prod.id}>
                  <span>{prod.id}</span>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>
              )
            })
          }
        </div>
      )}
      {products.length>0 && (<div>
        <button>prev</button>
        {[...Array(Math.ceil(products.length/10))].map((_,i)=>{
          return(
            <span style={{backgroundColor:'red',margin:'0px 2px',cursor:'pointer'}} key={i} onClick={()=>setHandler(i+1)}>{i+1}</span>
          )
        })}
      </div>)}
    </div>
  )
}

export default Pagination