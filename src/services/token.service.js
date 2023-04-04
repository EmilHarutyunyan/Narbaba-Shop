class TokenService {
  static getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.RefreshToken;
  }

  static getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.JwtToken;
  }

  static updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.JwtToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  static getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  static setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  static getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }
  static removeUser(user = "user") {
    localStorage.removeItem(user);
  }
  static setUserInfo(user) {
    localStorage.setItem("userInfo", JSON.stringify(user));
  }
  static removeUserInfo(user) {
    localStorage.removeItem("userInfo", JSON.stringify(user));
  }
  
}

export default TokenService;
