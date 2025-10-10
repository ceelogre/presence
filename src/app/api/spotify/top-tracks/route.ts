import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const accessToken = req.headers.get('x-access-token')

        if (!accessToken) {
            return NextResponse.json({ error: 'No access token found' }, { status: 401 });
        }

        // Fetch top tracks from Spotify API
        const url = new URL('https://api.spotify.com/v1/me/top/tracks');
        url.searchParams.set('limit', '5');
        url.searchParams.set('time_range', 'short_term');
        const response = await fetch(url.toString(), {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Spotify API error:', errorData);
            return NextResponse.json({ error: 'Failed to fetch top tracks' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Error fetching top tracks:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
