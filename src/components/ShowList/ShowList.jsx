import Form from 'react-bootstrap/Form'
import '../../utils/styles.css'

function ShowList() {
  return (
    <div className="Show">
      <label>Show</label>
      <Form.Select className="showList" aria-label="Default select example">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Form.Select>
      <label>Entries</label>
    </div>
  )
}

export default ShowList
