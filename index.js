/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

header.addEventListener('click', (event) => {
    // console.log('you clicked this!');
    toggleColor(document.querySelector("h1#header"));
});


/***** Deliverable 2 *****/
header.style.color = "green"

// when a user clicks the like button, the 'Likes' count increases by 1
// event listener on the 'like' button --> 'click'
const likeButton = document.querySelector('.like-button')

likeButton.addEventListener('click', (event) => {
    plusOneLike()
    
});

function plusOneLike() {
    traveler.likes = traveler.likes + 1
    likes.textContent = `${traveler.likes} Likes`
}

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`

const form = document.querySelector('#new-animal-sighting-form')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event);
    const inputFieldOne = event.target[0].value
    const inputFieldTwo = event.target[1].value
    const inputFieldThree = event.target[2].value
    const inputFieldFour = event.target[3].value

    const lastId = traveler.animalSightings[traveler.animalSightings.length - 1].id

    const newSighting = {
        id: lastId + 1,
        travelerId: 1,
        species: inputFieldOne,
        photo: inputFieldThree,
        link: inputFieldTwo,
        description: inputFieldFour
    }

    traveler.animalSightings.push(newSighting)

    renderAnimalSightingPost(newSighting)
    form.reset()
    event.target.reset()
})

/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "purple"
    } else {
        element.style.color = "green"
    }
}

/***** Deliverable 2 *****/

/***** Deliverable 3 *****/
