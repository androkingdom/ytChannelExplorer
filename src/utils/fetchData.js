// This utility function fetches data from a given URL and handles errors gracefully.
// It returns the parsed JSON data or null in case of an error

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export { fetchData };