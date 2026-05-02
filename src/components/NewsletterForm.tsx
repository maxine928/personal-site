import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'

interface NewsletterFormProps {
  variant?: 'hero' | 'footer'
}

export default function NewsletterForm({ variant = 'hero' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Placeholder for email provider integration (Mailchimp, ConvertKit, Beehiiv)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={variant === 'footer' ? 'text-cream' : 'text-charcoal'}>
        <p className="font-heading text-lg">You're in. Talk soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail
            size={16}
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${
              variant === 'footer' ? 'text-cream/50' : 'text-mid-gray'
            }`}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={`w-full pl-9 pr-4 py-3 text-sm rounded-sm border transition-all outline-none font-body ${
              variant === 'footer'
                ? 'bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus:border-cream/50'
                : 'bg-white border-royal-blue/20 text-charcoal placeholder:text-mid-gray/60 focus:border-royal-blue/50'
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 text-sm font-heading rounded-sm transition-all disabled:opacity-60 ${
            variant === 'footer'
              ? 'bg-cream text-royal-blue hover:bg-muted-gold'
              : 'bg-royal-blue text-cream hover:bg-royal-blue/90'
          }`}
        >
          {loading ? 'Joining...' : 'Subscribe'}
        </button>
      </div>
      <p
        className={`mt-2 text-xs font-body ${
          variant === 'footer' ? 'text-cream/50' : 'text-mid-gray'
        }`}
      >
        Join 5,000+ readers. Unsubscribe anytime.
      </p>
    </form>
  )
}
