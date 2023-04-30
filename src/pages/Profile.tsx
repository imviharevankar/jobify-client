import { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProjectList from "../components/tables/ProjectList";
import { getLocalStorage } from "../helper/storage";
import { StorageKeys } from "../util/storageKeys";
import { HOME } from "../routes/path";
import { decodeJwt } from "../helper/cipher";
import { useData } from "../context/DataContext";
import StatCard from "../components/StatCard";

const Profile = () => {
  const { navigateToSpecificRoute } = useData();

  const authUser = getLocalStorage(StorageKeys.AUTH_USER);

  const [profileData, setProfileData] = useState<any>();

  const checkUser = () => {
    if (authUser) {
      setProfileData(decodeJwt(authUser));
    } else {
      navigateToSpecificRoute(HOME)
    }
  }

  console.log(profileData);

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <ProfileHeader
        name={`${profileData?.firstName} ${profileData?.lastName}`}
        email={profileData?.email}
        website={profileData?.website}
        location={profileData?.location}
        displayLogOut
        displayHireMe={false}
      />
      <StatCard
        isClient={profileData?.isClient}
        joinedOn={profileData?.createdAt || new Date().toString()}
        amountEarned={profileData?.amountEarned}
        amountOnhold={0}
        amountSpent={profileData?.amountSpent}
      />
      <ProjectList />
    </>
  )
}

export default Profile;
