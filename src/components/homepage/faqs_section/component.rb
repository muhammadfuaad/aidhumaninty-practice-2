# frozen_string_literal: true

module Homepage
  module FaqsSection
    class Component < ViewComponent::Base
      DETAILS = [{ question: "Does all my donation go to the appeal?" },
                 { question: "Can I cancel my subscription?", answer: "You can caccel your donation
          at any time. However if your last paymentt of the month is still yet to come this
           will still be deducted. Until the next month.", },
                 { question: "Can I start my own appeal?" },]

      def initialize
        @details = DETAILS
      end
    end
  end
end
