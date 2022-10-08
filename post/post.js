import '../auth/user.js';
import { createPost } from '../fetch-utils.js';

/* Get DOM Elements */
const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');
// const imageInput = document.getElementById('image-input');

/* State */
let error = null;

/* Events */
// imageInput.addEventListener('change', () => {
//     const file = imageInput.files[0];
//     if (file) {
//         preview.src = URL.createObjectURL(file);
//     } else {
//         preview.src = '../assets/image placeholder.jpeg';
//     }
// });

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(postForm);
    
    // const imageFile = formData.get('image');
    // const randomFolder = Math.floor(Date.now() * Math.random());
    // const imagePath = `post/${randomFolder}/${imageFile.name}`;
    // const url = await uploadImage('images', imagePath, imageFile);
    
    const post = {
        subject: formData.get('subject'),
        content: formData.get('content'),
        // image_url: url,
    };
    
    const response = await createPost(post);
    error = response.error;

    if (error) {
        displayError();
    } else {
        location.assign('/');
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
