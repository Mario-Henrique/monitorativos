import ModalExample from '@/components/Modal/useExample';
import {Card} from '../components/Card/Card';
import CardData from '@/components/Card/CardData';
import Link from 'next/link';

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
        <Link href="/api?code=BMGB4">Link Teste</Link>
        {/* {acoes.map((item, index) =>(
          <Card key={index} code={item}>
            <CardData code={item}/>
          </Card>
        ))} */}
        {/* {fiis.map((item, index) =>(
          <Card key={index} code = {item} type= 'fii' cotacao= 'String' PL= 'String' PVP = 'String' DY = 'String' TipoPagamento = 'String' DataCom = 'String' DataEx = 'String' Valor = 'String' time = 'String' />
        ))} */}
      </div>
    </div>
  )
}