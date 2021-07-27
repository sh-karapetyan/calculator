import http from "../http"

export const calculate = async body => {
    return await http(`calculate`, {
        method: 'POST',
        body: JSON.stringify(body)
    })
}
