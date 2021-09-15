class Product < ApplicationRecord
    validates :name, :price, :description, presence: true

    has_one_attached :photo

    has_many :reviews,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Review

    has_many :cart_items,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :CartItem
end

#   create_table "products", force: :cascade do |t|
#     t.string "name", null: false
#     t.float "price", null: false
#     t.text "description", null: false
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end