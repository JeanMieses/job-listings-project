import styles from "./Job.module.css";

const Job = (props) => {
  let image = props.logo.slice(2);

  const filterCategoriesHandler = (e) => {
    props.filterCategories(e.target.innerText);
  };

  return (
    <li className={styles.job}>
      <img
        className={styles.logo}
        alt="company's logo"
        src={require(`./../../${image}`)}
      />
      <div>
        <span>{props.company}</span>
        <span className={props.new ? styles.new : " "}>
          {props.new ? "new" : ""}
        </span>
        <span className={props.featured ? styles.featured : " "}>
          {props.featured ? "featured" : ""}
        </span>
        <p>{props.position}</p>

        <div className={styles.info}>
          <span>{props.postedAt}</span>
          <span>{props.contract}</span>
          <span>{props.location}</span>
        </div>
      </div>

      <div className={styles.categories}>
        <p onClick={filterCategoriesHandler}>{props.role}</p>
        <p onClick={filterCategoriesHandler}>{props.level}</p>
        {props.languages.map((language) => (
          <p onClick={filterCategoriesHandler} key={Math.random()}>
            {language}
          </p>
        ))}
        {props.tools.map((tool) => (
          <p onClick={filterCategoriesHandler} key={Math.random()}>
            {tool}
          </p>
        ))}
      </div>
    </li>
  );
};

export default Job;
