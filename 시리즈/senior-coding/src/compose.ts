const user = {
  lastName: 'Jeon',
  firstName: 'Lucid',
};

const fullname = (u: typeof user) => ({ ...user, fullname: `${u.firstName} ${u.lastName}` });

const appendAddr = (u: typeof user) => ({ ...u, addr: 'Seoul' });

const compose =
  <T>(...fns: Function[]) =>
  (x: T) =>
    fns.reduce((v, f) => f(v), x) as T;

const res = compose(fullname, appendAddr)(user);
