class CartItem < ApplicationRecord
    validates :user_id, :product_id, :quantity, :presence: true
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end

#   create_table "cart_items", force: :cascade do |t|
#     t.integer "user_id", null: false
#     t.integer "product_id", null: false
#     t.integer "quantity", null: false
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.index ["product_id"], name: "index_cart_items_on_product_id"
#     t.index ["user_id"], name: "index_cart_items_on_user_id"
#   end
