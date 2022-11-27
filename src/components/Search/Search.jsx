import Form from 'react-bootstrap/Form'
import '../../utils/styles.css'

function Search() {
  return (
    <div className="searchComponent">
      <Form.Label htmlFor="inputSearch">Search:</Form.Label>
      <Form.Control className="search" type="search" id="inputSearch" />
    </div>
  )
}

export default Search
