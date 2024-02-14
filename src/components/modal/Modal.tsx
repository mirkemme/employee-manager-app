import { IModalProps } from "@/interfaces/IComponentsProps"
import styles from "./Modal.module.scss"
import Form from "../form";

const Modal = ({ isOpen, handleClick, data, http }: IModalProps) => {
    return (
        <section className={`${styles.Modal} ${isOpen && styles.Modal__isOpen}`}>
            <Form handleClick={handleClick} data={data} http={http} />
        </section>
    );
}

export default Modal;