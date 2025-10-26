import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    lazy: {
        Component: async () => {
            const Component = await import("../pages/Address.jsx")
            return Component.default;
        },
    },
  },
  {
    path: "/ListContact",
    lazy: {
        Component: async () => {
            const Component = await import("../pages/ListContact.jsx")
            return Component.default;
        },
    },
  },
]);
export default router;