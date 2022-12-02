const bookList = document.querySelector("#list")
const showPanel = document.querySelector("#show-panel")
const books = "http://localhost:3000/books"

const handleClick = (book) => {
    const bookImg = document.createElement("img")
    showPanel.appendChild(bookImg);
    bookImg.src = books.img_url
    bookImg.alt = books.title
    const showBookInfo = {
        thumbnail: bookThumbnail,
        description: bookDescription,
        likedBy: userLikes
    }
    displayBooks(showBookInfo)
}

const displayBooks = (bookTitles) => {
    const bookLi = document.createElement("li")
    bookLi.textContent = bookTitles.title 
    bookList.appendChild(bookLi)
    bookLi.addEventListener("click", () => handleClick(bookTitles))
}

const fetchData = () => {
    fetch("http://localhost:3000/books")
       .then((response) => response.json())
       .then(books => books.forEach(displayBooks))
       .catch((error) => alert(error))
}

fetchData()






































// document.addEventListener("DOMContentLoaded", function() {
//     // Deliverable one
//     // Get book data! - DONE
//     // Get titles of book
//     //The data is an array of objects containing key:value pairs

//     const bookList = document.querySelector("#list")
//     //console.log(bookList) to check

// //Fetch requests are lengthy and therefore fetch is ASYNCHRONOUS, to save time
//     fetch("http://localhost:3000/books") //This is the process that kicks off our request to the server! It then returns a promise which is either pending, fulfilled or rejected! 
//     .then((response) => response.json()) //This code is only going to run once the fetch request is complete! Then it tells it what to do. Essentially a callback function!
// //^^This .then is taking a callback function (response) and returning the response turned into a useable format
//     .then((data) => {
//         //console.log(data)); TO CHECK YOU GOT YOUR DATA!
//         data.forEach((bookObj) => {
//             //The const li will create a new li element per each book
//             const li = document.createElement("li")
//             console.log(li)
//             li.textContent = bookObj.title
//             bookList.append(li)
//             //console.log(bookObj);
//             console.log(bookObj.title); //TO CHECK YOU GOT YOUR DATA!
//             const btn = document.createElement("button") 
//             btn.textContent = "like"
//             li.append(btn)
//             //console.log(btn); 
            
                

//         }) //end of foreach function
//     })

// });//End of dom content loader




