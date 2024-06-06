export async function getData() {
    try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
        const data = await response.json();
        return data.data;
        
    } catch (error) {
        console.error('Error fetching Countries Data', error);
        throw error;
    }
}