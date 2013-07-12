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

Base::App.controllers :blog do
  get :index do
    render 'blog/index'
  end

  get :post do
    render 'blog/post'
  end
end
