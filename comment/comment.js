import '../auth/user.js';
import { createComment, getPost } from '../fetch-utils.js';
import { renderComment } from '../render-utils.js';

const errorDisplay = document.getElementById('error-display');
const postSubject = document.getElementById('post-subject');
const postContent = document.getElementById('post-content');
const addCommentForm = document.getElementById('add-comment-form');
const commentList = document.getElementById('comment-list');
// const postImage = document.getElementById('post-image');

let error = null;
let post = null;

window.addEventListener('load', async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const response = await getPost(id);
    error = response.error;
    post = response.data;
    console.log('line22',post.comment);

    if (error) {
        displayError();
    }

    if (!post) {
        location.assign('/');
    } else {
        displayPost();
        displayComments();
    }
});

addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addCommentForm);
    const commentInsert = {
        post_id: post.id,
        content: formData.get('text'),
    };

    const response = await createComment(commentInsert);
    error = response.error;
    const comment = response.data;

    if (error) {
        displayError();
    } else {
        addCommentForm.reset();
        post.comment.unshift(comment);
        console.log(post.comment);
        displayComments();
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

function displayComments() {
    commentList.innerHTML = '';
    for (const comment of post.comment) {
        const commentEl = renderComment(comment);
        commentList.append(commentEl);
    }
}

