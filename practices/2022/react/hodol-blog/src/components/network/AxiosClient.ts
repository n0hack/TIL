import axios from "axios";
import { singleton } from "tsyringe";
import HttpRepository from "../../repository/HttpRepository";

@singleton()
export default class AxiosClient implements HttpRepository {
  public client = axios.create({ timeout: 5000 });

  public get(url: string) {
    return this.client.get(url);
  }

  public post() {
    return null;
  }

  public update() {
    return null;
  }

  public delete() {
    return null;
  }
}
