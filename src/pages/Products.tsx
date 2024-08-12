import GridList from '@components/common/GridList/GridList'
import Heading from '@components/common/Heading/Heading'
import { Product } from '@components/eCommerce'
import Loading from '@components/feedback/Loading/Loading'
import { actGetProductsByCatPrefix, productsCleanUp  } from '@store/Products/productSlice'
import { useAppDispatch, useAppSelector } from '@store/hook'
import { useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Products() {
  const params = useParams() 
  const dispatch = useAppDispatch()

  const {records, loading, error} = useAppSelector(state => state.products)
  const cartItems = useAppSelector(state => state.Cart.items)

  const productFullInfo = records.map((ele)=> ({
    ...ele,
    quantity: cartItems[ele.id] || 0
  }))
useEffect(()=> {
  dispatch(actGetProductsByCatPrefix(params.prefix as string))
  return () => {( dispatch(productsCleanUp()))}
},[dispatch, params])

  return (
        <Container>
          <Heading>
            <span>{params.prefix}</span> Products
          </Heading>
      <Loading status={loading} error={error}>
        <GridList records={productFullInfo}
        rendarItem={(record) =>  <Product {...record}/>} />
      </Loading>
    </Container>
  )
}

export default Products
