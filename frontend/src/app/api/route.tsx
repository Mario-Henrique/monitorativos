import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
    message: string;
    code: string;
}

export async function GET(req: NextRequest){
    const time = new Date().toTimeString();
    const code = req.nextUrl.searchParams.get("code");
    
    if (code){
        const responseData: ResponseData = {
            message: time,
            code
        };

        const response = NextResponse.json(responseData);
        response.headers.set('Cache-Control','s-maxage=10, stale-while-revalidate');

        return response;
    }

    return NextResponse.json({error: 'Erro ao recuperar dados.'})
}