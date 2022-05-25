const form = document.forms['form']
let currentImage = document.querySelector('#current-image')
let currentVideo = document.querySelector('#current-video')
let explanation = document.querySelector('#explanation')
let title = document.querySelector('#info-title')
let date;

const requestUser = (date) => {
    let requestApi = new XMLHttpRequest

    requestApi.open('GET', `https://api.nasa.gov/planetary/apod?api_key=c1KBfL1ufPTGeP9VXEPI1i6NaBQMSxG34BO9qMhC&date=${date}`)

    requestApi.send()

    requestApi.addEventListener("load", ()=>{
        requestApi = JSON.parse(requestApi.responseText)

        title.style.display = 'block'
        title.innerText = `${requestApi.title}`

        if (requestApi.media_type === 'image'){
            currentImage.style.display = 'block' 
            currentVideo.style.display = 'none'
            currentImage.src = `${requestApi.url}`
        } 
        else {
            currentVideo.style.display = 'block'
            currentImage.style.display = 'none'
            currentVideo.src = `${requestApi.url}`
        }

        explanation.style.display = 'block'
        explanation.innerText = `${requestApi.explanation}`
    })

}

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    date = form[0].value
    requestUser(date)
    
})
