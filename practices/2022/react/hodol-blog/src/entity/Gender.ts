import { ClassEnum } from "class-enum";

export default class Gender extends ClassEnum<Gender> {
  public static readonly MALE = new Gender("MALE", "남성");
  public static readonly FEMALE = new Gender("FEMALE", "여성");

  public readonly title;

  public constructor(value: string, title: string) {
    super(value);
    this.title = title;
  }
}
