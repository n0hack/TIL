import axios from "axios";

async function getUser(userId: number) {
  try {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/{userId}`);
    return user;
  } catch (e: unknown) {
    if (e instanceof Error) {
      return new Error(e.message);
    }
  }
}

getUser(9999).then(console.log);
