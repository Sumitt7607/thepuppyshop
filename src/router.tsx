import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  const origGetMatchedRoutes = router.getMatchedRoutes.bind(router);
  router.getMatchedRoutes = ((pathname: string) => {
    const res = origGetMatchedRoutes(pathname) as any;
    if (res && typeof res === "object" && !res[Symbol.iterator]) {
      res[Symbol.iterator] = function* () {
        yield res.matchedRoutes;
        yield res.routeParams;
        yield res.foundRoute;
      };
    }
    return res;
  }) as typeof router.getMatchedRoutes;

  return router;
};
