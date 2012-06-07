(function() {
  $(document).ready(function() {
    return $("article.video header").fitVids();
  });
  $("audio,video").mediaelementplayer();
}).call(this);
