require 'bundler/setup'

require File.expand_path("../octopress.rb", __FILE__)
require File.expand_path("../resume/config/boot.rb", __FILE__)

routes = Padrino::Router.new do
  map(:path => "/", :to => Octopress)
  map(:path => "/resume", :to => Padrino.application)
end

run routes