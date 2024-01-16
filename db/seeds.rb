# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# Messages
first_message = Message.create(message: 'It is an awesome day')
second_message = Message.create(message: 'What a lovely day')
third_message = Message.create(message: 'It feels good to be alive today')
fourth_message = Message.create(message: 'There is no any day to be happy than today')
fifth_message = Message.create(message: 'Give glory to the Almighty for today')
