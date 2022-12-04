import Banner from "./components/Banner";
import Title from "./components/Title";
import bgBanner from "./img/bgBanner.png"



function App() {
  return (
    <div className="App">
      <Banner image={bgBanner}/>
      <Title title="Segmento da Empresa"/>
    </div>
  );
}

export default App;
