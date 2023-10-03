import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./navigation";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat, sans-serif",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </QueryClientProvider>,
);
