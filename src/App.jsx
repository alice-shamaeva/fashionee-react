import Header from "./components/Header/Header";
import ContentBlock from "./components/ContentBlock/ContentBlock.jsx";
import Footer from "./components/Footer/Footer";
import Showcase from "./pages/Showcase/Showcase.jsx";

function App() {
  return (
      <>
        <Header />
        <ContentBlock
            title="Shop"
            breadcrumbs={["Home", "Shop"]}
        />
        <Showcase />
        <Footer />
      </>
  );
}

export default App;
