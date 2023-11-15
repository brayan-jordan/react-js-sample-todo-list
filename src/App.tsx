import "./global.css";
import { FormEvent, useState, ChangeEvent } from "react";

import styles from "./app.module.css";

import { PlusCircle, ClipboardText } from "phosphor-react";

import { Header } from "./components/Header";
import { Task } from "./components/Task";

export interface TaskType {
  description: string;
  isFinished: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { description: newTaskText, isFinished: false }]);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: TaskType) {
    setTasks(
      tasks.filter((task) => task.description !== taskToDelete.description)
    );
  }

  function changeTaskStatus(taskToChangeStatus: TaskType) {
    setTasks(
      tasks.map((task) => {
        if (task.description === taskToChangeStatus.description) {
          task.isFinished = !task.isFinished;
        }

        return task;
      })
    );
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <form className={styles.addNewTaskForm} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            required
          />
          <button type="submit">
            <span>Criar</span>
            <PlusCircle />
          </button>
        </form>

        <section className={styles.listTasksSection}>
          <div className={styles.listTasksSectionHeader}>
            <div className={styles.createdTasksContainer}>
              <span className={styles.createdTasksText}>Tarefas criadas</span>
              <span className={styles.createdTasksCount}>{tasks.length}</span>
            </div>

            <div className={styles.finishedTasksContainer}>
              <span className={styles.finishedTasksText}>Concluídas</span>
              <span className={styles.finishedTasksCount}>
                {tasks.filter((task) => task.isFinished).length} / {tasks.length}
              </span>
            </div>
          </div>

          {tasks.length > 0 ? (
            <div className={styles.hasTasksContainer}>
              {tasks.map((task) => {
                return (
                  <Task
                    task={task}
                    onDeleteTask={deleteTask}
                    onChangeTaskStatus={changeTaskStatus}
                    key={task.description}
                  />
                );
              })}
            </div>
          ) : (
            <div className={styles.emptyTasksContainer}>
              <ClipboardText size={56} />
              <span>Você ainda não tem tarefas cadastradas.</span>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
