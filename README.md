# README

# chat-space Tables Design

## users Table

|Column|Type|Options|
|---|---|---|
|name|string|null: false, index: true, unique: true|
|email|string|null: false, unique :true, default: “”|

### Association
- has_many :groups_users
- has_many :groups, through :groups_users
- has_many :messages

- - -

## groups Table

|Column|Type|Options|
|---|---|---|
|name|string|null: false, unique: true|

### Association
- has_many :groups_users
- has_many :users, thorough: groups_users
- has_many :messages

- - -

## groups_users Table

|Column|Type|Options|
|---|---|---|
|group_id|references|null: false, foreign_key: true, index: true|
|user_id|references|null: false, foreign_key: true, index: true|

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

