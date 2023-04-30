import { Avatar } from "antd"
import { UserOutlined } from "@ant-design/icons";
import CustomButton from "./custom/CustomButton";

const ProfileHeader = () => {
  return (
    <div className="box_shadow_sm br_16_0_16_16 p_16 flex col_center">
      <div className="flex g_16 col_center">
        <Avatar size={60} icon={<UserOutlined />} />
        <div>
          <p>Name</p>
          <p>Email | wesbite</p>
        </div>
      </div>
      <CustomButton label="Log Out" className="ml_auto" />
    </div>
  );
};

export default ProfileHeader;
