import { IEmployeeState, IMainContext } from "@/interfaces/IState";
import { createContext } from "react";

export const initialState: IEmployeeState = {
    loading: false,
    data: [],
    error: null,
}

export const MainContext = createContext<IMainContext>({ state: initialState, dispatch: () => {}});
