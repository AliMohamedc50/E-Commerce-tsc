import { Col, Row } from "react-bootstrap";

type gridListProps<T> = {
  records: T[],
  rendarItem: (record: T) => React.ReactNode
}
type hasID = {
  id?: number
}
function GridList<T extends hasID>({records, rendarItem}: gridListProps<T>) {
    const categoriesList = records.length > 0 ? records.map((record) => (
            <Col xs={6} md={4} xl={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
                {rendarItem(record)}
        </Col>
  )) : "ther are no Category";

  return <Row>{categoriesList}</Row>
}

export default GridList
