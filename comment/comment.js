import '../auth/user.js';
import { getPost } from '../fetch-utils.js';

const errorDisplay = document.getElementById('error-display');
const postSubject = document.getElementById('post-subject');
const postContent = document.getElementById('post-content');
// const postImage = document.getElementById('post-image');
// const addCommentForm = document.getElementById('add-comment-form);
// const commentList = document.getElementById('comment-list');

let error = null;
let post = null;

window.addEventListener('load', async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const response = await getPost(id);
    error = response.error;
    post = response.data;

    if (error) {
        displayError();
    }

    if (!post) {
        location.assign('/');
    } else {
        displayPost();
    }
});

//display functions//
function displayError() {
    if (error) {
        // console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

function displayPost() {
    postSubject.textContent = post.subject;
    postContent.textContent = post.content;
    // postImage.src = post.image_url;
    // postImage.alt = `${post.image} image`;
}

