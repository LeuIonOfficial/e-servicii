import { createContext } from "react";
import { UserType } from "../models/UserType.ts";

export const UserContext = createContext<UserType | undefined>(undefined);
