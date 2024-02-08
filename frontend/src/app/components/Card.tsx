'use client'
const time = new Date().toTimeString();

export const Card = (props: Ativo) =>(
        <div data-tipo={props.type} className="card" onClick={() => cardClicked(`${props.code}`)}>
          <p className="card-title">{props.code} <br/> {props.cotacao}</p>
          <p className="card-text">
              <p><strong>P/L:</strong> {props.PL}</p>
              <p><strong>P/VP:</strong> {props.PVP}</p>
              <p><strong>DY:</strong> {props.DY}</p>
              <p><strong>Total Ativos:</strong> 0</p>
              <p><strong>Preço Médio:</strong> {props.time}</p>
          </p>
          <span className="time">{time}</span>
        </div>
)

function cardClicked(code: String){
  window.location.href = `../public/pages/ativo_detalhes.html?code=${code}`
}