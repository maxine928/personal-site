import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import OtherThingsModal from '../components/OtherThingsModal'
import NewsletterForm from '../components/NewsletterForm'
import capitalPadLogo from '../assets/capitalpad-logo-new.png'
import tempoLogo from '../assets/tempo-logo.png'
import { articles } from '../data/articles'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const recentArticles = articles.slice(0, 3)

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header sticky={false} />

      {/* Hero */}
      <section className="min-h-[calc(100vh-100px)] max-w-7xl mx-auto px-6 flex items-center py-16">
        <div className="animate-fade-in-up w-full grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 items-center">
          <div className="lg:self-end">
            <div className="aspect-[3/4] border-2 border-dashed border-royal-blue/20 rounded-sm bg-white/70 flex items-center justify-center mx-auto max-w-sm">
              <div className="text-center">
                <div className="w-16 h-16 border border-royal-blue/20 rounded-sm flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading text-2xl text-royal-blue/40">M</span>
                </div>
                <p className="font-body text-sm text-mid-gray/60">Photo</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:pr-8">
            <div>
              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-semibold leading-none tracking-tight mb-4">
                Max Harrison
              </h1>
            </div>

            <div className="flex items-center gap-2 text-mid-gray font-body">
              <MapPin size={16} className="text-royal-blue shrink-0" />
              <span>Charlotte, NC</span>
            </div>

            <p className="font-body text-lg text-charcoal/85 leading-relaxed max-w-xl">
              I partner with exceptional operators to build enduring businesses. Currently running
              MaximosVentures and writing about entrepreneurship, investing, and building sustainable
              companies.
            </p>

            <p className="font-body text-sm text-mid-gray">
              <span className="font-semibold text-royal-blue">5,247</span> entrepreneurs read my weekly newsletter.
            </p>

            <div className="max-w-md pt-1">
              <NewsletterForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-10 text-charcoal">
            What I do...
          </h2>

          <div className="mx-auto max-w-xl space-y-5">
            <a
              href="https://capitalpad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-sm border border-royal-blue/20 bg-white px-8 py-8 transition-all hover:border-royal-blue/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-5 text-left">
                <img
                  src={capitalPadLogo}
                  alt="CapitalPad logo"
                  className="h-14 w-14 flex-shrink-0 rounded-full mx-auto sm:mx-0 object-cover"
                />
                <div className="min-w-0">
                  <p className="font-heading text-xl font-semibold text-charcoal">
                    CapitalPad
                  </p>
                  <p className="font-body text-sm text-mid-gray mt-2 sm:mt-1">
                    Invest in cash-flowing small businesses one deal at a time.
                  </p>
                </div>
              </div>
              <p className="font-body text-sm text-charcoal/80 leading-relaxed">
                <span className="text-royal-blue font-semibold">Building:</span> Invest in boring,
                cash-flowing small businesses one deal at a time.
              </p>
            </a>

            <a
              href="https://tempoweights.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-sm border border-royal-blue/20 bg-white px-8 py-8 transition-all hover:border-royal-blue/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-5 text-left">
                <img
                  src={tempoLogo}
                  alt="Tempo logo"
                  className="h-14 w-auto flex-shrink-0 mx-auto sm:mx-0"
                />
                <div className="min-w-0">
                  <p className="font-heading text-xl font-semibold text-charcoal">
                    TEMPO
                  </p>
                  <p className="font-body text-sm text-mid-gray mt-2 sm:mt-1">
                    Advisor to a premium fitness brand.
                  </p>
                </div>
              </div>
              <p className="font-body text-sm text-charcoal/80 leading-relaxed">
                <span className="text-royal-blue font-semibold">Advisor:</span> The Rolex of Dumbbells.
              </p>
            </a>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="mt-10 font-body text-sm text-mid-gray hover:text-charcoal transition-colors underline underline-offset-4"
          >
            Other things... →
          </button>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-10">
            About Me
          </h2>
          <div className="space-y-6 font-body text-lg text-charcoal/80 leading-relaxed">
            <p>
              I started my career in investment banking, convinced it was where serious people went
              to do serious things. It took about two years to realize it wasn't for me — too far
              from the actual building, too much advising without ever having skin in the game.
            </p>
            <p>
              What I love is the game of business itself. The strategy of it. Chess and poker
              wrapped into one — you're competing, you're bluffing, you're reading the board, and
              the stakes are real. The best operators I've met all have this quality: they see
              patterns other people miss and they're comfortable sitting in ambiguity.
            </p>
            <p>
              I'm based in Charlotte, NC, though I spend a fair amount of time moving. My favorite
              places on earth are Praiano, Italy — a small village on the Amalfi Coast that hasn't
              been discovered yet — Malibu, and Central Park in New York, early on a Sunday morning.
            </p>
            <p>
              Outside of work, I surf when I can, train jiu-jitsu, spend too much time in saunas,
              and love the high desert. Good music, breakfasts outside, dinners with the boys, a gin
              and tonic at an airport — the simple stuff. That's mostly what I'm after.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Writings */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-2">
            Latest Writings
          </h2>
          <div className="space-y-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/thoughts"
              className="font-body text-sm text-mid-gray hover:text-charcoal transition-colors underline underline-offset-4"
            >
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <OtherThingsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
