import { Dispatch } from "react";
import { IEmployee } from "./IEmployee";
import { EmployeeActionType } from "@/utils/types/types";

export interface IEmployeeState {
    loading: boolean;
    data: IEmployee[];
    error: string | null;
}

export interface IMainContext {
    state: IEmployeeState;
    dispatch: Dispatch<EmployeeActionType>;
}


