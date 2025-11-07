// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCMEEX1VtNYVDP8TSwT1XQgsPLH7ON_KsHAmee1YLXACmUnv3If51ooQYyChN2sSux9XJZ8dQjQ72BSbSgHCx9BopxCcpmBIs0lBh77nBsiGWmDLdVIfI_KNrOEBzp5KfqoM4OVETgSWYE32wnPmRPRdaF8CQCPMViu5l86fE-Lf5mwa6zuQaCAZFB_LfsMrAo2Xk2gqw9JKM_bKqa9M-H-9Ad5ebONh4NgnA47boCpZe7VccHbjd6HKg99lOmTy_2ObAXQbrHOJ3ShUMarh7Z5Y6KdZHZ75B3yvy31T8eKaDoLBLV6-Er9xZWu9igs';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);