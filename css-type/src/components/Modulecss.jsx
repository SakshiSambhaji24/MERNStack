import styles from "./ModuleCSS.module.css";

function ModuleCSS() {
  return (
    <div className={styles.box}>
      <h2 className={styles.heading}>
        CSS Modules
      </h2>

      <p className={styles.text}>
        This component uses CSS Modules.
      </p>
    </div>
  );
}

export default ModuleCSS;