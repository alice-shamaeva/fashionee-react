import Header from "./components/Header/Header";
import ContentBlock from "./components/ContentBlock/ContentBlock.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <>
        <Header />
        <ContentBlock
            title="Shop"
            breadcrumbs={["Home", "Shop"]}
        />
        <Footer />
      </>
  );
}

export default App;
