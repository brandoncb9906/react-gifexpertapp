//const API_KEY = 'usX1dos7z2PldIX4Bp9CaKpAu6rBRy0g';
export const getGifts = async (category) => {

    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=usX1dos7z2PldIX4Bp9CaKpAu6rBRy0g`
    const resp = await fetch(URL);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return (
            {   
                id: img.id,
                title: img.title,
                // El signo de pregunta es para ver si 
                // trae la data entonces la usa
                url: img.images?.downsized_medium.url
            }
        )
    })
    console.log(gifs)
    return gifs;
}