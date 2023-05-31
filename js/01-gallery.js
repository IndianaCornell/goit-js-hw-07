import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// gallery markap

const gallery = document.querySelector(".gallery");
const pictureLink = document.querySelector(".gallery__link");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" height="200" src="${item.preview}" alt="${item.description}"></img></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// eventListener

gallery.addEventListener("click", openOriginal);

function openOriginal({ target }) {
  event.preventDefault();
  if (target.nodeName !== "IMG") {
    return;
  } else {
    console.log("Hi");
  }
}
