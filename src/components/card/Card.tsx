import Image from "next/image";
import { ICardProps } from "@/interfaces/IDataProps";
import styles from "./Card.module.scss";

const Card = ({ data }: ICardProps) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__image}>
        <Image src={data.imageUrl} width={200} height={200} alt="image" />
      </div>
      <p className={styles.Card__name}>
        Nome: {data.name}
      </p>
      <p className={styles.Card__name}>
        E-mail: {data.email}
      </p>
      <p className={styles.Card__name}>
        Job title: {data.jobTitle}
      </p>
      <p className={styles.Card__name}>
        Phone: {data.phone}
      </p>
      <p className={styles.Card__name}>
        {data.employeeCode}
      </p>
    </div>
  );
};

export default Card;
