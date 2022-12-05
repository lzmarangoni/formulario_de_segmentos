import './App.css'

import Banner from "./components/Banner";
import Button from "./components/Button";
import Text from "./components/Text";
import Title from "./components/Title";
import bgBanner from "./img/bgBanner.png"
import {FiChevronLeft} from "react-icons/fi"
import {FiCheckCircle} from "react-icons/fi"
import {BiArchive} from "react-icons/bi"
import {AiFillEdit} from "react-icons/ai"

function App() {



  return (
    <div className="App">
      <Banner image={bgBanner} />
      <div className="titleDivision">
        <div className="iconText">
          <BiArchive size={70} style={{color:'#1799e3'}}/>
          <Title title="Segmento da Empresa" />
        </div>
        <Text text="Confirme o segmento que sua empresa atua para personalizarmos sua experiência em nosso aplicativo." />
      </div>
      <Text style={{ fontWeight: '500', marginTop: '15rem', marginBottom:'0' }} text="Segmento Selecionado:" />
      <div className='edit'>
        <Title style={{marginBottom:'0rem'}} title="Serviços de Beleza" />
        <a onClick={()=>{console.log('fui clicado')}}><AiFillEdit size={70} style={{color:'#1799e3', marginLeft:'2rem'}}/></a>
      </div>
      <div className="styledButtons">
        <Button backgroundColor="white" textColor="white" borderColor="#1f9ce4" >
          <FiChevronLeft style={{color:"#1f9ce4",}}/>
          <Text style={{ color: '#1f9ce4', padding: '0' }} text="Voltar" />
        </Button>
        <Button backgroundColor="#1f9ce4" textColor="white" borderColor="#1f9ce4" >
          <FiCheckCircle color="white" />
          <Text style={{ color: 'white', padding: '0', width: '100%' }} text="Finalizar o cadastro" />
        </Button>
      </div>

    </div>
  );
}

export default App;
