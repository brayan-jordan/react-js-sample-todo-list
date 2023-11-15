import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" name="" id="checkbox" />

      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut facilis,
        reiciendis dicta molestias saepe illum culpa doloremque veniam dolorum,
        odio, cupiditate modi nemo? Magnam vel quam dicta maxime, accusamus
        minus.
      </span>
      <Trash className={styles.deleteTask} size={16} />
    </div>
  );
}
