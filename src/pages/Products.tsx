import { Product } from '@components/eCommerce'
import { actGetProductsByCatPrefix, productsCleanUp  } from '@store/Products/productSlice'
import { useAppDispatch, useAppSelector } from '@store/hook'
import { useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Products() {
  const params = useParams() 
  const dispatch = useAppDispatch()
  // const {records, loading, error} = useAppSelector(state => state.productsSlice)
  const {records} = useAppSelector(state => state.productsSlice)

useEffect(()=> {
  dispatch(actGetProductsByCatPrefix(params.prefix as string))
  return () => {( dispatch(productsCleanUp()))}
},[dispatch, params])

const productList = records.length > 0 ? records.map((product) => (
          <Col xs={6} md={3} key={product.id} className="d-flex justify-content-center mb-5 mt-2">
          <Product {...product}/>
        </Col>
)): "ther are no Category"
  return (
        <Container>
      <Row>
        {productList}
      </Row>
    </Container>
  )
}

export default Products
