import Image from "next/image";
import { useContext, useState } from "react";
import styles from "./Card.module.scss";
import { MainContext } from "@/state";
import { DELETE, GET } from "@/utils/fn/http";
import { IMainContext } from "@/interfaces/IState";
import { ICardProps } from "@/interfaces/IComponentsProps";
import Modal from "../modal";
import Overlay from "../overlay";

const Card = ({ data }: ICardProps) => {
  const { state, dispatch } = useContext<IMainContext>(MainContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const onHandleDelete = async (): Promise<void> => {
    try {
      await DELETE(data.id, dispatch);
      await GET(dispatch);
    } catch (error) {
        console.error('Error deleting data:', error);
    }
  };
  
  const onHandleClick = () => setIsOpen((prev) => !prev)

  return (
    <div className={styles.Card}>
      <div className={styles.Card__image}>
        <Image src={data.imageUrl} width={200} height={200} alt="image" />
      </div>
      <p className={styles.Card__text}>
        Nome: {data.name}
      </p>
      <p className={styles.Card__text}>
        E-mail: {data.email}
      </p>
      <p className={styles.Card__text}>
        Job title: {data.jobTitle}
      </p>
      <p className={styles.Card__text}>
        Phone: {data.phone}
      </p>
      <div className={styles.Card__buttons}>
        <button className={styles.Card__buttons__editBtn} onClick={onHandleClick}>Edit</button>
        <button className={styles.Card__buttons__deleteBtn} onClick={onHandleDelete}>Delete</button>
        {isOpen &&
                <>
                    <Overlay handleClick={onHandleClick} />
          <Modal isOpen={isOpen} handleClick={onHandleClick} http={"PUT"}
            data={{
              id: data.id,
              name: data.name,
              email: data.email,
              jobTitle: data.jobTitle,
              phone: data.phone,
              imageUrl: data.imageUrl,
              employeeCode: data.employeeCode
            } } />
                </>
            }
      </div>
    </div>
  );
};

export default Card;
