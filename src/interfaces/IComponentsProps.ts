import { HandleClick } from "@/utils/types/types";
import { IEmployee } from "./IEmployee";

export interface IDataHomeProps {
    employees: IEmployee[],
}

export interface IModalProps {
    isOpen: boolean,
    handleClick: HandleClick,
    http: string
    data: IEmployee
}

export interface IFormProps { 
    handleClick: HandleClick,
    http: string
    data: IEmployee
}

export interface IOverlayProps {
    handleClick: HandleClick;
}

export interface ICardProps {
    data: IEmployee,
}