import "reflect-metadata";
import React from "react";
import AxiosClient from "../components/network/AxiosClient";
import UserRepository from "./UserRepository";
import HttpRepository from "./HttpRepository";

class MockAxiosClient implements HttpRepository {
  get(url: string): Promise<Object> {
    return Promise.resolve({});
  }

  post(): null {
    return null;
  }

  delete(): null {
    return null;
  }

  update(): null {
    return null;
  }
}

test("getUser", () => {
  // given
  const userRepository = new UserRepository(new MockAxiosClient());

  // when
  const result = userRepository.getUser();
  result.then(console.log);

  // then
});
