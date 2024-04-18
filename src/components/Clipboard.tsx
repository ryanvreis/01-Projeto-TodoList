import styles from 'clipboard.module.css'
import TodoClipBoard from "../assets/Clipboard.svg";
export function clipBoard(){
return(
    <div className={styles.clipBoard}>
        <img src={TodoClipBoard} alt="ícone de prancheta" />
        <p>
          Você ainda não tem tarefas cadastradas,
          <br />
          crie tarefas e organize seus itens a fazer
        </p>
      </div>
)
}