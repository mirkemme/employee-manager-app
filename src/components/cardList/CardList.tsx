import styles from "./CardList.module.scss";
import { IDataProps } from "@/interfaces/IDataProps";
import { IEmployee } from "@/interfaces/IEmployee";
import Card from "../card";

const CardList = ({ employees }: IDataProps) => {

  return (
    <section className={styles.CardList}>
      <div className={styles.CardList__container}>
        {employees?.map((employee: IEmployee) => (
          <Card data={employee} key={employee.id} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
