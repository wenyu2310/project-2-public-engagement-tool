const BASE_URL= `${import.meta.env.VITE_PARK_SERVER_URL}`;
const AIRTABLE_ACCESS_TOKEN = `${import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN}`

const index = async () => {
    // console.log(BASE_URL)
    try{
        const res = await fetch(BASE_URL,{
            headers: {
                Authorization: `Bearer ${AIRTABLE_ACCESS_TOKEN}`,
            }            
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export {index}
