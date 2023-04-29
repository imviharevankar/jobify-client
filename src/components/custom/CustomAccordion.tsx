import { FC, ReactNode } from "react";
import { Collapse } from 'antd';
const { Panel } = Collapse;

interface ICustomAccordion {
  panelBody: ReactNode,
  header: ReactNode,
}
const CustomAccordion: FC<ICustomAccordion> = (props: ICustomAccordion) => {
  const { panelBody, header } = props;
  return (
    <Collapse className="bg_white" bordered={false} defaultActiveKey={['1']}>
      <Panel header={header} key="1">
        {panelBody}
      </Panel>
    </Collapse>
  );
};

export default CustomAccordion;
