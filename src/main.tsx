import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";

const queryClient = new QueryClient();

// Detect basepath dynamically for GitHub Pages subpath vs custom domains
const isGithubPages = typeof window !== "undefined" && window.location.hostname.includes("github.io");
const basepath = isGithubPages ? "/nazanin_academy" : "/";

// Create router
const router = createRouter({
  routeTree,
  basepath,
  context: {
    queryClient,
  },
});

// Register router types
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
