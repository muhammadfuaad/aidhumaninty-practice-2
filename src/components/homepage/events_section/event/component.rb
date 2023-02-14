# frozen_string_literal: true

module Homepage
  module EventsSection
    module Event
      class Component < ViewComponent::Base
        with_collection_parameter :event_detail

        def initialize(event_detail:)
          @event_detail = event_detail
        end
      end
    end
  end
end
