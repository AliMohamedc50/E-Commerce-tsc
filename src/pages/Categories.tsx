import GridList from "@components/common/GridList/GridList"
import { Category } from "@components/eCommerce"
import Loading from "@components/feedback/Loading/Loading"
import { actGetCategories } from "@store/categories/categoriesSlice"
import { useAppDispatch, useAppSelector } from "@store/hook"
import { useEffect } from "react"
import { Container } from "react-bootstrap"

function Categories() {
  const dispatch = useAppDispatch()

  const {loading, error, records} = useAppSelector(state => state.categories)

  useEffect(()=> {
    if (!records.length){
      dispatch(actGetCategories())
    }
  },[dispatch])

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList records={records} rendarItem={(record) =>  <Category {...record}/>} />
      </Loading>
    </Container>
  )
}

export default Categories
