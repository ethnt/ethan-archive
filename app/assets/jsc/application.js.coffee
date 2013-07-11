//= require_tree ./lib/vendor
//= require_tree ./lib

covers = [
  [ "/assets/covers/louvre.jpg", "The Louvre in Paris." ]
  [ "/assets/covers/paris.jpg", "Sunset on Paris from the Eiffel Tower." ]
  [ "/assets/covers/eiffel.jpg", "The Eiffel Tower." ]
  [ "/assets/covers/normandy.jpg", "The Normandy coast." ]
  [ "/assets/covers/seine.jpg", "The Seine River in Paris." ]
]

cover = covers[Math.floor(Math.random() * covers.length)]

$(document).ready ->
  $("img.cover-image").attr "src", cover[0]
  $("p.cover-caption").html cover[1]
