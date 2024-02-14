import { ChangeEvent, useContext, useState } from "react";
import styles from "./Form.module.scss"
import { IDataForm } from "@/interfaces/IDataForm";
import { IFormProps } from "@/interfaces/IComponentsProps";
import { GET, POST, PUT } from "@/utils/fn/http";
import { MainContext } from "@/state";
import { IMainContext } from "@/interfaces/IState";
import { IEmployee } from "@/interfaces/IEmployee";

const Form = ({ handleClick, data, http }: IFormProps) => {
    const { state, dispatch } = useContext<IMainContext>(MainContext);
    const [formData, setFormData] = useState<IDataForm>(data);
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    const handleSaveChanges = async (): Promise<void> => {
          if ( http === "POST")
            {try {
                if (!formData.name || !formData.email || !formData.jobTitle || !formData.phone || !formData.imageUrl) {
                    console.error('All fields are required');
                    return;
                }
                await POST(formData, dispatch);
                await GET(dispatch);
                handleClick(); // chiude la modale
            } catch (error) {
                console.error('Error saving data:', error);
              }
          } else if (http === "PUT") {
              try {
                const updatedEmployee: IEmployee = { ...data, ...formData };
                await PUT(updatedEmployee, dispatch);
                await GET(dispatch);
                handleClick(); // chiude la modale
              } catch (error) {
                console.error('Error updating data:', error);
              }  
          }
    };
    
      return (
          <div className={styles.Form}>
              <h4>Add Employee</h4>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required/>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required/>
              <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" required/>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required/>
              <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required/>
              <div className={styles.Form__buttons}>
                  <button className={styles.Form__buttons__closeBtn} onClick={handleClick}>Close</button>
                  <button className={styles.Form__buttons__saveBtn} onClick={handleSaveChanges}>Save Changes</button>
              </div>
          </div>
      );
}

export default Form;