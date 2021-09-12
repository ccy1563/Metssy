class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.integer :rating, null: false
      t.integer :product_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
  end
end