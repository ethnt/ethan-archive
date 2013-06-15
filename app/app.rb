module Base
  class App < Padrino::Application
    register Padrino::Helpers
    register Padrino::Rendering
    register Padrino::Sprockets

    enable :sessions

    assets = [
      'assets/css',
      'assets/jsc',
      'assets/img'
    ]

    sprockets url: 'assets', minify: (Padrino.env == :production), paths: assets

    configure :production do
      enable :asset_stamp
    end
  end
end
