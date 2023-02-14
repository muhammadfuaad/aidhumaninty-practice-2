# frozen_string_literal: true

module Homepage
  module Appeals
    module Appeal
      class Component < ViewComponent::Base
        with_collection_parameter :detail

        def initialize(detail:)
          @detail = detail
        end
      end
    end
  end
end
