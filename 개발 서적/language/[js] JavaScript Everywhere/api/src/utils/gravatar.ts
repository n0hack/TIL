import md5 from 'md5';

const gravatar = (email: string) => {
  const hash = md5(email);
  return `https://www.gravatar.com/avatar/${hash}.jpg?d=identicon`;
};

export default gravatar;
