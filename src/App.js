import './reset.css'
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
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';



function App() {
 
  const areas = [{
    name:'Restaurantes',
    id:'1'
  },
{
  name:'Salão de Beleza',
  id:'2'
}]

  const areasName = areas.map(area => area.name)
  const text1 = "Confirme o segmento que sua empresa atua para personalizarmos sua experiência em nosso aplicativo."
  const text2 = "Selecione abaixo o segmento que mais se aproxima com o ramo de atividade de sua empresa"

    const createList = ()=>{     
        setActivityAreas(areas)
        setAreaDefault('')
        setTextDefault(text2)
    }
    
    const selectActivity = (item)=>{
      setAreaDefault(item)
      setActivityAreas([])
      setTextDefault(text1)
    }

    const back = ()=>{
      setAreaDefault(areasName[0])
      setActivityAreas([])
      setTextDefault(text1)
    }
    const [activityAreas, setActivityAreas]  =  useState([])
    const [areaDefault, setAreaDefault] = useState(areasName[0])
    const [searchValue, setSearchValue] =useState('')
    const [textDefault, setTextDefault] = useState(text1)
    
    const captureValue = (e)=>{
        setSearchValue(e.target.value)
         console.log(searchValue)
    }


  return (
    <div className="App">
      <Banner image={bgBanner} />
      <div className="titleDivision">
        <div className="iconText">
          <BiArchive size={70} style={{color:'#1799e3'}}/>
          <Title title="Segmento da Empresa" />
        </div>
        <Text text={textDefault} />
      </div>
      {activityAreas.length === 0 && <div>
         <Text style={{ fontWeight: '500', marginTop: '6rem', marginBottom:'0' }} text="Segmento Selecionado:" />
      <div className='edit'>
        <Title style={{marginBottom:'0rem'}} title={areaDefault} />
        <a onClick={createList}><AiFillEdit size={70} style={{color:'#1799e3', marginLeft:'2rem'} }/></a>
      </div> </div>}
      <div className='list'>  
        <ul>
          {activityAreas.length > 0 && <SearchBar onChange={captureValue} onClick={()=>console.log('pesquisar')}/> }
          {activityAreas.filter(item=> item.name.includes(searchValue)).map(item=> <ItemList onClick={()=>{selectActivity(item.name)}} key={item.id}>{item.name}</ItemList>)}
           
        </ul>
            
      </div>
      <div className="styledButtons">
        <Button onClick={back} backgroundColor="white" textColor="white" borderColor="#1f9ce4" >
          <FiChevronLeft style={{color:"#1f9ce4",}}/>
          <Text style={{ color: '#1f9ce4', padding: '0' }} text="Voltar" />
        </Button>
        {areaDefault.length > 0 &&<Button backgroundColor="#1f9ce4" textColor="white" borderColor="#1f9ce4" >
          <FiCheckCircle color="white" />
          <Text style={{ color: 'white', padding: '0', width: '100%' }} text="Finalizar o cadastro" />
        </Button>}
      </div>

    </div>
  );
}

export default App;
