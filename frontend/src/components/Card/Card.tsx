'use client'
import { ReactNode } from "react";

type CardType = {
  children: ReactNode;
  code: string;
}

export const Card = ({children, code}: CardType) =>(
  <div onClick={() => cardClicked(`${code}`)}>
    {children}
  </div>
)

function cardClicked(code: String){
  window.location.href = `../ativo/${code}`
}