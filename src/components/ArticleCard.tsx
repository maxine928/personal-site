import { Calendar, ArrowRight } from 'lucide-react'
import type { Article } from '../data/articles'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group rounded-sm border border-royal-blue/10 bg-white p-8 transition-all hover:border-royal-blue/40">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <span className="flex items-center gap-2 text-xs text-mid-gray font-body uppercase tracking-[0.2em]">
          <Calendar size={14} />
          {article.date}
        </span>
        <span className="text-xs text-muted-gold font-body uppercase tracking-[0.2em]">
          {article.readTime}
        </span>
      </div>
      <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3 group-hover:text-royal-blue transition-colors">
        {article.title}
      </h3>
      <p className="font-body text-mid-gray leading-relaxed mb-6">{article.description}</p>
      <a
        href={`/thoughts/${article.slug}`}
        className="inline-flex items-center gap-2 text-sm font-heading text-royal-blue hover:gap-3 transition-all"
      >
        Read more <ArrowRight size={14} />
      </a>
    </article>
  )
}
