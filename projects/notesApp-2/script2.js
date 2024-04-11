let createBtn = document.querySelector("#create_btn");
let notesContainer = document.querySelector(".notes_container");


function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes_div");
}
showNotes()

function UpdateStorage() {
  localStorage.setItem("notes_div", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  const notes_div = document.createElement("div");
  notes_div.classList.add("notes_div");

  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const copyBtn = document.createElement("a");
  copyBtn.href = "#";
  copyBtn.id = "copy";
  copyBtn.className = "copy";
  copyBtn.innerHTML = `<i class="ri-file-copy-line"></i>`;

  const deleteBtn = document.createElement("a");
  deleteBtn.href = "#";
  deleteBtn.id = "delete";
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;

  nav.appendChild(copyBtn);
  nav.appendChild(deleteBtn);

  const notes = document.createElement("p");
  notes.classList.add("notes");
  notes.setAttribute("contenteditable", "true");

  notes_div.appendChild(nav);
  notes_div.appendChild(notes);

  notesContainer.appendChild(notes_div);
});


notesContainer.addEventListener("click", (e) => {
  if (e.target.id == "delete") {
    e.target.parentElement.parentElement.remove();
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
