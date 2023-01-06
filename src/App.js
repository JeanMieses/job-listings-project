import React, { useState } from "react";
import JobsList from "./components/Jobs/JobsList";
import Filter from "./components/Filter/Filter";
import data from "./assets/data.json";

function App() {
  const [categories, setCategories] = useState([]);
  const [postedJobs, setPostedJobs] = useState(data);

  //This will add  category to the array, whcih we will use to display in the bar at the top
  const filterCategories = (category) => {
    setCategories((prevsState) => {
      if (!prevsState.includes(category)) {
        return [...prevsState, category];
      }
      return prevsState;
    });

    //this line of code gave me a headache. Pls, don't judge the messy synptax :(
    // we are filtering jobs based languages, tools, level or role
    setPostedJobs((prevs) => {
      return prevs.filter((job) => {
        return (
          job.languages.includes(category) ||
          job.tools.includes(category) ||
          job.level === category ||
          job.role === category
        );
      });
    });
  };

  //not sure how to do it
  const filterCategoriesOut = (category) => {
    setCategories((prevsState) =>
      prevsState.filter((state) => state !== category)
    );
  };

  const resetFilter = () => {
    setPostedJobs(data);
    setCategories([]);
  };

  return (
    <>
      <Filter
        filterCategoriesOut={filterCategoriesOut}
        resetFilter={resetFilter}
        categories={categories}
      />
      <JobsList filterCategories={filterCategories} jobs={postedJobs} />
    </>
  );
}

export default App;
