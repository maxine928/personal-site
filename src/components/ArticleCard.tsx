import { Calendar, ArrowRight } from 'lucide-react'
import type { Article } from '../data/articles'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="border-b border-royal-blue/10 py-8 group">
      <div className="flex items-center gap-4 mb-3">
        <span className="flex items-center gap-1.5 text-xs text-mid-gray font-body">
          <Calendar size={12} />
          {article.date}
        </span>
        <span className="text-xs text-muted-gold font-body">{article.readTime}</span>
      </div>
      <h3 className="font-heading text-2xl font-semibold text-charcoal mb-2 group-hover:text-royal-blue transition-colors">
        {article.title}
      </h3>
      <p className="font-body text-mid-gray leading-relaxed mb-4">{article.description}</p>
      <a
        href={`/thoughts/${article.slug}`}
        className="inline-flex items-center gap-2 text-sm font-heading text-royal-blue hover:gap-3 transition-all"
      >
        Read more <ArrowRight size={14} />
      </a>
    </article>
  )
}
