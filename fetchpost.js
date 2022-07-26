const form = document.getElementById('form')
const url = 'https://jsonplaceholder.typicode.com'

form.addEventListener('submit', event => {
    event.preventDefault()

    const title = document.getElementById('title').value
    const body = document.getElementById('body').value

    fetch(`${url}/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then(data => {
        const results = document.getElementById('results')
        const h2 = document.createElement('h2')

        h2.appendChild(document.createTextNode(`${data.title} & ${data.body}`))
        results.appendChild(h2)
               
    })    
})