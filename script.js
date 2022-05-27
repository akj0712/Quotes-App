let realData = ""
let quotesData = ""
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const generate = document.getElementById('generate');
const tweet = document.getElementById('tweet');

const getNewQuotes = () => {
    let ran = Math.floor(Math.random()*1643)
    quotesData = realData[ran]
    quotes.innerHTML = quotesData.text;
    quotesData.author == null
        ? (author.innerHTML = "Anonymous") 
        : (author.innerHTML = quotesData.author);
}
const getQuotes = async () => {
    try{
        const data = await fetch("https://type.fit/api/quotes")
        realData = await data.json();
        getNewQuotes();
    }
    catch(error){
        console.log(error)
    }
}
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`
    window.open(tweetPost)
}
getQuotes()
generate.addEventListener('click', getNewQuotes)
tweet.addEventListener('click', tweetNow)