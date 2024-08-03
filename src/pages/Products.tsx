import GridList from '@components/common/GridList/GridList'
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

  const {records, loading, error} = useAppSelector(state => state.productsSlice)

useEffect(()=> {
  dispatch(actGetProductsByCatPrefix(params.prefix as string))
  return () => {( dispatch(productsCleanUp()))}
},[dispatch, params])

  return (
        <Container>
      <Loading status={loading} error={error}>
        <GridList records={records} rendarItem={(record) =>  <Product {...record}/>} />
      </Loading>
    </Container>
  )
}

export default Products
