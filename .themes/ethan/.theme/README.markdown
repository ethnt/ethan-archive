# Base

This is my port of the excellent [HTML5 Boilerplate](http://html5boilerplate.com/). I've added [Compass](http://compass-style.org) (with [Susy](http://susy.oddbird.net/)) and [CoffeeScript](http://coffeescript.org).

### Installation

You'll need the following ingredients.

1. Get Ruby 1.9.3 (via RVM, ruby-env or what have you).
2. Get Bundler (`gem install bundler`).
3. Install the dependencies (`bundle install`).

### Usage

To compile the SCSS and CoffeeScript, you run the Thor command provided.

    bundle exec thor base:compile

To watch the SCSS and CoffeeScript for changes, you can run one of the following two commands (though Guard is preferred).

    bundle exec guard
    bundle exec thor base:watch