const apiKey = "ac1b0b1572524640a0ecc54de453ea9f";
const url = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/${apiKey}/?type=koop&zo=/`;

export default async function search(value: string) {
    const formattedQuery = value.split(" ").join("/");
    console.log("Searching for:", value);
    return (await fetch(`${url}${formattedQuery}`, {
        mode: 'cors'
    })).json();
    
}