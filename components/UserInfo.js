export class UserInfo {
  constructor(info) {
    this._info = info;
  }

  getUserInfo(){
    return this._info;
  }

  setUserInfo(info){
    this._info = info;
  }
}