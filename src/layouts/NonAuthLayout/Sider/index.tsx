import Sider from "antd/es/layout/Sider";
import { Divider } from "antd";
import { useSiderMenu } from "./constants.tsx";
import logo from "@assets/logo-1.png";
const NonAuthSider = () => {
  const sider = useSiderMenu();
  return (
    <Sider
      className="h-[100vh] p-5 child:flex child:flex-col child:justify-between child:items-center"
      style={{ backgroundColor: "#fff" }}
    >
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        {sider.map(({ title, action }, index) => (
          <div key={index}>
            <div onClick={action} className="cursor-pointer">
              {title}
            </div>
            <Divider className="my-3" />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
          <img
            src="https://kitwind.io/assets/kometa/app-store.png"
            className="object-cover object-top w-full h-auto mx-auto"
            alt=""
          />
        </a>
        <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
          <img
            src="https://kitwind.io/assets/kometa/google-play.png"
            className="object-cover object-top w-full h-auto"
            alt=""
          />
        </a>
      </div>
    </Sider>
  );
};
export default NonAuthSider;
