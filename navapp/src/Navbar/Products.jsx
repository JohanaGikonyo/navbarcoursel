import React, { useState } from 'react';
import { products, scroll } from '../Helpers/products';
import img1 from './images/picture.jpg'
import './products.css';
import { helperContext } from '../Helpers/context';
import Cart from './Cart';
function Products() {
  const [details, setDetails] = useState([])
  const [close, setClose]=useState(false)
  const [scroll_close, setScroll_close]=useState(false)
  const detailpage = (product) => {
    setDetails([{ ...product }])
   setClose(true)

  }
  const scroll_detailpage = (products) => {
    setDetails([{ ...products }])
   setScroll_close(true)

  }

const [page, setpage]=useState('main')
const [cost, setcost]=useState('')
const [view, setView]=useState(false)
  return (
    <>
    <helperContext.Provider value={{page, setpage, cost, setcost}}>
         {page==='cart' && <Cart/>}
         {page==='product' && <Products/>}
    </helperContext.Provider>
    <button onClick={()=>{setpage('cart')}} className='seecart btn btn-danger'>See Cart</button>
      {scroll_close?(<div className='detail_container'>
        <div className='detail_contant'>
          {
            details.map((y) => {
              return (
                <div className='details_box btn btn-default'>
                <div onClick={()=>{setScroll_close(false)}}><box-icon name='x' ></box-icon></div>
                <div className='details_box_conent'>
                  <div className='image_box'>
                  <img src={y.image} alt={y.description} />
                  <img src={y.descriptions.imgs}></img>
                    <img src={y.descriptions.image}></img>
                  </div>
                    <div className='image_details'>
                    <p>{y.name}</p>
                    <h5>Cost : ${y.cost}</h5>
                    <h4>Remaining :{y.remaining}</h4>
                    <p>{y.descriptions.info}</p>
                    <button className='btn btn-primary m-3 ' onClick={()=>{setcost(prevCost=>prevCost+" cost: " +" "+'\n'+" "+y.cost);setView(prev=>!prev)}}>Shop</button>
                    {view?<button className='btn btn-success'>Thank You</button>:""}
                    </div>
                    
                    </div>
                 

                </div>

              )
            })
          }

        </div>

      </div>)
:null}


{close?(<div className='detail_container'>
        <div className='detail_contant'>
          {
            details.map((x) => {
              return (
                <div className='details_box btn btn-default'>
                <div onClick={()=>{setClose(false)}}><box-icon name='x' ></box-icon></div>
                <div className='details_box_conent'>
                  <div className='image_box'>
                  <img src={x.image} alt={x.name} />
                  <img src={x.description.image}></img>
                    <img src={x.description.imgs}></img>
                    
                  </div>
                
      
                    <div className='image_details'>
                    <h2>{x.name}</h2>
                    
                    <p>Cost : ${x.cost}</p>
                    <h5>Remaining :{x.remaining}</h5>
                    <p>{x.description.info}</p>
                    <button className='btn btn-primary m-3' onClick={()=>{setcost(prevCost=>prevCost+"Item: "+" "+x.name+" "+"  cost: " +" "+"\n"+" "+x.cost+" ") ;setView(prev=>!prev)}}>Shop</button>
                    {view?<button className='btn btn-success'>Thank You</button>:""}
                    </div>
                    
                    </div>
                 

                </div>

              )
            })
          }

        </div>

      </div>)
:null}


      <div className='info'>
        <img src={img1} alt='image' />
        <div className='info-child'>
          <h3>JKTECHS Is an electronic shop that offers electronic Services</h3>
          <h4>We offer Sales Country wide. We also do Cyber Services<br /> Such as Printing,
            Scanning, Photocopying, Forms Applications and photo Printing.
          </h4>
          <p>Our costs are Affordable <i>To Each Customer.</i></p>
          <h5>Come one, come all</h5>
        </div>
      </div>

      <div className='scroll-container well'>
        {scroll.map((items) => (
          <div key={items.id} className='eachitem-scroll'>
            <div className='btn btn-default'> <img src={items.image} alt={items.name} className='img-rounded' /></div>
            <div>
              <h3 className='desc'>{items.description}</h3>
              <h4 className='cost'>$ {items.cost}</h4>
              <div><button className='cart btn btn-primary m-3' onClick={() => { scroll_detailpage(items) }}>View</button></div>

            </div>


          </div>
        ))}

      </div>

      <div className='products'>
        {products.map((item) => (
          <div key={item.id} className='eachitem'>
            <div> <img src={item.image} alt={item.name} /></div>

            <div className='descriptions'>
              <h3 className='desc'>{item.name}</h3>
              <h4 className=' btn btn-success'>$ {item.cost}</h4>
              <h5>Orders left :{"  " + item.remaining}</h5>
              <button className='cart btn btn-primary m-3' onClick={() => { detailpage(item) }}>View</button>
            </div>

          </div>
        ))}
      </div>


    </>
  );
}

export default Products;
