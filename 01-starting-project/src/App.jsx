import { CORE_CONCEPTS } from "../src/data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
