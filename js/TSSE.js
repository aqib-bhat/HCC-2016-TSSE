// Method which gets called when the preferences are submitted on the TSSE Home Page
function preferenceSubmitted() {
  $('#searchResults').attr("style","display:block;");
}

function compareNow() {
  window.location='TSSE-Final_Comparisons-page.html';
}

function buyNow() {
  alert('You will be taken to source website\'s payment page!');
  window.location='https://www.amazon.com/gp/cart/view.html/ref=nav_cart';
}
