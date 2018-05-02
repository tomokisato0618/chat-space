$(function() {

  function buildMessageHTML(message) {
    var img = "";
    if (message.image) {
      img = `<div class="message-contents__body__image">
              <img src="${ message.image }" class="message-contents__body__image-content">
             </div>`;
    }
    var html = `<div class="message-contents__body__message-box">
                  <div class="message-contents__body__message-box__user-name">
                    ${ message.user_name }
                  </div>
                  <div class="message-contents__body__message-box__created-at">
                    ${ message.created_at }
                  </div>
                  <div class="message-contents__body__message-box__text">
                    ${ message.content }
                  </div>
                  ${ img }
                </div>`
  return html;
}

  $('.message-form').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildMessageHTML(data);
      $('.message-contents__body').append(html);
      var latest_message = $('.message-contents__body__message-box:last');
      $('html,body').animate({scrollTop: latest_message.offset().top}, 'normal');
      $('.message-form')[0].reset();
      $('.message-form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert('失敗しました');
      $('.message-form')[0].reset();
      $('.message-form__submit').prop('disabled', false);
    });
  });
});
