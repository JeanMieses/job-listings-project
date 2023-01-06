const CompanyData = (props) => {
  return (
    <div>
      <span>{props.company}</span>
      <span className={props.new ? props.styless.new : " "}>
        {props.new ? "new" : ""}
      </span>
      <span className={props.featured ? props.styless.featured : " "}>
        {props.featured ? "featured" : ""}
      </span>
      <p>{props.position}</p>

      <div className={props.styless.info}>
        <span>{props.postedAt}</span>
        <span>{props.contract}</span>
        <span>{props.location}</span>
      </div>
    </div>
  );
};

export default CompanyData;
