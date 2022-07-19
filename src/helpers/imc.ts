export type Level = {
    title:string
    color:string
    icon:string
    imc : number[]
    yourImc?:number

}
export const levels:Level[] = [
    {title:'Magreza',color:'#96a3ab',icon:'dowm',imc:[0,18.5]},
    {title:'Normal',color:'#0ead69',icon:'up',imc:[18.6,24.9]},
    {title:'sobrepeso',color:'#e2b039',icon:'dowm',imc:[25,30]},
    {title:'obesidade',color:'#c3423f',icon:'dowm',imc:[30.1,99]}
    
]

export const calculateImc =(heigth:number,weigth:number)=>{
    const imc =  weigth/ (heigth* heigth)

    //for para mapear e ver em faixa se enquadra o imc

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            levels[i].yourImc = imc
            return levels[i]

        }

    }

    return null

}