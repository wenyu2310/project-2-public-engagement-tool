const BASE_URL= `${import.meta.env.VITE_FEEDBACK_SERVER_URL}`;
const AIRTABLE_ACCESS_TOKEN = `${import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN}`


const index  = async (formData) => {
    try{
        const res = await fetch(BASE_URL,{

    method: "POST",
    body: JSON.stringify(formData),
    headers: {
        Authorization: `Bearer ${AIRTABLE_ACCESS_TOKEN}`,
        "Content-Type": "application/json", 
    },
});const data = await res.json();
console.log("Response data:", data);

return data;
    }
     catch (err) {
    console.log(err);
}
}

export {index}