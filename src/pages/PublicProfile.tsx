import { useEffect, useState } from "react";
import CustomSpinner from "../components/custom/CustomSpinner";
import ProfileHeader from "../components/ProfileHeader";
import { axiosPost } from "../service/https.service";
import { USER_URL } from "../api/api";
import { decodeJwt, encodeJwt } from "../helper/cipher";
import { useData } from "../context/DataContext";
import { HOME } from "../routes/path";
import ProjectList from "../components/tables/ProjectList";

const PublicProfile = () => {

  const { navigateToSpecificRoute } = useData();

  const [loader, setLoader] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<any>();

  const fetchPublicProfile = async () => {
    setLoader(true);
    try {
      const token = encodeJwt({ email: "vihar2503@gmail.com" });
      const response = await axiosPost(USER_URL, { token });
      console.log(response);
      setProfileData(decodeJwt(response.data.token));
      setLoader(false);
    } catch (error) {
      navigateToSpecificRoute(HOME)
      setLoader(false);
    }
  }

  console.log(profileData);

  useEffect(() => {
    fetchPublicProfile();
  }, []);

  if (loader) {
    return <CustomSpinner />
  };

  return (
    <div>
      <ProfileHeader
        name={`${profileData?.firstName} ${profileData?.lastName}`}
        email={profileData?.email}
        website={profileData?.website}
        location={profileData?.location}
        displayLogOut={false}
        displayHireMe={!profileData?.isClient}
      />
      <ProjectList />
    </div>
  )
}

export default PublicProfile;
