# frozen_string_literal: true

module Homepage
  module TestimonialsSection
    module Testimonial
      class Component < ViewComponent::Base
        with_collection_parameter :testimonial

        def initialize(testimonial:)
          @testimonial = testimonial
        end
      end
    end
  end
end
