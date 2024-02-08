import {Card} from './components/Card';

const acoes = ['BBAS3','BMGB4','TRPL4','NEOE3', 'CSMG3'];
const fiis = ['MXRF11', 'HCTR11', 'KNCR11', 'BCFF11', 'DEVA11', 'VGHF11', 'BTCI11', 'MCHF11'];

export default async function Home(){
    let count = 0
    const totalAcoes = acoes.length
    const totalFiis = fiis.length
    
    return (
      <div>
      <h1>Monitor de Ativos</h1>
      <div id="cardContainer">
        {acoes.map((item, index) =>(
          <Card key={index} code = {item} type= 'act' cotacao= 'String' PL= 'String' PVP = 'String' DY = 'String' TipoPagamento = 'String' DataCom = 'String' DataEx = 'String' Valor = 'String' time = 'String' />
        ))}
        {fiis.map((item, index) =>(
          <Card key={index} code = {item} type= 'fii' cotacao= 'String' PL= 'String' PVP = 'String' DY = 'String' TipoPagamento = 'String' DataCom = 'String' DataEx = 'String' Valor = 'String' time = 'String' />
        ))}
      </div>
    </div>
  )
}