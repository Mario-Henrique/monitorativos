import { NextRequest, NextResponse } from "next/server";
import { AssetInfo, searchAction } from "./webscrapping";

type ResponseData = {
    data: AssetInfo;
    isSuccess: boolean;
}

export async function GET(req: NextRequest){
    try{
        const code = req.nextUrl.searchParams.get("code");
        
        if (code){
            const data = await searchAction(code);
            const responseData: ResponseData = {
                data,
                isSuccess: true
            };

            const response = NextResponse.json(responseData);
            response.headers.set('Cache-Control','s-maxage=900, stale-while-revalidate');
            response.headers.set('X-Async-Storage','requestAsyncStorage');

            return response;
        }
    } catch(err) {
        return NextResponse.json({data: null, isSuccess: false})
    }

}