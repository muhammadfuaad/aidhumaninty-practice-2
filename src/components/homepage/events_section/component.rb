# frozen_string_literal: true

module Homepage
  module EventsSection
    class Component < ViewComponent::Base
      DETAILS = [{ month: "December 2022", date: "16-21", title: "The Pakistan Rickshaw Challenge",
                   target: "£1,200", fee: "£300", },
                 { month: "January 2023", date: "8", title: "Bangladesh Tour",
                   target: "£1,400", fee: "£250", },
                 { month: "January 2023", date: "8-14", title: "Lebanon “One Ummah” Deployment",
                   target: "£500", fee: "£450", },
                 { month: "February 2023", date: "23-25", title: "Istanbul Run", target: "", fee: "" },
                 { month: "April 2023", date: "3-9", title: "London to the Isle of Sheppey
        Cycling Challenge", target: "£2,000", fee: "£500", },
                 { month: "July 2022", date: "28", title: "Muslim Charity Run",
                   target: "£800", fee: "£200", },]

      def initialize
        @event_details = DETAILS
      end
    end
  end
end
