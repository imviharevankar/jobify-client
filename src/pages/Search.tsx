import { Col, Row } from 'antd';
import SearchWidget from '../components/SearchWidget'
import JobListingPanel from '../components/JobListingPanel';

const Search = () => {
  return (
    <div>
      <SearchWidget />
      <Row gutter={22}>
        <Col xs={0} sm={0} md={8}>
          <p>Filter Panel</p>
        </Col>
        <Col md={16}>
          <JobListingPanel />
        </Col>
      </Row>
    </div>
  )
}

export default Search;
