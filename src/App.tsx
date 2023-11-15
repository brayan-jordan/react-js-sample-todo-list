import "./global.css";

import styles from "./app.module.css";

import { PlusCircle, ClipboardText } from "phosphor-react";

import { Header } from "./components/Header";
import { Task } from "./components/Task";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <form className={styles.addNewTaskForm}>
          <input type="text" placeholder="Adicione uma tarefa" />
          <button type="submit">
            <span>Criar</span>
            <PlusCircle />
          </button>
        </form>

        <section className={styles.listTasksSection}>
          <div className={styles.listTasksSectionHeader}>
            <div className={styles.createdTasksContainer}>
              <span className={styles.createdTasksText}>Tarefas criadas</span>
              <span className={styles.createdTasksCount}>0</span>
            </div>

            <div className={styles.finishedTasksContainer}>
              <span className={styles.finishedTasksText}>Concluídas</span>
              <span className={styles.finishedTasksCount}>0</span>
            </div>
          </div>

          <div className={styles.emptyTasksContainer}>
            <ClipboardText size={56} />
            <span>Você ainda não tem tarefas cadastradas.</span>
          </div>

          {/* <div className={styles.hasTasksContainer}>
            <Task />
            <Task />
            <Task />
          </div> */}
        </section>
      </main>
    </div>
  );
}
