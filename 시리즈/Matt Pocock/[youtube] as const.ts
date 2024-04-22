// as const는 객체 깊은 부분까지 readonly로 만들어 준다.
const routes = {
  home: '/',
  admin: '/admin',
  users: '/users',
  newUser: '/users/new',
} as const;

type RouteKeys = keyof typeof routes;

type Route = (typeof routes)[RouteKeys];

const goToRoute = (route: Route) => {};

goToRoute('/users/new');
