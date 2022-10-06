/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const getPost = document.getElementById('post-list');
const getComment = doument.getElementById('comment-list');
const errorDisplay = document.getElementById('error-display')

/* State */
let error = null;
let post = [];
let comment = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getPost();
    error = response.error;
    post = response.data;

    if (error) {
        displayError();
    }

    if (post) {
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

