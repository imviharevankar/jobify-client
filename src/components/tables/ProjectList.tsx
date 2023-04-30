import { Space } from "antd";
import { DollarOutlined, MessageOutlined } from "@ant-design/icons";
import CustomTable from "../custom/CustomTable";

const ProjectList = () => {

  const columns = [
    {
      dataIndex: 'title',
      title: 'Project Name'
    },
    {
      dataIndex: 'assignedTo',
      title: 'Assigned To'
    },
    {
      dataIndex: 'deadline',
      title: 'Deadline'
    },
    {
      dataIndex: 'status',
      title: 'Status'
    },
    {
      dataIndex: 'action',
      title: 'Actions',
      render: (() => (
        <Space>
          <MessageOutlined className="fs_20 pointer" />
          <DollarOutlined className="fs_20 pointer" />
        </Space>
      ))
    }
  ];

  const data = [
    {
      title: 'Java develoment',
      deadline: '29 Dec, 2012',
      status: 'WIP',
      assignedTo: 'vihar',
      createdBy: 'Jagan',
    },
    {
      title: 'Java develoment',
      deadline: '29 Dec, 2012',
      status: 'WIP',
      createdBy: 'Jagan',
      assignedTo: 'vihar',
    }
  ]
  return (
    <div className="box_shadow_sm br_16_0_16_16 mt_16">
      <CustomTable
        data={data}
        columns={columns}
      />
    </div>
  )
}

export default ProjectList;
