import {Card} from '../components/Card/Card';
import CardData from '@/components/Card/CardData';

const acoes = ['BBAS3','BMGB4','TRPL4','NEOE3', 'CSMG3'];
const fiis = ['MXRF11', 'HCTR11', 'KNCR11', 'BCFF11', 'DEVA11', 'VGHF11', 'BTCI11', 'MCHF11'];

export default async function Home(){    
    return (
      <div>
      <h1>Monitor de Ativos</h1>
      <div id="cardContainer">
        {acoes.map((item, index) =>(
          <Card key={index} code={item}>
            <CardData code={item}/>
          </Card>
        ))}
        {fiis.map((item, index) =>(
          <Card key={index} code = {item}>
            <CardData code={item}/>
          </Card>
        ))}
      </div>
    </div>
  )
}