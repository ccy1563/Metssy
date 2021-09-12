class Review < ApplicationRecord
    validates :body, :rating, :product_id, :author_id, presence: true
    # validates :number, :inclusion => 1..10

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product  

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end