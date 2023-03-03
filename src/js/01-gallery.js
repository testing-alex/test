import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryListRef = document.querySelector(".gallery");

const makeGalleryListMarkup = ({ preview, original, description }) => {
  return `
   
      <a class="gallery__item" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
     
  `;
};

const makeGalleryListElement = galleryItems.map(makeGalleryListMarkup).join("");
galleryListRef.insertAdjacentHTML("beforeend", makeGalleryListElement);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
