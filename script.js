'Use strict';
/* Vad ska vi göra här? */
console.log('test');

const searchInput = null;
const bookList = [
{
    id: 1,
    author: 'Charles Dickens',
    title: 'Oliver Twist'
},
{
    id: 2,
    author: 'William Shakespear',
    title: 'Hamlet'
}
];

function handleKeyPress(input){
    /* Ta emot/läsa av värdert i inputfältet
    Skicka värdet till searchBooks
    searchBooks returnerar en filtrerad lista
    Filtrerade listan skickas till en renderBookList
    */
    searchBooks(input)
}

function searchBooks(searchTerm){
    /* Loopa igeonm bookList
    För varje varv i loopen, ta det aktuella elementet (boken)
    Jämför titel med söktermen
    Om söktermen finns någonsatns i titel, lägg till elementet i ny lista (filteredList)
    Returnerar filteredList eller anropar renderBookList?
    */
    const filteredList = [];
    for(let i = 0; i < bookList.length; i++){
        const title = bookList[i].title.toLowerCase();
        if (title.indexOf(searchTerm.toLowerCase) >= 0){
            filteredList.push(bookList[i])
        }
    }
    renderBookList(filteredList);
}

function renderBookList(list){
    /*Element i HTML-listan visas/döljs beroende på listans innehåll*/
    console.log(list);
}

handleKeyPress('e')