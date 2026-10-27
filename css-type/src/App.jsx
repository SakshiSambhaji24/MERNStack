import ExternalCSS from "./components/ExternalCSS";
import InlineCSS from "./components/InlineCSS";
import ModuleCSS from "./components/ModuleCSS";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        React CSS Types
      </h1>

      <ExternalCSS />
      <InlineCSS />
      <ModuleCSS />
    </div>
  );
}

export default App;