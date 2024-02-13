import styles from "./CardList.module.scss";
import { IDataProps } from "@/interfaces/IDataProps";
import { IEmployee } from "@/interfaces/IEmployee";
import Card from "../card";

const CardList = ({ data }: IDataProps) => {

  return (
    <section className={styles.CardList}>
      <div className={styles.CardList__container}>
        {data?.map((item: IEmployee) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
