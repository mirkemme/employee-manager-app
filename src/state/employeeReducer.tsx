import { IEmployeeState } from "@/interfaces/IState";
import { EmployeeActionType } from "@/utils/types/types";
  
  const initialState: IEmployeeState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const employeeReducer = (state: IEmployeeState, action: EmployeeActionType): IEmployeeState => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, data: action.payload, error: null };
      case 'FETCH_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default employeeReducer;