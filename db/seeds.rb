# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Product.destroy_all

user = User.create!(
    email: "caveman@gmail.com",
    password: "123456password"
)

product1 = Product.create!(
    name: "product1",
    price: 1.00,
    description: "description1"
)

product2 = Product.create!(
    name: "product2",
    price: 2.00,
    description: "description2"
)

product3 = Product.create!(
    name: "product3",
    price: 3.00,
    description: "description3"
)