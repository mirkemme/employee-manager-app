import { useState } from "react";
import styles from "./Header.module.scss";
import Overlay from "../overlay";
import Modal from "../modal";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onHandleClick = () => setIsOpen((prev) => !prev)

    return (
        <header className={styles.Header}>
            <h3>EMPLOYEE MANAGER</h3>
            <h3 onClick={onHandleClick} className={styles.Header__addEmployee}>Add Employee</h3>
            {isOpen &&
                <>
                    <Overlay handleClick={onHandleClick} />
                <Modal isOpen={isOpen} handleClick={onHandleClick} http={"POST"}
                    data={{
                        id: 0,
                        name: '',
                        email: '',
                        jobTitle: '',
                        phone: '',
                        imageUrl: '',
                        employeeCode: ""
                      } } />
                </>
            }
        </header>
    );
}

export default Header;