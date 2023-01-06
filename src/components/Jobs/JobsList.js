import Job from "./Job";
import styles from "./JobsList.module.css";

const JobsList = (props) => {
  return (
    <ul className={styles.list}>
      {props.jobs.map((job) => (
        <Job
          key={job.id}
          company={job.company}
          position={job.position}
          new={job.new}
          featured={job.featured}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          logo={job.logo}
          role={job.role}
          languages={job.languages}
          level={job.level}
          tools={job.tools}
          filterCategories={props.filterCategories}
        />
      ))}
    </ul>
  );
};

export default JobsList;
