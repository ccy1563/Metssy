class Api::ReviewsController < ApplicationController
    def index

        # find product by wildcard
        @product = Product.find(params[:product_id])

        # find all review for specific product by association
        @reviews = @product.reviews
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
            render :show
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

        private
    def review_params
        params.require(:review).permit(:body, :rating, :product_id, :author_id)
    end
end