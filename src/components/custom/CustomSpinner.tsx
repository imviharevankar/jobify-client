import { Spin } from "antd"
import { resources } from "../../util/resources"

const CustomSpinner = () => {
  return (
    <div className='flex column col_center row_center vh_100'>
      <Spin
        tip={resources.loading}
        size="large"
      />
    </div>
  )
}

export default CustomSpinner