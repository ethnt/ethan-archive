class Base < Thor
  desc "compile", "Compile Coffee and SCSS."
  def compile
    `compass compile`
    `coffee --compile --output jsc/ jsc/src/`
  end

  desc "watch", "Watch Coffee and SCSS for changes."
  def watch
    `compass watch &`
    `coffee --compile --output jsc/ jsc/src/ --watch &`
  end
end