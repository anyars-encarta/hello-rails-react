module Api
  class MessagesController < ApplicationController
    def random_message
      @random_message = Message.order('RANDOM()').first
      formatted_message = { message: @random_message&.message }
      render json: JSON.pretty_generate(formatted_message)
    end
  end
end
