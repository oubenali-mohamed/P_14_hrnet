import Pagination from 'react-bootstrap/Pagination'
import '../../utils/styles.css'

function ShowPages() {
  return (
    <div className="pages">
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  )
}

export default ShowPages
