import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import NewsletterForm from '../components/NewsletterForm'
import { articles } from '../data/articles'

export default function Thoughts() {
  return (
    <div className="min-h-screen bg-cream">
      <Header sticky={true} />

      {/* Hero */}
      <section className="py-20 max-w-2xl mx-auto px-6">
        <h1 className="font-heading text-5xl sm:text-6xl font-semibold text-charcoal mb-4">
          Thoughts
        </h1>
        <p className="font-body text-lg text-mid-gray leading-relaxed max-w-lg">
          Reflections on building, investing, and creating lasting value in business.
        </p>
      </section>

      {/* Articles */}
      <section className="max-w-2xl mx-auto px-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>

      {/* Old writings */}
      <div className="max-w-2xl mx-auto px-6 py-10 border-t border-royal-blue/10 mt-2">
        <a
          href="https://www.clippings.me/maxharrison"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-mid-gray hover:text-charcoal transition-colors underline underline-offset-4"
        >
          some old thoughts, if you care →
        </a>
      </div>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-2">
            To keep up with me...
          </h2>
          <p className="font-body text-mid-gray mb-6">
            <span className="text-royal-blue font-semibold">5,247</span> entrepreneurs already do.
          </p>
          <NewsletterForm variant="hero" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
