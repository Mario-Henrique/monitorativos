import { headers } from 'next/headers';

type CardDataType = {
    code: string;
}

type Props = {
    props: {
        host: string
    }
}

const baseUrl = headers().get('host');

export default async function CardData({code}: CardDataType){
    const time = new Date().toTimeString();
    // const response = await fetch(`${baseUrl}/api?code=${code}`);
    const response = await fetch(`https://${baseUrl}/api?code=${code}`);
    const props = await response.json();

    if(props.isSuccess){
        return (
            <div data-tipo={props.data.type} className="card">
                <p className="card-title">{props.data.code} <br/> {props.data.cotacao}</p>
                <div className="card-text">
                    <p><strong>P/L:</strong> {props.data.PL}</p>
                    <p><strong>P/VP:</strong> {props.data.PVP}</p>
                    <p><strong>DY:</strong> {props.data.DY}</p>
                    <p><strong>Total Ativos:</strong> 0</p>
                    <p><strong>Preço Médio:</strong> String</p>
                    <p><strong>Próx. Pagamento:</strong> {props.data.DataEx}</p>
                </div>
                <span className="time">{time}</span>
            </div>
        )
    } else {
        return <h2>Error</h2>
    }
}