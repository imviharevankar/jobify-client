import sign from 'jwt-encode';
import jwtDecode from 'jwt-decode'

const JWT_SECRET_KEY = import.meta.env.VITE_JWT_SECRET_KEY;

export const encodeJwt = (body: object): string => {
  return sign(body, JWT_SECRET_KEY || '');
};

export const decodeJwt = (token: string): object => {
  try {
    return jwtDecode(token);
  } catch {
    return {};
  }
};