const menu = document.querySelector('.menu')
const body = document.querySelector('body')


let AnimalChecked = null
let TimeChecked = null

let imageContainer = []

let seconds = 0
let minutes = 0

let counter = 0

let status = false

let interval = null

function cronometer() {
    //Time part
    if (minutes !== parseInt(TimeChecked)) {
        if (seconds % 10 === 0) {
            console.log('10 seconds passed')
            counter++
            body.style.backgroundImage = `url(${imageContainer[counter]})`
            // body.style.backgroundSize = 'contain'
        }

        if (seconds / 59 === 1) {
            seconds = 0
            minutes++
        } else {
            seconds++
        }
        console.log(`Time is ${minutes}:${seconds}`)
    } else {
        location.reload();
        // resetEverything()
    }
}


function startCronometer() {

    console.log('START!!')
    menu.classList.add('hidden')

    AnimalChecked = document.querySelector('input[name="animal"]:checked').value
    TimeChecked = document.querySelector('input[name="time"]:checked').value
    console.log(AnimalChecked)
    console.log(TimeChecked)

    let photo = axios.get(`https://api.unsplash.com/search/photos?per_page=30&orientation=landscape&query=${AnimalChecked}&client_id=tpXNz4_DW6p1f-bHZb0gjKHxZXs69K2NSTw7MIZw0-Y`)
        .then(res => {
            for (result of res.data.results) {
                imageContainer.push(result.urls.regular)
            }
            console.log(imageContainer)
            status = true
            if (status === true) {
                interval = window.setInterval(cronometer, 1000)
            }
        })

}

// function resetEverything() {
//     status = false
//     seconds = 0
//     minutes = 0
//     interval = null
//     counter = 0
//     imageContainer = []
//     menu.classList.remove('hidden')
// }


