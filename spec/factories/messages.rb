FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image   File.open("#{Rails.root}/public/images/kiyoshi1.jpg")
    user
    group
  end
end
