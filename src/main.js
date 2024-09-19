const bodySelect = document.querySelector('body');
const firstHtml = `<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
</div>`;

bodySelect.insertAdjacentHTML('afterbegin', firstHtml);
const loader = document.querySelector('.loader');
loader.style.display = 'none';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.galleryEl a', {
  caption: true,
  captionDelay: 250,
  captionsData: 'alt',
});

import { fetchData } from './js/pixabay-api.js';
import { renderData } from './js/render-functions.js';
import iconUrl from './img/error.svg';

const fetchUserForm = document.querySelector('form');
const userList = document.querySelector('.galleryEl');

fetchUserForm.addEventListener('submit', event => {
  event.preventDefault();
  userList.innerHTML = '';

  const thisInputSearch = event.currentTarget.elements.search.value
    .toLowerCase()
    .trim();

  if (!thisInputSearch) {
    return;
  }

  fetchData(thisInputSearch)
    .then(comingsImg => {
      if (comingsImg.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching <br> your search query. Please try again!',
          messageColor: '#000',
          messageSize: '18px',
          messageLineHeight: '20px',
          backgroundColor: 'rgb(255,153,102)',
          position: 'topRight',
          iconUrl: iconUrl,
          imageWidth: 30,
        });
        const iziToastElStyle = document.querySelector('.iziToast');
        iziToastElStyle.style.borderRadius = '10px';
        iziToastElStyle.style.overflow = 'hidden';
      } else {
        loader.style.display = 'block';
        renderData(comingsImg.hits, userList);

        gallery.refresh();
        const images = userList.querySelectorAll('img');
        let loadedImagesCount = 0;

        images.forEach(img => {
          if (img.complete) {
            loadedImagesCount++;
            if (loadedImagesCount === images.length) {
              loader.style.display = 'none';
            }
          } else {
            img.addEventListener('load', () => {
              loadedImagesCount++;
              if (loadedImagesCount === images.length) {
                loader.style.display = 'none';
              }
            });
          }
        });
      }
    })
    .catch(error => {
      iziToast.show({
        message: `Sorry, ${error}. Please try again!`,
        messageColor: '#000',
        messageSize: '18px',
        messageLineHeight: '20px',
        backgroundColor: 'rgb(255,153,102)',
        position: 'topRight',
      });
      loader.style.display = 'none';
      const iziToastElStyle = document.querySelector('.iziToast');
      iziToastElStyle.style.borderRadius = '10px';
      iziToastElStyle.style.overflow = 'hidden';
    });
});
