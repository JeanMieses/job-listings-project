const HiringInfo = (props) => {
  const filterCategoriesHandler = (e) => {
    props.filterCategories(e.target.innerText);
  };

  return (
    <div className={props.styless.categories}>
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
  );
};

export default HiringInfo;
