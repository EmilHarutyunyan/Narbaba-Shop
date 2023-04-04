import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'
import { API_ENDPOINT } from '../config/config';
import TokenService from './token.service';


const baseURL = API_ENDPOINT


let authTokens = TokenService.getUser() || ""

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authTokens.JwtToken}` },
});

axiosInstance.interceptors.request.use(async req => {
  debugger
    if(!authTokens){
        authTokens = TokenService.getUser() || ""
        req.headers.Authorization = `Bearer ${authTokens.JwtToken}`;
    }
    
    const user = jwt_decode(authTokens.JwtToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if(!isExpired) return req

    const response = await axios.post(`${baseURL}Account/RefreshToken`, {
      refreshToken: authTokens.RefreshToken,
    });
    const newToken = response.data.item
    TokenService.setUser({
      ...authTokens,
      JwtToken: newToken.jwtToken,
      JwtTokenExpiresUtc: newToken.jwtTokenExpiresUtc,
      RefreshToken: newToken.refreshToken,
      RefreshTokenExpiresUtc: newToken.refreshTokenExpiresUtc,
    });
    req.headers.Authorization = `Bearer ${newToken.jwtToken}`;
    return req
})


export default axiosInstance;