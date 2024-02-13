import { IEmployee } from "@/interfaces/IEmployee";

interface EmployeeState {
    loading: boolean;
    data: IEmployee[];
    error: string | null;
  }
  
  type EmployeeAction =
    | { type: 'FETCH_REQUEST' }
    | { type: 'FETCH_SUCCESS'; payload: IEmployee[] }
    | { type: 'FETCH_FAILURE'; payload: string };
  
  const initialState: EmployeeState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const employeeReducer = (state: EmployeeState, action: EmployeeAction): EmployeeState => {
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