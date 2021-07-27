const BASE_URL = 'http://localhost:8000/api/'

export default async function http (url, settings) {
    const response = await fetch(`${BASE_URL}${url}`, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        ...settings
    })

    if (response.ok === false) {
        throw await response.json()
    }

    return await response.json()
}
