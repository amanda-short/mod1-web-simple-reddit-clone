const SUPABASE_URL = 'https://rjculjkbxnzyqpcivoed.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqY3VsamtieG56eXFwY2l2b2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwODMzNDIsImV4cCI6MTk4MDY1OTM0Mn0.DUWcM1mff9E9_AQcOX7gxNNaDOjBkSOW-tD5eJkCu1Y';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createPost(post) {
    return await client.from('post').insert(post);
}

export async function getPosts() {
    return await client.from('post').select('*');
}

export async function getPost(id) {
    return await client.from('post').select(`*,comment(*)`).eq('id', id).single();
}

export async function createComment(comment) {
    return await client.from('comment').insert(comment).single();
}


