import { IEmployee } from "@/interfaces/IEmployee";

export type HandleClick = () => void;

export type EmployeeActionType =
| { type: 'FETCH_REQUEST' }
| { type: 'FETCH_SUCCESS' }
| { type: 'FETCH_SUCCESS'; payload: IEmployee[] }
| { type: 'FETCH_FAILURE'; payload: string };