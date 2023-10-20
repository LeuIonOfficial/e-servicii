import { Dispatch, FC, SetStateAction } from "react";
import DrawerBody from "./components/DrawerBody";
import { CustomDrawer } from "@components";

const CreateAppointmentDrawer: FC<{
  drawerState: "open" | "update" | "closed";
  setDrawerState: Dispatch<SetStateAction<"open" | "update" | "closed">>;
}> = ({ drawerState, setDrawerState }) => {
  return (
    <CustomDrawer
      drawerState={drawerState}
      setDrawerState={setDrawerState}
      headerTitle="appointment"
      headerDescription="asdasdasd"
    >
      <DrawerBody />
    </CustomDrawer>
  );
};

export default CreateAppointmentDrawer;
