
const COLOR_API = 'https://www.thecolorapi.com'

const SCHEME_ENDPOINT = '/scheme'
 
const form = document.getElementById('form')

let data = {}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    data = Object.fromEntries(formData.entries())

    const {color, mode} = data

    fetchColorScheme(color, mode)
        .then(colors => {
            // Do something inside .....
        })

})


function fetchColorScheme(color, mode, count = 5){
    const QUERY = `?hex=${color.slice(1)}&mode=${mode}&count=${count}`
    return fetch(COLOR_API + SCHEME_ENDPOINT + QUERY)
        .then(response => response.json())
        .then(data => {
            return data.colors.map(item => item.hex.value)
        })
        .catch(error => {
            console.error(`Error fetching scheme: ${error}`)
            return []
        })
}