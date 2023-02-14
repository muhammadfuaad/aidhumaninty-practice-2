# frozen_string_literal: true

module Homepage
  module AchievementsSection
    module Achievement
      class Component < ViewComponent::Base
        with_collection_parameter :project_detail

        def initialize(project_detail:)
          @project_detail = project_detail
        end
      end
    end
  end
end
