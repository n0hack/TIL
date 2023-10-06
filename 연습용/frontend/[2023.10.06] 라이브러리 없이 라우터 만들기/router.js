export default function createRouter() {
  const routes = [];

  const router = {
    addRoute(fragment, component) {
      routes.push({ fragment, component });
      return this;
    },

    start() {
      const checkRoutes = () => {
        const currentRoute = routes.find((route) => route.fragment === location.hash);
        currentRoute.component();
      };

      window.addEventListener('hashchange', checkRoutes);
      checkRoutes();
    },
  };

  return router;
}
