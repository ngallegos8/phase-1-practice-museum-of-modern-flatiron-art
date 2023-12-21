let currentItem
const commentForm = document.querySelector('#comment-form')
let commentSection = document.querySelector("#comments-section")

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has been fully loaded')
    
})

fetch("http://localhost:3000/current-exhibits")
    .then(response => response.json())
    .then(exhibitsData => {
        showDetails(exhibitsData)
        //functions here
        // showDetails(exhibitsData)
        showDetails(exhibitsData[0])
        createComment(exhibitsData)
        addComment(exhibitsData)
        buyTickets ()
    })


function showDetails(exhibitsData) {
    currentItem = exhibitsData
    console.log(exhibitsData)

    const detailTitle = document.querySelector('#exhibit-title')
    detailTitle.textContent = `${currentItem.title} (${currentItem.artist_name})`

    const detailImage = document.querySelector('#exhibit-image')
    detailImage.src = currentItem.image

    const detailDescription = document.querySelector('#exhibit-description')
    detailDescription.textContent = currentItem.description

    const detailTickets = document.querySelector('#tickets-bought')
    detailTickets.textContent = `${currentItem.tickets_bought} tickets bought`

    // const detailComments = document.querySelector('#comments-section')
    // detailComments.textContent = currentItem.comments

}

function createComment(exhibitsData) {
    let exhibitList = document.querySelector("#comments-section")
    // let createList = document.createElement("ul")
    // exhibitList.appendChild(createList)
    exhibitsData.forEach(exhibit => {
        let commentItem = document.createElement("p")
        commentItem.textContent = exhibit.comments
        exhibitList.appendChild(commentItem)
        commentItem.addEventListener("click", (e) => {
            console.log(exhibit)
            showDetails(exhibit)
        })
    })
}

function addComment(comment) {
    const p = document.createElement('p')
    p.textContent = comment
    commentSection.append(p)
  }

function handleSubmitNewComment(e) {
    e.preventDefault()
    const newComment = e.target[0].value
    addComment(newComment)
    e.target.reset()
  }

commentForm.addEventListener('submit', handleSubmitNewComment)

function buyTickets () {
    let ticketButton = document.querySelector("buy-tickets-button")
    ticketButton.addEventListener("click", (e) => {
        currentItem.tickets_bought =+ 1
        console.log(currentItem)
        showDetails(currentItem)
        // e.targer.reset() //don't need because not an input button
    })


}






































































// const exhibitTitle = document.querySelector('#exhibit-title')
// const ticketsButton = document.querySelector('#buy-tickets-button')
// const ticketsBoughtText = document.querySelector('#tickets-bought')
// const exhibitDescription = document.querySelector('#exhibit-description')
// const commentsSection = document.querySelector('#comments-section')
// const commentForm = document.querySelector('#comment-form')
// const exhibitImage = document.querySelector('#exhibit-image')

// let ticketsBought = 0

// fetch('http://localhost:3000/current-exhibits')
// .then(res => res.json())
// .then(exhibits => displayExhibit(exhibits[0]))

// function displayExhibit(exhibit) {
//   console.log(exhibit)
//   exhibitTitle.textContent = exhibit.title
//   exhibitDescription.textContent = exhibit.description
//   ticketsBoughtText.textContent = `${exhibit.tickets_bought} tickets bought`
//   exhibitImage.src = exhibit.image
//   displayComments(exhibit.comments)
//   ticketsBought = exhibit.tickets_bought
// }

// function displayComments(comments) {
//   comments.forEach( comment => addComment(comment) )
// }

// function addComment(comment) {
//   const p = document.createElement('p')
//   p.textContent = comment
//   commentsSection.append(p)
// }

// function incrementTicketsBought() {
//   ticketsBought += 1
//   ticketsBoughtText.textContent = `${ticketsBought} tickets bought`
// }

// ticketsButton.addEventListener('click', incrementTicketsBought)

// function handleSubmitNewComment(event) {
//   event.preventDefault()
//   const newComment = event.target[0].value
//   addComment(newComment)
//   event.target.reset()
// }

// commentForm.addEventListener('submit', handleSubmitNewComment)
