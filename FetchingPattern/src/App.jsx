import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomHookPattern from "./components/CustomHookPattern/CustomHookPattern";
import BasicFetchingPattern from "./components/BasicFetchingPattern/BasicFetchingPattern";
import Fetch from "./components/Cache-FirstPattern/Fetch";

function App() {
  const [count, setCount] = useState(0);
  //While we Fecth Data from API we  have lots of Fetching method
  // Fetching Data Patterns
  // SWR Pattern
  // React Query (TanStack Query)
  // RTK Query
  // Infinite Queries
  // Parallel Queries
  // Suspense with Data Fetching
  return (
    <>
      {/* <BasicFetchingPattern /> */}
      {/* <CustomHookPattern /> */}
      <Fetch/>
    </>
  );
}

export default App;
