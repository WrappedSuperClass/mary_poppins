import SectionTemplate from './SectionTemplate'
import Reveal from '@/components/ui/Reveal'
import { Card, CardContent } from '@/components/ui/Card'

const reviews = [
  {
    id: 1,
    name: "Val Lukeman",
    rating: 5,
    date: "a month ago",
    text: "Our family absolutely loved Matija and Lucia! They were wonderful in every way: fun, loving, patient and wise with the children and added joy and happiness to our family time with them. We hope they will join our family for our vacation next summer!",
    reviewCount: "2 reviews"
  },
  {
    id: 2,
    name: "Darija Kalebic",
    rating: 5,
    date: "4 months ago",
    text: "Delighted with the girl who looked after my children, the way of communication, patience and professionalism - both the girls Lucija and the entire agency. All recommendations and we will certainly continue to cooperate ❤️",
    reviewCount: "5 reviews · 1 photo"
  },
  {
    id: 3,
    name: "Neeven Sleman",
    rating: 5,
    date: "11 months ago",
    text: "Great service, a very professional team... my baby got along with the nanny very well. Thank you so much",
    reviewCount: "Local Guide · 102 reviews · 207 photos"
  },
  {
    id: 4,
    name: "Ivana Bejo",
    rating: 5,
    date: "11 months ago",
    text: "Extremely pleasant cooperation with an excellent nanny Mateo, I recommend 😊",
    reviewCount: "2 reviews"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const ReviewCard = ({ review, index }: { review: typeof reviews[0], index: number }) => {
  return (
    <Reveal delayMs={index * 100}>
      <Card 
        variant="glass" 
        hover={true}
        className="h-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        <CardContent className="p-6 h-full flex flex-col">
          {/* Header with name and rating */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-white/95 text-lg">{review.name}</h4>
                <p className="text-white/70 text-sm">{review.reviewCount}</p>
              </div>
            </div>
            <div className="text-right">
              <StarRating rating={review.rating} />
              <p className="text-white/70 text-sm mt-1">{review.date}</p>
            </div>
          </div>
          
          {/* Review text */}
          <div className="flex-1">
            <p className="text-white/90 leading-relaxed text-base">
              "{review.text}"
            </p>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  )
}

export default function Reviews() {
  return (
    <SectionTemplate
      id="reviews"
      title="Google Reviews"
      subtitle="What families say about our exceptional childcare services"
      background="transparent"
    >
      {/* Desktop: Show all 4 reviews in 2x2 grid */}
      <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={review.id} review={review} index={index} />
        ))}
      </div>
      
      {/* Mobile/Small screens: Show only first 3 reviews */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {reviews.slice(0, 3).map((review, index) => (
          <ReviewCard key={review.id} review={review} index={index} />
        ))}
      </div>
      
      {/* Call to action */}
      <Reveal delayMs={400}>
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg mb-4">
              Ready to experience exceptional childcare?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Reveal>
    </SectionTemplate>
  )
}
