import { X } from 'lucide-react'
import ownioLogo from '../assets/ownio-logo.png'

interface OtherThingsModalProps {
  isOpen: boolean
  onClose: () => void
}

function OwnioLogo() {
  return (
    <span className="font-heading text-xl font-semibold tracking-tight text-charcoal">
      ownio
    </span>
  )
}

function InternalyLogo() {
  return (
    <span className="font-heading text-lg font-semibold tracking-tight text-charcoal">
      internaly
    </span>
  )
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
          <div className="p-5 bg-white border border-royal-blue/10 rounded-sm hover:border-royal-blue/30 transition-all">
            <div className="flex flex-col gap-4 mb-4 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={ownioLogo}
                    alt="Ownio logo"
                    className="h-14 w-14 rounded-sm object-cover flex-shrink-0"
                  />
                  <OwnioLogo />
                </div>
                <span className="text-xs font-body text-royal-blue border border-royal-blue/20 px-2 py-0.5 rounded-sm">
                  Building
                </span>
              </div>
              <p className="font-body text-mid-gray text-sm">
                Own what you live.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white border border-royal-blue/10 rounded-sm hover:border-royal-blue/30 transition-all">
            <div className="flex flex-col gap-4 mb-4 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal-blue/10 text-royal-blue text-lg font-semibold">
                    I
                  </div>
                  <InternalyLogo />
                </div>
                <span className="text-xs font-body text-mid-gray border border-muted-gold/40 px-2 py-0.5 rounded-sm">
                  Failed
                </span>
              </div>
              <p className="font-body text-mid-gray text-sm">
                A platform for connecting students to alumni. Hard to monetize students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
