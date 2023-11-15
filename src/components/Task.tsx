import { Trash } from "phosphor-react";

import styles from "./Task.module.css";
import { TaskType } from "../App";

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskToDelete: TaskType) => void;
  onChangeTaskStatus: (taskToFinish: TaskType) => void;
}

export function Task({ task, onDeleteTask, onChangeTaskStatus }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleChangeTaskStatus() {
    onChangeTaskStatus(task);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" name="" id="checkbox" onClick={handleChangeTaskStatus} />

      <span className={task.isFinished ? styles.taskFinished : ""}>
        {task.description}
      </span>
      <Trash
        className={styles.deleteTask}
        size={16}
        onClick={handleDeleteTask}
      />
    </div>
  );
}
