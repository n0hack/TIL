import axios from 'axios';
import { atom, selector } from 'recoil';

export const serverConfigState = selector({
  key: 'serverConfig',
  get: async ({ get }) => {
    const response = await axios('/config');
    return response.data.result.server;
  }
});
