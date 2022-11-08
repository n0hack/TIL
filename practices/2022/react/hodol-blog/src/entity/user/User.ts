import Gender from "../Gender";

export default class User {
  public id = 1;
  public name = "호돌맨";
  public email = "abc@abc.com";
  public level = 1;
  public gender = Gender.MALE;
  public age = 29;

  public isAdult() {
    return this.age >= 10;
  }

  getAdultLabel() {
    return this.isAdult() ? "어른" : "어린이";
  }
}
