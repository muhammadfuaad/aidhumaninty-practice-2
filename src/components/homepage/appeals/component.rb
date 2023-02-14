# frozen_string_literal: true

module Homepage
  module Appeals
    class Component < ViewComponent::Base
      DETAILS = [{ title: "Water Hands Pumps", description: "Every single day, women around the world have to walk
                miles to collect water for their household. Installing a hand pump brings this basic human right closer
                to home.", image: "water-hand-pumps.png",
                   progress: "86percent", category: "Water for All", supporters: "12", type: "z.png", goal: "870",
                   amount: "234", },
                 { title: "Yemen Emergency", description: "More than 1,500 people killed and 2 million homes
                partially or completely destroyed following the Yemen Floods of 2022.",
                   image: "yemen-emergency-appeal.png", progress: "50percent",
                   category: "Disaster & Emergency Appeals", supporters: "34", type: "sj.png",
                   goal: "984", amount: "934", },
                 { title: "Feed a Child", description: "Feed a Child campaign provides hot, nutritious meals in schools.
                We ensure that children are nourished, helping boost attention and energy, and tackling hunger",
                   image: "feed-a-child.png", category: "Hunger Appeal", supporters: "", type: "", },]

      def initialize
        @details = DETAILS
      end
    end
  end
end
