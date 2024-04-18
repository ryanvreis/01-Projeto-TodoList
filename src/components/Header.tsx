import { ChangeEvent, FormEvent, useState } from "react";
import TodoLogo from "../assets/logo.svg";
import styles from "./header.module.css";
import { PlusCircle } from "@phosphor-icons/react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    setTitle("");
  }

  return (
    <header className={styles.header}>
      <img src={TodoLogo}></img>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
        ></input>
        <button>
          Criar
          <PlusCircle size={24} />
        </button>
      </form>
    </header>
  );
}
