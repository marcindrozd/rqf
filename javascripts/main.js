$(document).ready(function() {
  getQuote();
  
  $('#get-quote').click(function() {
    getQuote();
  }); 
});

function getQuote() { $.ajax({
  url: 'http://api.forismatic.com/api/1.0/',
  type: 'GET',
  jsonp: 'jsonp',
  dataType: 'jsonp',
  data: { method: 'getQuote', lang: 'en', format: 'jsonp' }
  })
  .done(function(msg) { 
    var quote = JSON.stringify(msg);
    $('#quote-text').text(msg.quoteText);
    $('#quote-author').text(msg.quoteAuthor);
  })
 }