import { Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-royal-blue text-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mb-12">
          <a
            href="https://twitter.com/maximosventures"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-cream/20 rounded-sm hover:border-cream/50 transition-all group"
          >
            <Twitter size={18} className="text-cream/70 group-hover:text-cream transition-colors" />
            <div>
              <p className="text-xs text-cream/50 font-body">Twitter / X</p>
              <p className="text-sm text-cream font-heading">@maximosventures</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/maximosventures"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-cream/20 rounded-sm hover:border-cream/50 transition-all group"
          >
            <Linkedin size={18} className="text-cream/70 group-hover:text-cream transition-colors" />
            <div>
              <p className="text-xs text-cream/50 font-body">LinkedIn</p>
              <p className="text-sm text-cream font-heading">in/maximosventures</p>
            </div>
          </a>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-cream/60 font-body">© 2026 Maximos. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-cream/60 hover:text-cream/90 font-body transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-cream/60 hover:text-cream/90 font-body transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
