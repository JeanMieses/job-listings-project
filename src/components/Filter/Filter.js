import styles from "./Filter.module.css";

const Filter = (props) => {
  const filterOut = (e) => {
    props.filterCategoriesOut(
      e.target.parentNode.innerText.slice(0, -1).trim()
    );
  };

  return (
    props.categories.length > 0 && (
      <div className={styles.filter}>
        {props.categories.map((category) => (
          <div key={Math.random()}>
            {category}
            <button onClick={filterOut} className={styles.remove}>
              X
            </button>
          </div>
        ))}
        <button onClick={props.resetFilter} className={styles.reset}>
          Clear
        </button>
      </div>
    )
  );
};

export default Filter;
