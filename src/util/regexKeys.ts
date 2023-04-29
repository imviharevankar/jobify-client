export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
export const EMAIL_OR_MOBILE_REGEX = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
export const MOBILE_REGEX = /^[0-9]{10}$/g;
export const ALPHA_REGEX = /^[A-Za-z_ ]+$/;
export const NUMBER_REGEX = /^[0-9]*$/;
