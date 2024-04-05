let createBtn = document.querySelector("#create_btn");
let notesContainer = document.querySelector(".notes_container");
let notes = document.querySelector("#notes");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()

function UpdateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let notes_box = document.createElement("p");
  let img = document.createElement("img");
  notes_box.setAttribute("contenteditable", "true");
  notes_box.className = "notes";
  img.src = "delete.png";
  img.id = "delete_icon";

  notesContainer.appendChild(notes_box).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    UpdateStorage();
  } else if (e.target.tagName === "p") {
    notes = document.querySelector("#notes");
    notes.forEach((e) => {
      e.onkeyup = function () {
        UpdateStorage();
      };
    });
  }

  document.addEventListener('keydown', event => {
    if(event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
  })
});
