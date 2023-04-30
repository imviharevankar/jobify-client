import { Table } from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { FC } from 'react';

export interface IColumnObj {
  id: string,
  name: string,
};

interface ProjectList {
  title: string,
  status: string,
  deadline: string,
  assignedTo: string,
  createdBy: string,
}

interface ICustomTable {
  data: ProjectList[],
  columns: ColumnGroupType<ProjectList>[] | ColumnType<ProjectList>[],
}

const CustomTable: FC<ICustomTable> = (props: ICustomTable) => {

  const {
    data,
    columns,
  } = props;

  return (
    <Table
      dataSource={data}
      scroll={{ x: true }}
      columns={columns}
    />
  );
};

export default CustomTable;
