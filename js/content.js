// alert("Welcome to Urban Outfitters!");
chrome.runtime.onMessage.addListener(function (request) {
  alert(request)
})

function incrementWomen(){
  let womenPoints = 0;
  womenPoints+++;
  chrome.storage.sync.set({key: womenPoints}, function(){
    console.log("womenPoints is set to " + womenPoints);
  })
}

var women = $('div div div div div div div div div span div a').attr('data-ga-event-action')
women.addEventListener('click', function(){
  incrementWomen();
})
