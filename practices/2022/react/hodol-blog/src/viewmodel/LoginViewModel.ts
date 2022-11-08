import User from "../entity/user/User";

export default class LoginViewModel {
  public user = new User();
  public loading = false;
}
