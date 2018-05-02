json.content    @message.content
json.user_name  @message.user.name
json.use_id     @message.user.id
json.image      @message.image.url
json.created_at format_posted_time(@message.created_at)
