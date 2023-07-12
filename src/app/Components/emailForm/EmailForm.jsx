import styles from "./emailForm.module.css";

export default function EmailForm() {
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        action="https://formsubmit.co/44cffa188765a7d309720e7763f84f77"
        method="POST">
        <div className={styles.NameContainer}>
          <input
            type="text"
            name="name"
            placeholder="Your name or corporation"
            className={styles.nameInput}
          />
        </div>
        <div className={styles.EmailContainer}>
          <input
            type="text"
            name="email"
            placeholder="Your email"
            className={styles.EmailInput}
          />
        </div>
        <div className={styles.SubjectContainer}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={styles.subjectInput}
          />
        </div>
        <div className={styles.MessageContainer}>
          <input
            className={styles.messageTextarea}
            name="message"
            placeholder="Your message"></input>
        </div>
        <button className={styles.button} type="submit">
          enviar
        </button>
      </form>
    </div>
  );
}
