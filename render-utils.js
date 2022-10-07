export function renderPost(post) {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = `/comment/?id=${post.id}`;

    // const img = document.createElement('img');
    // img.src = pet.image_url;

    const h2 = document.createElement('h2');
    h2.textContent = post.subject;

    const p = document.createElement('p');
    p.textContent = post.content;

    a.append(h2, p);
    li.append(a);

    return li;
}

export function renderComment(comment) {
    const li = document.createElement('li');

    li.textContent = comment.text;

    return li;
}