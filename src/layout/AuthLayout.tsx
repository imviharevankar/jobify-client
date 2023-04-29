import { Col, Row } from 'antd';
import { FC, ReactElement } from 'react';

interface AuthLayoutProps {
  src: string,
  child: ReactElement
}

const AuthLayout: FC<AuthLayoutProps> = (props: AuthLayoutProps) => {
  const {
    src = '',
    child,
  } = props;
  return (
    <Row className='box_shadow_sm br_16_0_16_16'>
      <Col xs={0} sm={0} md={12} lg={16}>
        <img src={src} className='img_container' />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        {child}
      </Col>
    </Row>
  );
};

export default AuthLayout;
