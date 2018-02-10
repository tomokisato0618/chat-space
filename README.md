# README

# chat-space Tables Design

## users Table

|Column|Type|Options|
|---|---|---|
|name|string|null: false, index: true, unique: true|
|email|string|null: false, unique :true, default: “”|

### Association
- has_many :group_users
- has_many :groups, through :group_users
- has_many :messages

- - -

## groups Table

|Column|Type|Options|
|---|---|---|
|name|string|null: false, unique: true|

### Association
- has_many :group_users
- has_many :users, thorough: group_users
- has_many :messages

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
|content|string|/|
|image|string|/|
|group_id|integer|null: false, foreign_key: true, index: true|
|user_id|integer|null: false, foreign_key: true, index: true|

### Association
- belongs_to :user
- belongs_to :group

