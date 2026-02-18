import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        {/*Pages will render here later */}
      </main>

      <Footer />
    </>
  );
}

export default App;
