import { createContext } from "react";
import { UserDataContextType } from "@/context/ConfigUserDataContext";

export const UserDataContext = createContext<UserDataContextType>({
	login: "",
	role: null,
	name: null,
});
