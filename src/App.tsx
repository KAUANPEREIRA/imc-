import styles from './App.module.css'
import React, { useState } from 'react';
import logo from './assets/powered.png';
import {levels,calculateImc, Level} from './helpers/imc'
import {GridItem} from './componentes/GridItem'
import LeftArrow from './assets/leftarrow.png'


function App() {

  const [altura, setAltura] = useState<number>()
  const [peso, setPeso] = useState<number>()
  const [showItem, setShowItem] = useState<Level | null>(null)

  const handleCalcular =()=>{

    if(altura && peso){
      setShowItem(calculateImc(altura,peso))

    }else{
      alert('Preencha todos os campos')
    }

  }
  return (
    <>
  <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={logo} alt="logo" width={150}/>
      </div>
    </header>
    <div className={styles.container}>

      <div className={styles.leftSide}>
        <h1>Calcule seu imc</h1>

        <p>IMC sigla para indíce de massa corporal ,parâmetro
          adotado pela organização Mundial de Saúde 
          para calcular o peso ideal para cada pessoa 
        </p>

        <input
        type="number"
        placeholder="digite sua altura ex 1.5 (em metros)"
        value={altura}
        onChange={e => setAltura((parseFloat(e.target.value)))}
        disabled={showItem?true:false}
        
        />

        <input
        type="number"
        placeholder='Digite seu peso ex 48.8 (em Kilos)'
        value={peso}
        onChange={e=>setPeso(parseFloat(e.target.value))}
        disabled={showItem?true:false}
      
        />

        <button disabled={showItem?true:false} onClick={handleCalcular}>Calcular</button>

      </div>

      <div className={styles.rigthSide}>
        {showItem=== null?
        <div className={styles.grid}>
          {levels.map((item,index)=>{
            return (
             <GridItem key={index} item={item}/>
            )
          })}

        </div>
      :<div className={styles.rigthSideBig}>
        <div className={styles.rigthSideArrow} onClick={()=>setShowItem(null)}>
            <img src={LeftArrow} alt="botão voltar" width={25}/>
        </div>
        <GridItem item={showItem}/>
        
        
        </div>}   
      </div>

    </div>

  </div>
    </>
  );
}

export default App;
