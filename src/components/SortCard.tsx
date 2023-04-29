import { useState } from "react";
import { resources } from "../util/resources";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

interface ISortItem {
  label: string,
}
const SortItem = (props: ISortItem) => {
  const { label } = props;
  const [activeSort, setActive] = useState<boolean>(false);
  const handleActive = () => {
    setActive(!activeSort);
  }
  return (
    <p onClick={handleActive} className="pointer">{label}{activeSort ? <ArrowDownOutlined /> : <ArrowUpOutlined />}</p>
  )
}

const SortCard = () => {
  return (
    <div className="bg_white flex align_center justify_between p_16 font_primary">
      <p className="fs_16">{resources?.sortBy}: </p>
      <div className="flex g_16">
        <SortItem label={resources.time} />
        <SortItem label={resources.price} />
      </div>
    </div>
  )
}

export default SortCard