'use client';
import { createContext, useContext, useState } from "react";

export type Ativo = {
    id: number;
    code: string;
    type: string;
    cotacao: string;
    PL: string;
    PVP: string;
    DY: string;
    TipoPagamento: string;
    DataCom: string;
    DataEx: string;
    Valor: string;
    time: string;
};

type AtivoContext = {
    ativos: Ativo[];
    addAtivo: (ativo: Ativo) => void;
    removeAtivo: (ativoId: number) => void;
};

const time = new Date().toTimeString();

const AtivoContext = createContext({} as AtivoContext);

const AtivoProvider = ({ children }: { children: React.ReactNode }) => {
    const [ativos, setAtivos] = useState<Ativo[]>([
        {
            id: 1,
            code: "MXRF11",
            type: "fii",
            cotacao: "10,00",
            PL: "",
            PVP: "String",
            DY: "String",
            TipoPagamento: "String",
            DataCom: "String",
            DataEx: "String",
            Valor: "String",
            time
        }
    ]);

    const addAtivo = (ativo: Ativo) => {
        setAtivos([...ativos, ativo]);
    };

    const removeAtivo = (ativoId: number) => {
        setAtivos(ativos.filter((ativo) => ativo.id !== ativoId));
    };

    return (
        <AtivoContext.Provider value={{ativos, addAtivo, removeAtivo}}>
            {children}
        </AtivoContext.Provider>
    );
};

export const useAtivos = () => {
    const context = useContext(AtivoContext);
    if (!context){
        throw new Error('useAtivos deve ser usado com um AtivoProvider');
    }

    return context;
};

export { AtivoContext, AtivoProvider };