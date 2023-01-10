import React, { useState } from "react";
import JobsList from "./components/Jobs/JobsList";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
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

  const resetFilter = () => {
    setPostedJobs(data);
    setCategories([]);
  };

  return (
    <>
      <Header/>
      <Filter resetFilter={resetFilter} categories={categories} />
      <JobsList filterCategories={filterCategories} jobs={postedJobs} />
    </>
  );
}

export default App;
