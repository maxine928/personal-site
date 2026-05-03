import { X } from 'lucide-react'
import ownioLogo from '../assets/ownio-logo.png'

interface OtherThingsModalProps {
  isOpen: boolean
  onClose: () => void
}


export default function OtherThingsModal({ isOpen, onClose }: OtherThingsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" />
      <div
        className="relative bg-cream rounded-sm border border-royal-blue/10 w-full max-w-lg p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Other things...</h2>
          <button
            onClick={onClose}
            className="text-mid-gray hover:text-charcoal transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">
          <div className="px-8 py-8 bg-white border border-royal-blue/20 rounded-sm hover:border-royal-blue/40 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-5 text-left">
              <img
                src={ownioLogo}
                alt="Ownio logo"
                className="h-14 w-14 rounded-sm object-cover flex-shrink-0 mx-auto sm:mx-0"
              />
              <div className="min-w-0">
                <p className="font-heading text-xl font-semibold text-charcoal">Ownio</p>
                <p className="font-body text-sm text-mid-gray mt-2 sm:mt-1">Own what you live.</p>
              </div>
            </div>
            <p className="font-body text-sm text-charcoal/80 leading-relaxed">
              <span className="text-royal-blue font-semibold">Building:</span> Own what you live.
            </p>
          </div>

          <div className="px-8 py-8 bg-white border border-royal-blue/20 rounded-sm hover:border-royal-blue/40 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-5 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-royal-blue/10 text-royal-blue text-lg font-semibold flex-shrink-0 mx-auto sm:mx-0">
                I
              </div>
              <div className="min-w-0">
                <p className="font-heading text-xl font-semibold text-charcoal">Internaly</p>
                <p className="font-body text-sm text-mid-gray mt-2 sm:mt-1">A platform for connecting students to alumni.</p>
              </div>
            </div>
            <p className="font-body text-sm text-charcoal/80 leading-relaxed">
              <span className="text-mid-gray font-semibold">Failed:</span> Hard to monetize students.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
