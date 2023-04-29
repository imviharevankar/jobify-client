import { ReactElement } from 'react';

interface CommonLayoutProps {
  child: ReactElement,
}

const CommonLayout = (props: CommonLayoutProps) => {
  const { child } = props;
  return (
    <div>
      {child}
    </div>
  )
}

export default CommonLayout;
