import React, { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import List from "./List";
import data from "./data";
function App() {
  const [people, setpeople] = useState(data);
  return (
    <div className="App">
      <div>
        <main>
          <section className="container">
            <h3>{people.length} Birthdays Today</h3>
            <List people={people}></List>

            <button onClick={() => setpeople([])}>Clear All</button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
