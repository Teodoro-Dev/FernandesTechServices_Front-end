import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const testimonials = [
	{
		id: 1,
		content:
			'Working with Fernandes Innovations transformed our business. Their AI solutions increased our efficiency by 300% and delivered results beyond our expectations.',
		author: 'João Silva',
		role: 'CEO, Tech Startup',
		rating: 5,
	},
	{
		id: 2,
		content:
			"The team's expertise in AI and automation helped us streamline our operations. We saw a 200% ROI within the first quarter.",
		author: 'Maria Santos',
		role: 'CTO, E-commerce Platform',
		rating: 5,
	},
	{
		id: 3,
		content:
			'Outstanding service and innovative solutions. They delivered a complex AI system that exceeded all our requirements.',
		author: 'Pedro Costa',
		role: 'Director, Financial Services',
		rating: 5,
	},
	{
		id: 4,
		content:
			'Their AI-powered chatbot revolutionized our customer service. Response times decreased by 80% while satisfaction increased.',
		author: 'Ana Rodrigues',
		role: 'Head of Operations, Retail Chain',
		rating: 5,
	},
	{
		id: 5,
		content:
			'Professional, efficient, and innovative. The best tech partner we\'ve worked with. Highly recommended!',
		author: 'Carlos Mendes',
		role: 'Founder, SaaS Company',
		rating: 5,
	},
]

const companies = [
	{ name: 'Premium', logo: '/Premium.png' },
	{ name: 'ScanLedger Premium', logo: '/ScanLedger Premium.png' },
]

export default function Clients() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextTestimonial = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length)
	}

	const prevTestimonial = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
	}

	return (
		<section className="py-20 px-6 sm:px-10 md:px-16 bg-[#0B0B1A] relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
			</div>

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Trusted Companies Section */}
				<motion.div
					className="mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<motion.h3
						className="text-center text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						Trusted by Industry Leaders
					</motion.h3>
					<p className="text-center text-white/60 text-sm mb-10">
						Partnering with innovative companies to deliver exceptional results
					</p>

					<div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
						{companies.map((company, index) => (
							<motion.div
								key={company.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="hover:scale-110 transition-transform duration-300"
							>
								<img
									src={company.logo}
									alt={company.name}
									className="h-16 md:h-20 w-auto object-contain"
									onError={(e) => {
										e.target.style.display = 'none'
									}}
								/>
							</motion.div>
						))}
					</div>

					{/* CTA Button */}
					<motion.div
						className="text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
					>
						<Link
							to="/portfolio"
							className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity group"
						>
							See Our Portfolio
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
					</motion.div>
				</motion.div>

				{/* Testimonials Section */}
				<div className="text-center mb-12">
					<motion.h2
						className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						What Our Clients Say
					</motion.h2>
					<motion.p
						className="text-white/60 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						Don&apos;t just take our word for it - hear from businesses we&apos;ve helped transform
					</motion.p>
				</div>

				{/* Testimonial Card */}
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.3 }}
					className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl"
				>
					{/* Stars */}
					<div className="flex gap-1 mb-6">
						{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
							<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
						))}
					</div>

					{/* Content */}
					<p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
						"{testimonials[currentIndex].content}"
					</p>

					{/* Author Info */}
					<div>
						<p className="text-white font-semibold text-lg">{testimonials[currentIndex].author}</p>
						<p className="text-white/60 text-sm">{testimonials[currentIndex].role}</p>
					</div>

					{/* Navigation */}
					<div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
						<div className="flex gap-2">
							<button
								onClick={prevTestimonial}
								className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
								aria-label="Previous testimonial"
							>
								<ChevronLeft className="w-5 h-5" />
							</button>
							<button
								onClick={nextTestimonial}
								className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
								aria-label="Next testimonial"
							>
								<ChevronRight className="w-5 h-5" />
							</button>
						</div>

						{/* Dots Indicator */}
						<div className="flex gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`h-2 rounded-full transition-all ${
										index === currentIndex
											? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
											: 'w-2 bg-white/30'
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}


