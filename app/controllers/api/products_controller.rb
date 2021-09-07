class Api::ProductsController < ApplicationController

    # Just seed database for now, not sure if I need this yet

    # def create 
    #     @product = Product.new(products_params)

    #     if @product.save 
    #         render :show 
    #     else 
    #         render json: @products.errors.full_messages, status: 422
    #     end 
    # end 
    
    def index 
        @products = Product.all
        render: index
    end 

    def show
        @product = Product.find(params[:id])
        render :show
    end

    private 

    # def products_params
    #     params.require(:params).permit(:name, :description, :price)
    # end
end