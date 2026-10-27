import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />
        <Content />
      </div>

      <Footer />
    </>
  );
}

export default App;