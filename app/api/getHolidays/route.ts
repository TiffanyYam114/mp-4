import { NextResponse} from "next/server";

const HOLIDAY_API_KEY = process.env.HOLIDAY_API_KEY;

export async function GET(request: Request): Promise<NextResponse> {

    const { searchParams } = new URL(request.url);

    const country = searchParams.get("country");
    const month = searchParams.get("month");

    if (!country) {
        return NextResponse.json({error: "No country provided"})
    }
    if (!month) {
        return NextResponse.json({error: "No month provided"})
    }

    const res = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=${HOLIDAY_API_KEY}&country=${country}&year=2026&month=${month}`
    );

    if (res.status === 401) {
         return NextResponse.json({error: "Missing or incorrect API key"}, {status:401});
    }
    else if (res.status === 429) {
        return NextResponse.json({error: "Daily request limit reached"}, {status:429});
    }
    else if (res.status === 503) {
        return NextResponse.json({error: "API is currently down"});
    }
    else if (res.status !== 200) {
        return NextResponse.json({error: "Failed to fetch data"})
    }

    const data = await res.json();

    return NextResponse.json(data);
}