# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Review.destroy_all
Product.destroy_all
User.destroy_all

user = User.create!(
    email: "caveman@gmail.com",
    password: "123456password"
)

otherUser = User.create!(
    email: "ccy1563@gmail.com",
    password: "123456password"
)


product1 = Product.create!(
    name: "Reebok Advanced Trainer Men's Training Shoes",
    price: 29.99,
    description: "Features of the Reebok Advanced Trainer Men's Training Shoes. Breathable mesh upper. EVA midsole. Imported"
)
file1 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_shoe.jpg')
product1.photo.attach(io: file1, filename: 'prod_shoe.jpg')

product2 = Product.create!(
    name: "Modern Swing Arm Wall Lamp Bronze Plug-In Fixture Bedroom Bedside Living Room",
    price: 9.99,
    description: "A beautiful look for bedrooms, reading chairs and more. The design features an adjustable swing arm that's perfect for reading or other tasks. It comes in a matte bronze finish over steel. The fabric drum shade softens the light throw. Cord cover not included, sold separately."
)
file2 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_lamp.jpg')
product2.photo.attach(io: file2, filename: 'prod_lamp.jpg')

product3 = Product.create!(
    name: "Heart Necklace",
    price: 80.75,
    description: "Heart Necklace N2 • Minimal Necklace, Love Necklace, Dainty Necklace, Everyday Necklace, Friendship, Bridesmaid Gift, Gift For Her"
)
file3 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_heart_necklace.jpg')
product3.photo.attach(io: file3, filename: 'prod_heart_necklace.jpg')

product4 = Product.create!(
    name: "Staub Cast Iron 3.5-qt Pumpkin Cocotte",
    price: 229.95,
    description: "The Staub Cast Iron Pumpkin Cocotte was designed not only for collectors, but for those that would like to bring a little whimsey to their table. This Cocotte is more than mere decoration. It is an heirloom quality Dutch Oven, cast and enameled in France by skilled craftsmen. The interior enamel is Staub's proprietary textured matte finish that promotes browning. The Staub cocotte is unsurpassed for slow-cooking meats and vegetables to tender perfection, and for simmering hearty stews and soups. Cast iron possesses exceptional heat-retaining qualities, so the pot heats evenly throughout. This pot also makes a handsome serving vessel at the table."
)
file4 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_pumpkin.jpeg')
product4.photo.attach(io: file4, filename: 'prod_pumpkin.jpg')

product5 = Product.create!(
    name: "CLINIQUE HAPPY Pour Homme Cologne edt for Men 3.4 oz 3.3 New in Box",
    price: 38.76,
    description: "This scent features notes of cedar, Mediterranean cypress, guaicwood, kaffir lime, kalamanzi fruit, mandarin and yuzu. Design house: Clinique Happy for Men launch date: 1999 Cologne 3.3-oz Men's cologne that features notes of cedar, Mediterranean cypress, guaicwood, kaffir lime, kalamanzi fruit, mandarin and yuzu. Recommended for: Daytime wear We cannot accept returns on this product.
"
)
file5 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_perfume.jpg')
product5.photo.attach(io: file5, filename: 'prod_perfume.jpg')

product6 = Product.create!(
    name: "Signature Sleep Queen Murphy Wall Bed in Espresso",
    price: 945.00,
    description: "Need to turn your guest room into a home office? The Signature Sleep Queen Wall Bed is the perfect solution so you can have both! The compact design allows you to easily stow away your queen size guest bed by folding it against the wall whenever you need the floor space. The durable metal folding mechanism allows one person to simply fold or unfold the bed. The wooden mattress support slats eliminate the need for a box spring while the sturdy metal bed frame will prevent sagging. The queen wall bed is also ideal for loft style apartments or bonus rooms that need extra sleeping spaces. Made of durable industrial grade laminated MDF and particleboard with a dark espresso finish, the wall bed is an affordable option for smaller spaces or dual function spaces."
)
file6 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_bed.jpg')
product6.photo.attach(io: file6, filename: 'prod_bed.jpg')

product7 = Product.create!(
    name: "Gucci Shopping Tote Tian Print GG Coated Canvas Medium",
    price: 1601.40,
    description: "These are professional pictures of the actual item offered by Rebag.Condition: Very good. Wear and discoloration on base corners, loss of shape on handles, cracking and splitting on handle base wax edges. Wear, stains and pen marks in interior, scratches on hardware. Accessories: Box, Luggage Tag, Dust Bag Measurements: Handle Drop 8, Height 11, Width 15, Depth 5 Designer: GucciModel: Shopping Tote Tian Print GG Coated Canvas MediumExterior Material: Canvas (Coated) Exterior Color: Brown, Print Interior Material: Microfiber Interior Color: Brown Hardware Color: Silver Item Number: 61800/92")
file7 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_peacock_bag.jpg')
product7.photo.attach(io: file7, filename: 'prod_peacock_bag.jpg')

product8 = Product.create!(
    name: "Reebok Men's Face Cover M/L 3-Pack",
    price: 10.00,
    description: "Made with soft, breathable fabric the Reebok Face Cover is comfortable, washable and reusable for practicing healthy habits every day. This cover is not a medically graded mask nor a Personal Protective Equipment but can help prevent the spread of viruses and germs through droplet transmission.
"
)
file8 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_reebok_masks.jpg')
product8.photo.attach(io: file8, filename: 'prod_reebok_masks.jpg')

product9 = Product.create!(
    name: "Mens Rolex 36mm DateJust Diamond Watch Oyster Steel Band Custom Black Dial 2 CT.",
    price: 5495.00,
    description: "This Is A Stainless Steel Oyster Perpetual DateJust Watch With 2 Ct. T.W. Of Genuine Diamonds Added To The Bezel And Dial. This Is A FULL Size Desired Model For Men’s. This Watch Is In Excellent Condition And Looks Brand New On The Wrist."
)
file9 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod%2Bsilver_watch.jpg')
product9.photo.attach(io: file9, filename: 'prod%2Bsilver_watch.jpg')

product10 = Product.create!(
    name: "Cute Doll",
    price: 3600.00,
    description: "Ready for adoption. Waldorf doll 36cm/14 Waldorf inspired ecofriendly toy Natural fiber doll Soft doll"
)
file10 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_doll.png')
product10.photo.attach(io: file10, filename: 'prod_doll.jpg')

product11 = Product.create!(
    name: "Natural Anabrolic Growth Hormone Supplement",
    price: 59.99,
    description: "I am disturbed."
)
file11 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_anabrolic2.png')
product11.photo.attach(io: file11, filename: 'prod_anabrolic.jpg')

product12 = Product.create!(
    name: "New Gucci Beige/Blue GG Coated Canvas Mini Bloom Chain Bag 546313 8492",
    price: 676.79,
    description: "A compact bag with a chain shoulder strap in our Blooms print GG Supreme canvas."
)
file12 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_gucci.jpg')
product12.photo.attach(io: file12, filename: 'prod_anabrolic.jpg')

product13 = Product.create!(
    name: "ZWILLING Four Star 4-inch Paring Knife",
    price: 54.95,
    description: "The paring knife is a practical aid to a range of small-scale kitchen tasks, such as peeling fruit and vegetables or creating detailed garnishes. With a short 4-inch blade, it is especially suited for smaller sized ingredients. A precision cutting edge gives the knife a sharpness that effortlessly cuts through small and medium sized pieces of meat. The knife sits comfortably in the hand to enable precision cutting even for the most difficult of tasks.")
file13 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/prod_knife.jpg')
product13.photo.attach(io: file13, filename: 'prod_knife.jpg')

product14 = Product.create!(
    name: "Holographic Little Girl Floral Picture Framed Vintage Wood Frame Scalloped Edges",
    price: 64.99,
    description: "Nice holographic piece with a vintage scene. Little girl in dress and brown/red hair with some flowers in her hand. She appears miniature next to the flower arrangement on the table next to her. Green curtains in the background. Wood frame with scalloped edges and gold painted border around picture. No glass, never had glass."
)
file14 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/art1.jpg')
product14.photo.attach(io: file14, filename: 'art1.jpg')

product15 = Product.create!(
    name: "Ted Patrick - Dismaland Fan Gift Print - Signed AP",
    price: 490.00,
    description: "Ted Patrick. Dismaland Fan Gift Print Signed. 2015. AP Edition of only 10. Fine art on 308GSM Hahnemuhle Rag. 33cm x 48cm. Full Signed COA"
)
file15 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/art2.jpg')
product15.photo.attach(io: file15, filename: 'art2.jpg')

product16 = Product.create!(
    name: "John Suchy The Pizza Joint 3D Art",
    price: 325.00,
    description: "This is # 38 of 125 of John Suchy's The Pizza Joint. Broadway N.Y.C. The frame is 12 x 12 with a wire hanger on the back.")
file16 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/art3.jpg')
product16.photo.attach(io: file16, filename: 'art3.jpg')

product17 = Product.create!(
    name: "Hexen 2.0 Art Book Suzanne Treister 2011 Cybernetics ,Internet Warfare",
    price: 1120.00,
    description: "Hexen 2.0 Art Book Suzanne Treister 2011 Cybernetics, Internet Warfare, Conspiracy, Art, Tarot, Occult"
)
file17 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/art4.jpg')
product17.photo.attach(io: file17, filename: 'art4.jpg')

product18 = Product.create!(
    name: "Untitled Skull 1973 by American master painter Jasper Johns.",
    price: 22000.00,
    description: "C2. Contemporary Jasper Johns Signed Serigraph Skull 1973. Pop Art Sreet Art"
)
file18 = URI.open('https://active-storage-yeetsy-dev.s3.amazonaws.com/art5.jpg')
product18.photo.attach(io: file18, filename: 'art5.jpg')


review1 = Review.create!(
    body: 'review body 1',
    rating: 1, 
    product_id: product2.id, 
    author_id: otherUser.id
)

review12 = Review.create!(
    body: 'review body 2',
    rating: 2, 
    product_id: product2.id, 
    author_id: otherUser.id
)

review13 = Review.create!(
    body: 'review body 3',
    rating: 3, 
    product_id: product2.id, 
    author_id: otherUser.id
)

review14 = Review.create!(
    body: 'review body 4',
    rating: 4, 
    product_id: product2.id, 
    author_id: otherUser.id
)

review15 = Review.create!(
    body: 'review body 5',
    rating: 5, 
    product_id: product2.id, 
    author_id: otherUser.id
)

review16 = Review.create!(
    body: 'sadfsafsdfafsa',
    rating: 5, 
    product_id: product1.id, 
    author_id: otherUser.id
)

review17 = Review.create!(
    body: 'MMMMMMMMFMDSFDF',
    rating: 5, 
    product_id: product1.id, 
    author_id: otherUser.id
)

review18 = Review.create!(
    body: 'LEOIKMVDNJKSJVBS',
    rating: 3, 
    product_id: product1.id, 
    author_id: otherUser.id
)