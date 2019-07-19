// alert("Welcome to Urban Outfitters!");
chrome.runtime.onMessage.addListener(function (request) {
  alert(request)
})
