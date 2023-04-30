import { FC } from "react";
import IconCard from "./IconCard";
import { RiReactjsFill } from 'react-icons/ri';
import { BsClipboard2DataFill, BsFillClipboard2CheckFill } from "react-icons/bs";
import { DiJavascript1, DiCode } from 'react-icons/di';
import { ArrowRightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { useData } from "../context/DataContext";

const JobCategoryPannel: FC = () => {
  const { dataState } = useData();
  const iconCardData = dataState.categories.map((ele) => {
    return (
      {
        title: ele?.label,
        icon: (
          ele?.label === "Data Science"
            ? <BsClipboard2DataFill />
            : ele?.label === "Web Development"
              ? <DiJavascript1 />
              : ele?.label === "Front-end Development"
                ? <RiReactjsFill />
                : ele?.label === "Qulity Assure"
                  ? <BsFillClipboard2CheckFill />
                  : <DiCode />
        )
      }
    )
  })
  console.log(iconCardData);
  return (
    <>
      <p className="fs_30 fw_700 lh_20 mt_16 font_primary mb_12">Explore by <span className="primary">category</span></p>
      <Row gutter={11}>
        {
          iconCardData?.map((ele: any) => {
            return (
              <Col xs={12} md={6}>
                <IconCard
                  size="fs_30 b_2_solid_black p_10 br_50_p"
                  icon={ele?.icon}
                  label={ele?.title}
                  footer={
                    <div className="flex col_center g_16">
                      <p className="font_primary fs_16 fw_500 lh_20">See all....</p>
                      <ArrowRightOutlined />
                    </div>
                  }
                />
              </Col>
            )
          })
        }
      </Row>
    </>
  )
};

export default JobCategoryPannel;
