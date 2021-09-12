class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create 
        @product = Product.find(params[:product_id])
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422 
        end
    end

    def destroy 
        @product = Product.find(params[:product_id])
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
            render :index
        else
            render json: @review.errors.full_messages, status: 422 
        end
    end

    def update
        @product = Product.find(params[:product_id])
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422 
        end
    end
end