import { useState } from "react";
import { resources } from "../util/resources";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useData } from "../context/DataContext";
import _ from "lodash";
import { DataActionKeys } from "../context/type/dataContext";
import { sortItem } from "../helper/arrayFormater";

interface ISortItem {
  label: string,
  toFind: string,
}
const SortItem = (props: ISortItem) => {
  const { label, toFind } = props;
  const { dataState, dataDispatcher } = useData();
  const [activeSort, setActive] = useState<boolean>(false);
  const handleActive = (toFind: string) => {
    setActive(!activeSort);
    let order = sortItem(dataState.jobList, [toFind], [activeSort ? "desc" : "asc"]);
    (dataDispatcher({ type: DataActionKeys.JOB_LIST, payload: order }));
  }
  return (
    <p onClick={() => handleActive(toFind)} className="pointer">{label}{activeSort ? <ArrowDownOutlined /> : <ArrowUpOutlined />}</p>
  )
}

const SortCard = () => {
  return (
    <div className="bg_white flex align_center justify_between p_16 font_primary">
      <p className="fs_16">{resources?.sortBy}: </p>
      <div className="flex g_16">
        <SortItem toFind="timeline" label={resources.time} />
        <SortItem toFind="title" label={resources.title} />
      </div>
    </div>
  )
}

export default SortCard