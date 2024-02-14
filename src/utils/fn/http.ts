import { Dispatch } from "react";
import { IDataForm } from "@/interfaces/IDataForm";
import { IEmployee } from "@/interfaces/IEmployee";
import { EmployeeActionType } from "../types/types";
import { API_BASE_URL } from "@/pages"

export const GET = async (dispatch: Dispatch<EmployeeActionType>) => {
    try {
        const response = await fetch(`${API_BASE_URL}/all`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const employees = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: employees });
    } catch (error: any) {
        console.error('Error fetching data:', error);
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    }
}

export const POST = async (formData: IDataForm, dispatch: Dispatch<EmployeeActionType>):Promise<void> => {
    try {
        dispatch({ type: 'FETCH_REQUEST' });
        const response = await fetch(API_BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error('Failed to save data');
        }
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (error: any) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
}

export const DELETE = async (id: number, dispatch: Dispatch<EmployeeActionType>): Promise<void> => {
  try {
      dispatch({ type: 'FETCH_REQUEST' });
      const response = await fetch(`${API_BASE_URL}/${id}`, {
          method: 'DELETE',
      });
      if (!response.ok) {
          throw new Error('Failed to delete data');
      }
      dispatch({ type: 'FETCH_SUCCESS' });
  } catch (error: any) {
      dispatch({ type: 'FETCH_FAILURE', payload: error.message });
  }
};

export const PUT = async (employee: IEmployee, dispatch: Dispatch<EmployeeActionType>): Promise<void> => {
  try {
    dispatch({ type: 'FETCH_REQUEST' });
    const response = await fetch(`${API_BASE_URL}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    dispatch({ type: 'FETCH_SUCCESS' });
  } catch (error: any) {
    dispatch({ type: 'FETCH_FAILURE', payload: error.message });
  }
};



