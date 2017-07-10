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
//If error
function catchError(status, error) {
  console.log("Request Failed: " + status + ", " + error);
  $("#quotes").html("Error");
  $("#author").html("Error");
}

$('#twitterButton').on('click', function twitIt(){
    
    console.log(this);
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + $('#quotes').text() + '  ' + $('#author').text());
    console.log($(this).attr("href", 'https://twitter.com/intent/tweet?text=' + $('#quotes').text() + '  ' + $('#author').text()));
  
})