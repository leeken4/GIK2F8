const url = 'https://gik2f8-labs.herokuapp.com/books';

/* function getAll() {
    return fetch(url)
        .then((result) => result.json())
        .then((jsonData) => jsonData);
} */

async function getAll() {
    const result = await fetch(url).then((result) => result.json()).catch((e) => e);
    //const jsonData = await result.json();
    return jsonData;
}