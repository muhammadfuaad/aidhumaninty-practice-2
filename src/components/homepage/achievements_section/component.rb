# frozen_string_literal: true

module Homepage
  module AchievementsSection
    class Component < ViewComponent::Base
      DETAILS = [{ title: "Gift a Water Hand Pump", amount: "£243", date: "March 20, 2021", supporters: "361" },
                 { title: "Pakistan Floods 2022 Emergency", amount: "£832", date: "March 18, 2021", supporters: "113" },
                 { title: "Feed a Child", amount: "£463", date: "February 20, 2021", supporters: "75" },
                 { title: "Yemen Emergency", amount: "£573", date: "January 03, 2021", supporters: "6" },]

      def initialize
        @project_details = DETAILS
      end
    end
  end
end
