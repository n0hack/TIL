import axios, { AxiosInstance } from "axios";
import AxiosClient from "../components/network/AxiosClient";
import { singleton, inject } from "tsyringe";
import type HttpRepository from "./HttpRepository";

@singleton()
export default class UserRepository {
  private readonly client: HttpRepository;

  // injection을 함으로써 테스트 시 Mocking Data를 만들 수 있음
  // 그리고 인터페이스를 만들어 두면, 이를 구현할 클래스들이 앞으로도 많을 거임
  public constructor(@inject(AxiosClient) client: HttpRepository) {
    this.client = client;
  }

  public getUser(): Promise<Object> {
    return this.client.get("https://jsonplaceholder.typicode.com/users/1");
  }
}
