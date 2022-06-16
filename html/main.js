const getRequestBtn = document.querySelector('.get-request')
const getJokeBtn = document.querySelector('.get-joke')
const joke = document.querySelector('.joke')
const postRequsetBtn = document.querySelector('.post-request')
const postInp = document.querySelector('.post-inp')

postRequsetBtn.addEventListener('click', () => {
    const postObj = {userInput: postInp.value}


    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(postObj)
    }).then(res => res.json()).then(res => alert(res.answer))
})





getRequestBtn.addEventListener('click', () => {
    fetch('/get').then(res => res.json())
        .then(res => console.log(res))
})

getJokeBtn.addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'Application/json'
        },
    }).then(response => response.json())
        .then(response => joke.innerHTML = response.joke)

})