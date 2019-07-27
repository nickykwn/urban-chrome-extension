document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.onMessage.addListener(function (request) {
    alert(request)
  })

  function incrementWomen(){
    const womenPoints = 0;
    womenPoints = womenPoints++;
    chrome.storage.sync.set({key: womenPoints}, function(){
      console.log("womenPoints is set to " + womenPoints);
    })
  }

  var women = $('div div div div div div div div div span div a')
  if(women.slice(13,18)===("Women")){
    women.addListener('click', incrementWomen)
  };
}, false);
