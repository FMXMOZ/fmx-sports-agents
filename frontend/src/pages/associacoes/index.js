import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/associacoes/Index.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Associações Provincias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo a <a href="http://fmxmoz.org">F.M.X</a>
        </h1>

        <p className={styles.description}>
          Aplicação de Base de Dados Gestão{" "}
          <code className={styles.code}>Quotas & Agentes Desportivos</code>
        </p>

        <div className={styles.grid}>
          <a
            href="/docs/Regulamento_Quotas_Draft.pdf"
            className={styles.card}
            target="_blank"
          >
            <h3>Regulamento &rarr;</h3>
            <p>Encontre mais informações sobre o regulamento.</p>
          </a>

          <a href="/associacoes" className={styles.card}>
            <h3>Associações Provincias &rarr;</h3>
            <p>Encontre mais informações sobre as associações.</p>
          </a>

          <a href="/agentesdesportivos" className={styles.card}>
            <h3>Agentes Desportivos &rarr;</h3>
            <p>Encontre mais informações sobre os agentes deportivos.</p>
          </a>

          <a href="/cotas" className={styles.card}>
            <h3>Cotas e Joias &rarr;</h3>
            <p>Encontre mais informações sobre as cotas.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/gmahota"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Guimarães Mahota
        </a>
      </footer>
    </div>
  );
}
