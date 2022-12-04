import Banner from "./components/Banner";
import Text from "./components/Text";
import Title from "./components/Title";
import bgBanner from "./img/bgBanner.png"



function App() {

  

  return (
    <div className="App">
      <Banner image={bgBanner}/>
      <Title title="Segmento da Empresa"/>
      <Text text={"Confirme o segmento que sua empresa atua para personalizarmos sua experiência em nosso aplicativo."}/>
      <Text text={"Segmento Selecionado:"}/>
      <Title title={}
    </div>
  );
}

export default App;
