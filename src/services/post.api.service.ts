const postUrl = import.meta.env.VITE_DUMMY_API_URL;

export const getPosts = async () => {
    return await fetch(`${postUrl}/posts`)
        .then(value => value.json())
}