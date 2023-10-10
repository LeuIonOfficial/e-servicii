import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import routes from "@routes";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => navigate(routes.authenticated.dashboard)}
            className="bg-blue-400"
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
