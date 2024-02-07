console.log("hello world");

const message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault();

  const inputField = document.querySelector("input");

  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");

  movieTitle.textContent = inputField.value;

  movieTitle.addEventListener("click", crossOffMovie);

  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  const ulList = document.querySelector("ul");

  ulList.appendChild(movie);

  inputField.value = "";
}

const form1 = document.querySelector("form");

form1.addEventListener("submit", addMovie);

function deleteMovie(event) {
    const listItem = event.target.parentNode;

    const theTitle = listItem.querySelector('span').textContent;

    listItem.remove()

    message.textContent = `${theTitle} deleted!`;

  revealMessage();
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains('checked')) {
    message.textContent = `${event.target.textContent} watched!`
  }else {
    message.textContent = `${event.target.textContent}  added back!`
  }
  revealMessage();
}


function revealMessage(){
    message.classList.remove('hide');
    setTimeout(function() {
        message.classList.add('hide');
    }, 1000)

}