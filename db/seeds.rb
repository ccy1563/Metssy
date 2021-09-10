# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Product.destroy_all

user = User.create!(
    email: "caveman@gmail.com",
    password: "123456password"
)

otherUser = User.create!(
    email: "ccy1563@gmail.com",
    password: "123456password"
)


product1 = Product.create!(
    name: "Turquoise Ring",
    price: 35.00,
    description: "Genuine Turquoise Ring, Silver Turquoise Ring, Copper Turquoise Ring, Sterling Silver Ring, Blue Ring, Boho Turquoise Ring, Turquoise Ring"
)
file1 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_turquoise.png')
product1.photo.attach(io: file1, filename: 'prod_turquoise.jpg')

product2 = Product.create!(
    name: "Cute Doll",
    price: 3600.00,
    description: "Ready for adoption. Waldorf doll 36cm/14 Waldorf inspired ecofriendly toy Natural fiber doll Soft doll"
)
file2 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_doll.png')
product2.photo.attach(io: file2, filename: 'prod_doll.jpg')

product3 = Product.create!(
    name: "Heart Necklace",
    price: 80.75,
    description: "Heart Necklace N2 • Minimal Necklace, Love Necklace, Dainty Necklace, Everyday Necklace, Friendship, Bridesmaid Gift, Gift For Her"
)
file3 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_heart_necklace.jpg')
product3.photo.attach(io: file3, filename: 'prod_heart_necklace.jpg')

product4 = Product.create!(
    name: "Dog Bracelet",
    price: 10.50,
    description: "Personalized Pet Gifts Custom Pet Portrait Bracelet Women Pet Jewelry For People Dog Mom Gift Bangle Bracelet With Charms Pet Memorial Gift"
)
file4 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_bracelet.jpeg')
product4.photo.attach(io: file4, filename: 'prod_bracelet.jpg')

product5 = Product.create!(
    name: "Garland Necklace",
    price: 20.00,
    description: "Personalized Pet Gifts Custom Pet Portrait Bracelet Women Pet Jewelry For People Dog Mom Gift Bangle Bracelet With Charms Pet Memorial Gift"
)
file5 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_garland_necklace.jpg')
product5.photo.attach(io: file5, filename: 'prod_garland_necklace.jpg')

product6 = Product.create!(
    name: "Homemade penthouse",
    price: 8750000,
    description: "Imagine sipping a morning Earl Grey tea or espresso on your sun-drenched, eastern-facing corner terrace; enjoying a midday lunch in your bright and airy great room; hosting friends and family on your private rooftop sanctuary while savoring a delightful supper cooked on your gas BBQ, and completing your evening by taking in the panoramic sky from your western-facing sunset terrace."
)
file6 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_penthouse.jpg')
product6.photo.attach(io: file6, filename: 'prod_penthouse.jpg')

product7 = Product.create!(
    name: "Homemade Fridge",
    price: 1234.00,
    description: "Clear humidity-controlled crisper drawers keeps fruits and vegetables fresh. Store-More organizational system includes Gallon Door storage. Full-width freezer shelf gives you more usable space to organize and store more")
file7 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_fridge.jpg')
product7.photo.attach(io: file7, filename: 'prod_fridge.jpg')

product8 = Product.create!(
    name: "Aruna Side Chair",
    price: 219.99,
    description: "This classic and traditional style accent chair with pleated details is the perfect pick for small space. Whether drawn up to your dining table or rounding out your living room with an extra seat, a small side chair like this is a great option wherever you need it. Made with premium velvet fabric,comfortable for skin touch. High-density foam filling with a solid and manufactured wood frame provide comfort and support.The slender polished gold metal legs bring the modern design,and add to the timeless fashion of this piece."
)
file8 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_chair.jpeg')
product8.photo.attach(io: file8, filename: 'prod_chair.jpg')

product9 = Product.create!(
    name: "Colorful Dog Bowls",
    price: 15.99,
    description: "Personalized Dog Bowls Dog Gift Pet Bowls Personalized Cat Bowl Dog Food Bowls Pet Food Bowl Pet Water Bowls Pet Accessory Ceramic Dog Bowl"
)
file9 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_bowl.jpg')
product9.photo.attach(io: file9, filename: 'prod_bowl.jpg')

product10 = Product.create!(
    name: "Apple candle",
    price: 9.99,
    description: "Hopefully stays fresh until delivered."
)
file10 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_apple.jpg')
product10.photo.attach(io: file10, filename: 'prod_apple.jpg')

product10 = Product.create!(
    name: "Apple candle",
    price: 9.99,
    description: "Hopefully stays fresh until delivered."
)
file10 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_apple.jpg')
product10.photo.attach(io: file10, filename: 'prod_apple.jpg')

product11 = Product.create!(
    name: "Natural Anabrolic Growth Hormone Supplement",
    price: 59.99,
    description: "Hopefully stays fresh until delivered."
)
file11 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_anabrolic.jpeg')
product11.photo.attach(io: file11, filename: 'prod_anabrolic.jpg')

product12 = Product.create!(
    name: "Clothes",
    price: 14.99,
    description: "Clothes for sale"
)
file12 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/cat_clothes.jpg')
product12.photo.attach(io: file12, filename: 'cat_clothes.jpg')

product13 = Product.create!(
    name: "Skincare",
    price: 19.99,
    description: "Skincare bundle"
)
file13 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/cat_skincare.png')
product13.photo.attach(io: file13, filename: 'cat_skincare.jpg')

product14 = Product.create!(
    name: "Decoration",
    price: 9.99,
    description: "Random Decorations"
)
file14 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/cat_decorations.jpeg')
product14.photo.attach(io: file14, filename: 'cat_decorations.jpg')

product15 = Product.create!(
    name: "Items for sale",
    price: 4.99,
    description: "Random things for sale"
)
file15 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/cat_sale.jpg')
product15.photo.attach(io: file15, filename: 'cat_sale.jpg')

product16 = Product.create!(
    name: "Jewelry",
    price: 199.99,
    description: "Random Jewelry"
)
file16 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/cat_jewelry.jpg')
product16.photo.attach(io: file16, filename: 'cat_jewelry.jpg')

