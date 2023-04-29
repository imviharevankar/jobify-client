import { SyncOutlined } from "@ant-design/icons";

const Loader = () => {
  return (
    <div className="flex col_center row_center w_100 fs_30">
      <SyncOutlined spin />
    </div>
  )
}

export default Loader