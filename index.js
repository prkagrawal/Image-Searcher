var cells = document.getElementById("cells");
document.getElementById("submit").addEventListener("click", onClick);

function onClick() {
  let userInput = document.getElementById("userInput").value;
  fetch(
    `https://pixabay.com/api/?key=15549904-91837366d0693b5b24e8382b1&q=${userInput}&image_type=photo`
  )
    .then(res => res.json())
    .then(data => output(data));

  function output(data) {
    cells.innerHTML = "";
    for (var i = 0; i < 20; i++) {
      var img = document.createElement("img");
      img.src = `${data.hits[i].webformatURL}`;
      img.style.width = `200px`;
      img.style.height = `180px`;

      cells.appendChild(img);
    }
  }
}
