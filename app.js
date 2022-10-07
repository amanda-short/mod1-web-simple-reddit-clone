/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPost } from '/fetch-utils.js';
import { renderPost } from '/render-utils.js';

/* Get DOM Elements */
const postList = document.getElementById('post-list');
const getComment = document.getElementById('comment-list');
const errorDisplay = document.getElementById('error-display');

/* State */
let error = null;
let posts = [];
let comment = [];
console.log('post');
/* Events */
window.addEventListener('load', async () => {
    const response = await getPost();
    error = response.error;
    posts = response.data;

    if (error) {
        displayError();
    }

    if (posts) {
        displayPost();
    }
});

/* Display Functions */

function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

function displayPost() {
    postList.innerHTML = '';

    for (const post of posts) {
        const postEl = renderPost(post);
        postList.append(postEl);
    }
}

