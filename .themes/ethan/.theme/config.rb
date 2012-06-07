require "susy"

environment = :development

http_path = "/"
css_dir = "css"
sass_dir = "css/src"
images_dir = "img"
javascripts_dir = "jsc"

if environment == :production
  output_style = :compressed
else
  output_style = :expanded
end