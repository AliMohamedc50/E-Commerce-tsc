import { Category } from "@components/eCommerce"
import { actGetCategories } from "@store/categories/categoriesSlice"
import { useAppDispatch, useAppSelector } from "@store/hook"
import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"

function Categories() {
  const dispatch = useAppDispatch()

  const {loading, error, records} = useAppSelector(state => state.categoriesSlice)

  useEffect(()=> {
    dispatch(actGetCategories())
  },[dispatch])

  const categoriesList = records.length > 0 ? records.map((record) => (
            <Col xs={6} md={4} xl={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
        <Category {...record}/>
        </Col>
  )) : "ther are no Category"
  return (
    <Container>
      <Row>
        {categoriesList}
      </Row>
    </Container>
  )
}

export default Categories
