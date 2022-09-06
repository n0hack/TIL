import axios, { AxiosInstance } from "axios";
import AxiosClient from "../components/network/AxiosClient";
import { singleton, inject } from "tsyringe";

@singleton()
export default class UserRepository {
  private readonly client: AxiosClient;

  public constructor(@inject(AxiosClient) client: AxiosClient) {
    this.client = client;
  }

  public getUser() {
    return this.client.get("https://google.com");
  }
}
