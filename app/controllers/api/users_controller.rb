class Api::UsersController < ApplicationController
    def create
        @user = User.new(users_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
    end

    def show
        @user = User.find_by(id: params[:id])
        render "api/users/show"
    end

    private

    def users_params
        params.require(:user).permit(:email, :password)
    end
end