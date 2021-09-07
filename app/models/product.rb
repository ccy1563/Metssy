class User < ApplicationRecord
    validates :name, :price, :description, presence: true
end

#   create_table "products", force: :cascade do |t|
#     t.string "name", null: false
#     t.float "price", null: false
#     t.text "description", null: false
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end