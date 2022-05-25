let currentImage = $('#current-image')
let currentVideo = $('#current-video')
let explanation = $('#explanation')
let title = $('#info-title')
let errorText = $('#error')
let date;

const requestUser = (date) => {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=c1KBfL1ufPTGeP9VXEPI1i6NaBQMSxG34BO9qMhC&date=${date}`,
        type: 'GET',
        success: (requestApi)=>{
            errorText.css('display', 'none')

            title.css('display', 'block')
            title.html(`${requestApi.title}`)

            if (requestApi.media_type === 'image'){
                currentImage.css('display', 'block')
                currentVideo.css('display', 'none')
                currentImage.attr('src', `${requestApi.url}`)
            } 
            else {
                currentVideo.css('display', 'block')
                currentImage.css('display', 'none')
                currentVideo.attr('src', `${requestApi.url}`)
            }
    
            explanation.css('display', 'block')
            explanation.html(`${requestApi.explanation}`)
        },

        error:(requestApi, status)=>{
            title.css('display', 'none')
            currentImage.css('display', 'none')
            currentVideo.css('display', 'none')
            explanation.css('display', 'none')

            errorText.css('display', 'block')
        }

    })
}

$('#form').submit((event)=>{
    event.preventDefault()
    date = $('#date').val()
    requestUser(date)
    
})