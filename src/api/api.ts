const BASE_URL = import.meta.env.VITE_BASE_URL;

export const JOB_LISTING_URL = `${BASE_URL}/jobs`;

// AUTH URLs
export const SIGN_IN_URL = `${BASE_URL}/auth/signin`;
export const SIGN_UP_URL = `${BASE_URL}/auth/signup`;

export const CLIENT_SEARCH = `${BASE_URL}/users/search`;
export const FREELANCER_SEARCH = `${BASE_URL}/jobs/search`;
export const DROPDOWN_URL = `${BASE_URL}/dropdown`;
export const USER_URL = `${BASE_URL}/user`;
export const CREATE_ORDER_ID = `${BASE_URL}/payment/create-order`;
export const VERIFY_SIGNATURE_URL = `${BASE_URL}/payment/verify-signature`;
