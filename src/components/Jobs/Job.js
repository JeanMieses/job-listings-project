import CompanyData from "./CompanyData";
import HiringInfo from "./HiringInfo";
import styles from "./Job.module.css";

const Job = (props) => {
  let image = props.logo.slice(9);

  return (
    <li className={styles.job}>
      <img
        className={styles.logo}
        alt="company's logo"
        src={require(`./../../assets/${image}`)}
      />

      <CompanyData
        styless={styles}
        company={props.company}
        position={props.position}
        featured={props.featured}
        new={props.new}
        postedAt={props.postedAt}
        contract={props.contract}
        location={props.location}
      />

      <HiringInfo
        styless={styles}
        role={props.role}
        level={props.level}
        languages={props.languages}
        tools={props.tools}
        filterCategories={props.filterCategories}
      />
    </li>
  );
};

export default Job;
