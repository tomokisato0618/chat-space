# README

# chat-space Tables Design

## users Table

|Column|Type|Options|
|---|---|---|
|name|string|null: false, index: true, unique: true|
|email|string|null: false, unique :true, default: “”|
|passward|string|null: false, default: “”|

### Association
- has_many :group_users
- has_many :groups, through :members

- - -

## groups Table

|Column|Type|Options|
|---|---|---|
|name|string|null: false, unique: true|

### Association
- has_many :group_users
- has_many :users, thorough: members

- - -

## group_users Table

|Column|Type|Options|
|---|---|---|
|group_id|references|foreign_key: true, index: true|
|user_id|references|foreign_key: true, index: true|

### Association
- belongs_to :user
- belongs_to :group

- - -

## messages Table

|Column|Type|Options|
|---|---|---|
|content|text|/|
|image|string|/|
|group_id|integer|null: false, foreign_key: true, index: true|
|user_id|integer|null: false, foreign_key: true, index: true|

### Association
- belongs_to :user
- belongs_to :group

