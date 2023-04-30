import { Col, Row } from "antd";
import { useState } from "react";
import Jobify from "../assets/Jobify.png";
import { resources } from "../util/resources";
import CustomButton from "./custom/CustomButton";
import CustomModal from "./custom/CustomModal";
import JobsModal from "./modals/JobsModal";
import { StorageKeys } from "../util/storageKeys";
import { getLocalStorage } from "../helper/storage";
import { HOME, SIGN_IN } from "../routes/path";
import { useData } from "../context/DataContext";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { navigateToSpecificRoute } = useData();
  const authUser = getLocalStorage(StorageKeys.AUTH_USER);

  const handlepopup = () => {
    setOpen(!open);
  }

  const handleNavigate = (path: string) => {
    navigateToSpecificRoute(path)
  }

  return (
    <div>
      <CustomModal
        title={resources?.addJob}
        open={open}
        modalBody={
          <JobsModal />
        }
        width={500}
        okCancel={handlepopup}
      />
      <Row className="bg_primary p_16">
        <Col xs={4}>
          <img onClick={() => handleNavigate(HOME)} className="h_64_px br_50_p pointer" src={Jobify} alt="icon" />
        </Col>
        <Col xs={20}>
          {authUser
            ? <div className='flex justify_end mt_16'>
              <CustomButton
                label={resources?.postJob}
                className='white bg_blue row_center w_max py br_8_0_8_8 h_max fs_16 fw_600 lh_16'
                onClick={handlepopup}
              />
            </div>
            : <div className='flex justify_end mt_16'>
              <CustomButton
                label={resources?.signIn}
                className='white bg_blue row_center w_max py br_8_0_8_8 h_max fs_16 fw_600 lh_16'
                onClick={() => handleNavigate(SIGN_IN)}
              />
            </div>}
        </Col>
      </Row>
    </div>
  )
}

export default Header;
