import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./navigation";
import { App, ConfigProvider } from "antd";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App>
      <ConfigProvider
        theme={{
          components: {
            Steps: {
              iconSize: 40,
              iconFontSize: 18,
              iconSizeSM: 40,
              colorPrimary: "#4f46e5",
            },
            Button: {},
            Tabs: {
              itemColor: "#6B7280",
              itemSelectedColor: "#111827",
              itemHoverColor: "#111827",
              inkBarColor: "#4f46e5",
              fontWeightStrong: 300,
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </App>
  </QueryClientProvider>,
);
