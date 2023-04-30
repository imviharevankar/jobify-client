import { Avatar } from "antd"
import { GlobalOutlined, UserOutlined } from "@ant-design/icons";
import CustomButton from "./custom/CustomButton";
import { resources } from "../util/resources";
import { useData } from "../context/DataContext";
import { HOME } from "../routes/path";
import { removeLocalStorage } from "../helper/storage";
import { StorageKeys } from "../util/storageKeys";
import { axiosPost } from "../service/https.service";
import { CREATE_ORDER_ID, VERIFY_SIGNATURE_URL } from "../api/api";

interface ProfileHeaderProps {
  name: string,
  email: string,
  website: string,
  location: string,
  displayLogOut: boolean,
  displayHireMe: boolean,
};

declare global {
  interface Window {
    Razorpay: any;
  }
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  const { name, email, website, location, displayLogOut, displayHireMe } = props;

  const { navigateToSpecificRoute } = useData();

  const handleLogOut = () => {
    removeLocalStorage(StorageKeys.AUTH_USER);
    navigateToSpecificRoute(HOME);
  };
  const loadScript = (src: any): Promise<any> => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const invokeRazorpayModal = async (amount: number, orderID: string) => {
    console.log(amount, orderID);
    // save order id to session storage
    const response = await loadScript('rzp_test_51EZ1zxU862gz6');
    // Iframe Code of Razorpay starts from here
    if (!response) {
      alert("you are offline ... Failed to load Razorpay SDK");
      return;
    }
    const options = {
      key: 'rzp_test_51EZ1zxU862gz6',
      currency: 'INR',
      amount,
      order_id: orderID,
      prefill: {
        email: 'hackthon@gmail.com',
        contact: '9876543210',
      },
      modal: {
        ondismiss: () => {
        },
      },
      async handler(res: any) {
        // After receiving razorpay signature, call backend API to confirm
        if (res?.razorpay_signature) {
          const signatureResponse: any = await axiosPost(VERIFY_SIGNATURE_URL, res);
          console.log(signatureResponse);
          if (signatureResponse?.data?.res) {

          }
        }
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleRazorPay = async () => {
    try {
      // Create an order id for razorpay
      const createOrderIDResponse: any = await axiosPost(CREATE_ORDER_ID, { amount: 1000 });
      if (createOrderIDResponse?.status === 200) {
        // invoking iframe with amount and order id as received from order id response
        await invokeRazorpayModal(
          createOrderIDResponse?.data?.amount,
          createOrderIDResponse?.data?.orderId,
        );
      }
    } catch (error: any) {
      // triggerNavigation(PAYMENT_FAILED);
    }
  }

  return (
    <div className="box_shadow_sm br_16_0_16_16 p_16 flex col_center">
      <div className="flex g_16 col_center">
        <Avatar size={60} icon={<UserOutlined />} />
        <div>
          <p className="font_primary fs_16 lh_16 fw_600 charcoal capitalize">{name}</p>
          <p className="mt_4 font_primary fs_12 lh_16 fw_400 charcoal"><GlobalOutlined /> {location}</p>
          <p className="mt_4 font_primary fs_16 lh_16 fw_400 charcoal">{`${email} ${website ? ` | ${website}` : ''}`}</p>
        </div>
      </div>
      {
        displayLogOut
          ? <CustomButton
            label={resources.logOut}
            className="ml_auto  h_max_content py_12_px_28 charcoal fs_16 lh_16 font_primary"
            onClick={handleLogOut}
          />
          : <></>
      }
      {
        displayHireMe
          ? <CustomButton
            label={resources.hireMe}
            className="ml_auto bg_primary h_max_content py_12_px_28 white fs_16 lh_16 font_primary"
            onClick={handleRazorPay}
          />
          : <></>
      }

    </div>
  );
};

export default ProfileHeader;
