Padrino.configure_apps do
  set :protection, true
  set :protect_from_csrf, true
end

Padrino.mount('Base::App', :app_file => Padrino.root('app/app.rb')).to('/')
