Base::App.controllers do
  get :index do
    render :index
  end

  get :profile do
    render :profile
  end

  get :work do
    render :work
  end
end
