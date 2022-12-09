import './reset.css'
import './App.css'
import Banner from "./components/Banner";
import Button from "./components/Button";
import Text from "./components/Text";
import Title from "./components/Title";
import bgBanner from "./img/bgBanner.png"
import { FiChevronLeft } from "react-icons/fi"
import { FiCheckCircle } from "react-icons/fi"
import { BiArchive } from "react-icons/bi"
import { AiFillEdit } from "react-icons/ai"
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import axios from "axios"


function App() {

  const urlAPI = "https://servicodados.ibge.gov.br/api/v2/cnae/classes"




  const text1 = "Confirme o segmento que sua empresa atua para personalizarmos sua experiência em nosso aplicativo."
  const text2 = "Selecione abaixo o segmento que mais se aproxima com o ramo de atividade de sua empresa"

  const createSearchBar = () => {
    setTurnButton(!false)
    setAreaDefault('')
    setTextDefault(text2)
  }

  const selectActivity = (item) => {
    
    setAreaDefault(item)
    setActivityAreas([])
    setTextDefault(text1)
    setTurnButton(false)
  }

  const back = () => {
    
    setAreaDefault('CULTIVO DE CEREAIS')
    setActivityAreas([])
    setTextDefault(text1)
    setTurnButton(false)
  }

  const [turnButton, setTurnButton] = useState(false)
  const [activityAreas, setActivityAreas] = useState([])
  const [areaDefault, setAreaDefault] = useState("CULTIVO DE CEREAIS")
  const [searchValue, setSearchValue] = useState('')
  const [textDefault, setTextDefault] = useState(text1)

  const captureValue = (e) => {
    
    setSearchValue(e.target.value)
    searchValue.toUpperCase()
    console.log(searchValue)
    getActivity()
  }

  const getActivity = async () => {
    await axios.get(urlAPI)
      .then(response => {
        const data = response.data;
        setActivityAreas(data)
        console.log(data)
        
      })
      .catch(error => console.log(error))
  }

 

  return (
    <div className="App">
      <Banner image={bgBanner} />
      <div className="titleDivision">
        <div className="iconText">
          <BiArchive size={70} style={{ color: '#1799e3' }} />
          <Title title="Segmento da Empresa" />
        </div>
        <Text style={{marginTop:'1rem'}} text={textDefault} />
      </div>
      {turnButton === false &&
        <div>
          <Text style={{ fontWeight: '500', marginTop: '6rem', marginBottom: '0' }} text="Segmento Selecionado:" />
          <div className='edit'>
            <Title style={{ marginBottom: '0rem', fontSize: '3rem' }} title={areaDefault} />
            <p href='' onClick={createSearchBar}><AiFillEdit size={70} style={{ color: '#1799e3', marginLeft: '2rem' }} /></p>
          </div>
        </div>}
      <div className='list'>
        {turnButton === true  && <SearchBar placeholder="EX: Beleza" onChange={captureValue} />}
        {activityAreas.length > 0 &&
        <ul >
          
          {activityAreas.filter(item => item.descricao.includes(searchValue.toUpperCase())).map(item => <ItemList onClick={() => { selectActivity(item.descricao) }} key={item.id}>{item.descricao}</ItemList>)}
          
        </ul>}
      </div>
      <div className="styledButtons">
        <Button onClick={back} backgroundColor="white" textColor="white" borderColor="#1f9ce4" >
          <FiChevronLeft style={{ color: "#1f9ce4", }} />
          <Text style={{ color: '#1f9ce4', padding: '0' }} text="Voltar" />
        </Button>
        {areaDefault.length > 0 && <Button backgroundColor="#1f9ce4" textColor="white" borderColor="#1f9ce4" >
          <FiCheckCircle color="white" />
          <Text style={{ color: 'white', padding: '0', width: '100%' }} text="Finalizar o cadastro" />
        </Button>}
      </div>

    </div>
  );
}

export default App;
