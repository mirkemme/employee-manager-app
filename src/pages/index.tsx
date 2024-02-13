import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

import { dataMock } from "@/mock/data";
import { IDataProps } from "@/interfaces/IDataProps";
import CardList from "@/components/cardList";
import { useEffect, useReducer } from "react";
import employeeReducer from "@/reducers/employeeReducer";

export default function Home({ data }: IDataProps) {
  const initialState = {
    loading: false,
    data: [],
    error: null,
  }  
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  useEffect(() => {
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
  }, []);

  return (
    <>
      <Head>
        <title>Employee manager app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mirko Montaina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
          <h2>Header</h2>
      </header>
      <main className={`${styles.main}`}>
        <h2>Main</h2>
        <section className={styles.content}>
          <div className={styles.container}>
            <CardList data={ state.data } />
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:8080/api/v1/employee/all');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return {
      props: {data}
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error(error.message);
  }
}