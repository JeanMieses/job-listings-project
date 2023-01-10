import styles from "./Filter.module.css";

const Filter = (props) => {
  return (
    props.categories.length > 0 && (
      <div className={styles.filter}>
        {props.categories.map((category) => (
          <div key={Math.random()}>{category}</div>
        ))}
        <button onClick={props.resetFilter} className={styles.reset}>
          Clear
        </button>
      </div>
    )
  );
};

export default Filter;
