export default function Ativo({params}: {params: {code: string}}){
    return (
        <h1>{params.code}</h1>
    )
}