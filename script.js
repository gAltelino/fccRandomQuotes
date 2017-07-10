$(document).ready(function(){
  newQuotes();
})

function newQuotes(){
     //Source of the quotes
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: 'jsonp',
    data:{
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    }
  })
  .done(substituteQuotes)
};  

//If sucess
function substituteQuotes(jsonp){
  $("#quotes").html(JSON.stringify(jsonp.quoteText));
  $("#author").html(JSON.stringify(jsonp.quoteAuthor));
}  

function twitQuote(){

    $("#twitterButton").attr("href",'https://twitter.com/intent/tweet?text=' + $('#quotes').text() + '  ' + $('#author').text())
    $("#twitterButton").attr("target","_blank")
      
}