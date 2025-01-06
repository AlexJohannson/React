const userUrls = import.meta.env.VITE_DUMMY_API_URL;

export const getUser = async () => {
    return await fetch(`${userUrls}/users`)
        .then(value => value.json())
}