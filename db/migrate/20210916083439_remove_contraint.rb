class RemoveContraint < ActiveRecord::Migration[6.1]
  def change
    remove_index :cart_items, name: "index_cart_items_on_product_id_and_user_id"
  end
end
