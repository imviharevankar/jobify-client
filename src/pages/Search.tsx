import { Col, Row } from 'antd';
import SearchWidget from '../components/SearchWidget'
import JobListingPanel from '../components/JobListingPanel';
import FilterPanel from '../components/FilterPanel';

const Search = () => {
  return (
    <div className="bg_gray">
      <div className="m_auto">
        <SearchWidget />
        <Row className="pt_12" gutter={22}>
          <Col xs={0} sm={0} md={8}>
            <FilterPanel />
          </Col>
          <Col xs={24} sm={24} md={16}>
            <JobListingPanel />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Search;
