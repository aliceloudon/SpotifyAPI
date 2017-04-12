window.onload = function(){
  // Set up album list model
  var albumList = new AlbumList('https://api.spotify.com/v1/search?q=cats&type=album')
  albumList.getData()

  // Set up views (if any)
}