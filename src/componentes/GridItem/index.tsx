import { Level } from "../../helpers/imc"
import styles from './Grid.module.css'
import upimage from '../../assets/up.png'
import downimage from '../../assets/down.png'

type Props={
    item:Level

}
export const GridItem =({item}:Props)=>{
    return(
        <div className={styles.main} style={{backgroundColor:item.color}}>
            <div className={styles.gridIcon}>
                {item.icon ==='up' && <img src={upimage} alt="" width="30"/>}
                {item.icon ==='dowm' && <img src={downimage} alt="" width="30"/>}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>
                    Seu IMC é de {item.yourImc} Kg/m²

                </div>
            
            }

            <div className={styles.gridInfo}>
                <>
                O IMC está entre <strong>{item.imc[0]} </strong> e <strong> {item.imc[1]}</strong>
                </>
            </div>
        </div>
    )

}