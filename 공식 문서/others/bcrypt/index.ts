import * as bcrypt from 'bcrypt';

const DEFAULT_PASSWORD = 'password';
const DEFAULT_SALT_ROUNDS = 12;

async function makeHash(password: string, saltRounds: number) {
  return await bcrypt.hash(password, saltRounds);
}

async function compare(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

const hashed = await makeHash(DEFAULT_PASSWORD, DEFAULT_SALT_ROUNDS);

console.log(hashed);
console.log(await compare(DEFAULT_PASSWORD, hashed));
