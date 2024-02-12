import searchAction from "@/app/api/webscrapping";

type CardDataType = {
    code: string;
}

export default async function CardData({code}: CardDataType){
    const time = new Date().toTimeString();
    const props = await searchAction(code);

    return (
        <div data-tipo={props.type} className="card">
            <p className="card-title">{props.code} <br/> {props.cotacao}</p>
            <div className="card-text">
                <p><strong>P/L:</strong> {props.PL}</p>
                <p><strong>P/VP:</strong> {props.PVP}</p>
                <p><strong>DY:</strong> {props.DY}</p>
                <p><strong>Total Ativos:</strong> 0</p>
                <p><strong>Preço Médio:</strong> String</p>
            </div>
            <span className="time">{time}</span>
        </div>
    )
}