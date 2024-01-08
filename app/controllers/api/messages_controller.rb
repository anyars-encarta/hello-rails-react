module Api
    class MessagesController < ApplicationController
      def random_message
        @random_message = Message.order('RANDOM()').first
        render json: { greeting: @random_message&.message }
      end
    end
end
