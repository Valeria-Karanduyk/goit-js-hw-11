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
