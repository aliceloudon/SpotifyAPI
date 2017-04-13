var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=fish&type=album'
  makeRequest(url, requestComplete)
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);
  populateList(albums);
}

var populateList = function(albums){
  var div = document.querySelector('#albums')
  var ul = document.createElement('ul')

  albums.albums.items.forEach(function(album){
    var li = document.createElement('li')
    li.innerText = album.name
    ul.appendChild('li')      
    div.appendChild('ul')
  }) 

}

window.onload = app