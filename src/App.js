import "./App.css";
import Section from "./components/Section";
import movies from "./assets/movies.json";

function App() {
  console.log("App...");

  return (
    <div style={{ width: "100vw" }}>
      <header>NETFLIX</header>
      <div className="block-category">
        {movies.map((elem, index) => {
          return (
            <Section
              key={index}
              title={elem.category}
              images={elem.images}
            ></Section>
          );
        })}
      </div>
    </div>
  );
}

export default App;
