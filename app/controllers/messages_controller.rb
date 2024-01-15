class MessagesController < ApplicationController
  def index
    @message = Message.order("RANDOM()").first
  end
end
