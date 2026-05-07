import { Sparkles, Sparkle, Zap } from 'lucide-react'
import claudeIcon from '../assets/slides/claude-icon.svg'
import './Slide4.css'

const sparkles = [
  { Icon: Sparkles, size: 24, top: '18%', left: '22%', delay: '0s', rotate: '1deg' },
  { Icon: Sparkle, size: 18, top: '25%', right: '28%', delay: '0.5s', rotate: '2deg' },
  { Icon: Sparkles, size: 18, bottom: '30%', left: '18%', delay: '1.1s', rotate: '-3deg' },
  { Icon: Zap, size: 22, top: '35%', right: '18%', delay: '1.7s', rotate: '4deg' },
  { Icon: Sparkle, size: 16, bottom: '25%', right: '32%', delay: '0.3s', rotate: '2deg' },
  { Icon: Sparkles, size: 14, top: '60%', left: '30%', delay: '2.1s', rotate: '4deg' },
]

export default function Slide4() {
  return (
    <div className="slide-4">
      <div className="radial-glow" />

      <div className="sparkle-field">
        {sparkles.map(({ Icon, size, delay, rotate, ...pos }, i) => (
          <Icon
            key={i}
            size={size}
            className="sparkle"
            style={{ ...pos, animationDelay: delay, transform: `rotate(${rotate})` }}
          />
        ))}
      </div>

      <div className="slide-4-content">
        <div className="claude-mark">
          <img src={claudeIcon} alt="Claude" className="claude-logo" />
        </div>

        <div className="headline">
          <span className="word word-1">Forget</span>{' '}
          <span className="word word-2">about</span>{' '}
          <span className="word word-3">work.</span>
          <br />
          <span className="word word-4">Just</span>{' '}
          <span className="word word-5 highlight-play">play.</span>
        </div>
      </div>
    </div>
  )
}
