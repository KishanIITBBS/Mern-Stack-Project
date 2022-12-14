import React, { Fragment, useEffect } from 'react'
import { CgMouse } from 'react-icons/all'
import './Home.css'
import MetaData from '../layout/MetaData.js'
import ProductCard from './ProductCard.js'
import { clearErrors, getProduct } from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import { useAlert } from 'react-alert'
import { useSelector, useDispatch } from 'react-redux'

// const product = {
//   name: 'Blue Shirt',
//   images: [{ url: 'https://i.ibb.co/DRST11n/1.webp' }],
//   price: '₹1299',
//   _id: 'kishanpatel',
// }

const Home = () => {
  const alert = useAlert()

  const dispatch = useDispatch()
  const { loading, error, products } = useSelector((state) => state.products)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct())
  }, [dispatch, error, alert])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='ECOMMERCE' />

          <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className='homeHeading'>Featured Products</h2>

          <div className='container' id='container'>
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
