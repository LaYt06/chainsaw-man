let leftButton = document.querySelector('.left')
let rightButton = document.querySelector('.right')
let mangaImage = document.querySelector('.manga__image')
let pages = document.querySelector('.pages')

let page = 1
let totalPages = 19


let mangajson = './manga.json'

fetch(mangajson)

.then(response => {
    if (!response.ok) {
        console.error(error)
    }
    return response.json()
})

.then(data => {
    console.log(data)
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }
    function updtePages() {
        mangaImage.src = data[`${page}page`];
        pages.textContent = `${page}/${totalPages}`;
    }

    leftButton.addEventListener('click', () => {
        if (page > 1) {
            page--
            updtePages()
            scrollToTop()
        }
    })

    rightButton.addEventListener('click', () => {
        if (page < totalPages) {
            page++
            updtePages()
            scrollToTop()
        }
    })

    updtePages()
})

.catch(error => {
    console.error(error)
})