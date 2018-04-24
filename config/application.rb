require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    config.generators do |g|
      g.helper false
      g.javascripts false
      g.test_framework false
    end

    config.i18n.default_locale = :ja
    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local
    Time::DATE_FORMATS[:default] = '%Y/%m/%d %H:%M'
  end
end
