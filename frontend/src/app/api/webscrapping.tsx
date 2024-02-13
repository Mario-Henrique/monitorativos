import axios from "axios";
import * as cheerio from "cheerio";

export type AssetInfo = {
    code: String,
    type: String,
    cotacao: String,
    PL: String,
    PVP: String,
    DY: String,
    TipoPagamento: String,
    DataCom: String,
    DataEx: String,
    Valor: String,
    time: string
}

export async function searchAction(code: String): Promise<AssetInfo>{
    const time = new Date().toTimeString();
    
    try{
        const response = await axios.get(`https://investidor10.com.br/acoes/${code}/`);
        const selector = cheerio.load(response.data);

        return {
            "code": limparTexto(selector(".name-ticker>h1").first().text()),
            "type": 'fia',
            "cotacao": limparTexto(selector(".value").first().text()),
            "PL": limparTexto(selector("._card-body>span").first().text()),
            "PVP": limparTexto(selector(".vp>._card-body>span").first().text()),
            "DY": limparTexto(selector(".dy>._card-body>span").first().text()),
            "TipoPagamento": limparTexto(selector(".visible-even>.text-center").first().text()),
            "DataCom": limparTexto(selector(".visible-even>td:nth-child(2)").first().text()),
            "DataEx": limparTexto(selector(".visible-even>td:nth-child(3)").first().text()),
            "Valor": limparTexto(selector(".visible-even>td:nth-child(4)").first().text()),
            "time": time
        };
    }catch(err){
        const response = await axios.get(`https://investidor10.com.br/fiis/${code}`);
        const selector = cheerio.load(response.data);
        
        return{
            "code": limparTexto(selector(".name-ticker>h1").first().text()),
            "type": 'fii',
            "cotacao": limparTexto(selector(".value").first().text()),
            "PL": ' - ',
            "PVP": limparTexto(selector(".vp>._card-body>span").first().text()),
            "DY": limparTexto(selector(".dy>._card-body span").first().text()),
            "TipoPagamento": limparTexto(selector(".visible-even>.text-center").first().text()),
            "DataCom": limparTexto(selector(".visible-even>td:nth-child(2)").first().text()),
            "DataEx": limparTexto(selector(".visible-even>td:nth-child(3)").first().text()),
            "Valor": limparTexto(selector(".visible-even>td:nth-child(4)").first().text()),
            "time": time
        };
    }
}

function limparTexto(input: string): string {
    // Remove caracteres de quebra de linha, tabulações e similares
    let textoLimpo = input.replace(/[\r\n\t\v\f]/g, '');

    // Remove caracteres que não são monetários, datas, pontuações ou texto
    // textoLimpo = textoLimpo.replace(/[^\d$€£,.\/\sa-zA-Z0-9]/g, '');

    return textoLimpo;
}