import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    const error = searchParams.get('error')
    if (error) {
        return new Response(
            `
            <html>
            <body>
            <h1>Sorry, you need to grant us access to continue</h1>
            <p>If you did this on purpose, worry not, this window will close in a few seconds. If it was by mistake, click on login with spotify again.</p>
            <script>
            if (window.opener) {
            
                window.setTimeout(
                 () => window.close()
                , 20000)
            } else {
             window.location.href='/'
             }
            </script>
            </body>
            </html>
            `,
            {
                status: 401,
                headers: { 'Content-Type': 'text/html' }
            }
        )

    }

    // Extract codeVerifier from state parameter (format: "state|codeVerifier")
    const codeVerifier = state?.split('|')[1]

    if (!codeVerifier) {
        return NextResponse.redirect(new URL('/', req.url), { status: 302 })
    }

    let response: Response | undefined
    try {
        const url = new URL('https://accounts.spotify.com/api/token')
        const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
            grant_type: 'authorization_code',
            code: code || '',
            redirect_uri: process.env.NEXT_PUBLIC_SERVER_URL + '/api/spotify/callback',
            code_verifier: codeVerifier
        })
    }
    response = await fetch(url, payload)
    } catch (error) {
        console.error('Spotify callback error: ', error)
        return NextResponse.redirect(new URL('/', req.url), { status: 302 })
    }
    if (!response) {
        throw new Error('Failed to fetch Spotify callback')
    }
    const data = await response.json()
    const res = NextResponse.redirect(new URL('/work', req.url))
    res.cookies.set('spotify_access_token', data.access_token || '', {
        httpOnly: true, // not exposed to the client
        secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: data.expires_in || 3600
    })
    
    res.headers.set('Content-Type', 'text/html')
    return new Response(
        `<html>
         <body>
           <script>
             if (window.opener) {
               window.opener.postMessage({type: 'SPOTIFY_AUTH_SUCCESS', data: ${JSON.stringify(data)}}, '*')
               window.close()
             } else {
              window.location.href = '/work'
              }
            </script>
        </body>
        </html>
        `, {
            status: 200,
            headers: res.headers
        }
    )
}