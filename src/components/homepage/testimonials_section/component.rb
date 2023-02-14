# frozen_string_literal: true

module Homepage
  module TestimonialsSection
    class Component < ViewComponent::Base
      TESTIMONIALS = [{ title: "Andrew", age: "6 years old", image: "andrew.png",
                        feedback: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.", },
                      { title: "Sumayia", age: "8 years old", image: "sumayia.png", feedback: "Suspendisse
        quis nulla cursus, elementum eros quis, consequat tortor. Nullam sed ex vel
         mi dignissim molestie id at est. Integer feugiat gravida purus, vel ultrices mauris.", },
                      { title: "Zakyia", age: "9 years old", image: "zakyia.png", feedback: "Donec non justo diam.
        Fusce egestas diam sit amet turpis condimentum, vel imperdiet lectus aliquam.
         Nunc malesuada enim viverra eros laoreet, eget tincidunt erat aliquet.", },]

      def initialize
        @testimonials = TESTIMONIALS
      end
    end
  end
end
