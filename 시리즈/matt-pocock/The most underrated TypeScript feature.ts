const routes = {
  home: '/',
  admin: '/admin',
  users: '/users',
} as const;

type RouteKeys = keyof typeof routes;

type Route = (typeof routes)[RouteKeys];

const goToRoute = (route: Route) => {};

goToRoute(routes.admin);
