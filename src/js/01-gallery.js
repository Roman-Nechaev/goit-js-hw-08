// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');
galleryListRef.addEventListener('click', onOpenModal);

const galleryItem = creatGalleryMark(galleryItems);
galleryListRef.insertAdjacentHTML('beforeend', galleryItem);

function creatGalleryMark(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
            <a  class="gallery__item" 
            href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}" />
          </a>
  `;
    })
    .join('');
}

function onOpenModal(event) {
  event.preventDefault();
}

var onGallerySlider = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: `250`,
});
