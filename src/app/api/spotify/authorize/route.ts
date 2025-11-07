import { NextResponse } from "next/server";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const redirect_uri = process.env.NEXT_PUBLIC_SERVER_URL + '/api/spotify/callback'
const scope = 'user-read-private user-read-email user-top-read'

const generateRandomString = (length: number) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }
  
const sha256 = async (plain: string) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return globalThis.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input: ArrayBuffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
}

export async function GET() {
    const codeVerifier = generateRandomString(64);
    const state = generateRandomString(16);
    
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);
    
    const url = new URL('https://accounts.spotify.com/authorize');
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('client_id',String(client_id))
    url.searchParams.set('scope', scope);
    url.searchParams.set('redirect_uri', redirect_uri);
    url.searchParams.set('state', state + '|' + codeVerifier);
    url.searchParams.set('code_challenge', codeChallenge);
    url.searchParams.set('code_challenge_method', 'S256');
    
    console.info("spotify authorize url: ", url.toString())
    const response = NextResponse.redirect(url.toString());

    return response;
}