@reviews.each do |review|
      json.set! review.id do 
            json.extract! review, :id, :body, :rating, :product_id, :author_id
      end
end