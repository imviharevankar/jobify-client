import { FC } from "react";
import { resources } from "../util/resources";
import CustomCheckBox from "./custom/CustomCheckBox";
import CustomAccordion from "./custom/CustomAccordion";

const FilterPanel: FC = () => {
  return (
    <div className="bg_white mx_12 p_16 br_16_0_16_16">
      <CustomAccordion
        header={<p className="fs_20 fw_500 lh_20 font_primary mb_12">{resources.typeOfEmployment}</p>}
        panelBody={
          <div>
            <CustomCheckBox className="fs_16 font_primary fw_400" label="filter" />
          </div>
        }
      />
    </div>
  )
}

export default FilterPanel