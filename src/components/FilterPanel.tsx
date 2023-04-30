import { FC } from "react";
import { resources } from "../util/resources";
import CustomCheckBox from "./custom/CustomCheckBox";
import CustomAccordion from "./custom/CustomAccordion";
import { useData } from "../context/DataContext";
import _ from "lodash";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { DataActionKeys } from "../context/type/dataContext";

const FilterPanel: FC = () => {
  const { dataState, dataDispatcher } = useData();
  let filterLabels = _.uniq(dataState.jobList.map((ele: any) => ele.category))

  const handleFilter = (e: CheckboxChangeEvent, key: string) => {
    if (e.target.checked) {
      dataDispatcher({ type: DataActionKeys.FILTER_DATA_ADD, payload: key })
    } else {
      dataDispatcher({ type: DataActionKeys.FILTER_DATA_REMOVE, payload: key })
    }


  }
  return (
    <div className="bg_white mx_12 p_16 br_16_0_16_16">
      <CustomAccordion
        header={<p className="fs_20 fw_500 lh_20 font_primary mb_12">{resources.category}</p>}
        panelBody={
          filterLabels?.map((ele: any) => {
            return (
              <div>
                <CustomCheckBox onChange={(event) => handleFilter(event, ele)} className="fs_16 font_primary fw_400" label={ele} />
              </div>
            )
          })
        }
      />
    </div>
  )
}

export default FilterPanel