import { ReactElement } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface CommonLayoutProps {
  child: ReactElement,
}

const CommonLayout = (props: CommonLayoutProps) => {
  const { child } = props;
  return (
    <div className='container'>
      <Header />
      {child}
      <Footer />
    </div>
  )
}

export default CommonLayout;
