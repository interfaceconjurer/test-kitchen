import {
  Music, AudioLines, Megaphone, BellRing, Volume2, Radio,
  Frown, Meh, ThumbsDown, Ban, XCircle, CircleSlash
} from 'lucide-react'
import ogIphone from '../assets/slides/og-iphone.png'
import './Slide2.css'

const tones = [
  { name: 'Tri-Tone', sound: Music, sad: Frown },
  { name: 'Glass', sound: AudioLines, sad: Meh },
  { name: 'Horn', sound: Megaphone, sad: ThumbsDown },
  { name: 'Bell', sound: BellRing, sad: Ban },
  { name: 'Electronic', sound: Volume2, sad: XCircle },
  { name: 'Anticipation', sound: Radio, sad: CircleSlash },
]

export default function Slide2() {
  return (
    <div className="slide-2">
      <div className="starburst">
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = i * 60
          return (
            <div
              key={i}
              className="burst-line"
              style={{ transform: `rotate(${angle}deg)` }}
            />
          )
        })}
      </div>

      <div className="tone-ring">
        {tones.map((tone, i) => {
          const SoundIcon = tone.sound
          const SadIcon = tone.sad
          const angle = (i * 60) - 90
          const radius = 320
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius

          return (
            <div
              key={tone.name}
              className="tone-pair"
              style={{
                '--tx': `${x}px`,
                '--ty': `${y}px`,
                animationDelay: `${i * 0.12 + 1.4}s`,
              }}
            >
              <div className="tone-icon-wrap">
                <SoundIcon size={28} className="tone-icon" />
                <div className="strike-through" style={{ animationDelay: `${i * 0.2 + 3.0}s` }} />
              </div>
              <SadIcon size={30} className="sad-icon" style={{ animationDelay: `${i * 0.3 + 3.5}s` }} />
              <span className="tone-label">{tone.name}</span>
            </div>
          )
        })}
      </div>

      <div className="iphone-center">
        <div className="iphone-mask">
          <img src={ogIphone} alt="Original iPhone" className="iphone-img" />
        </div>
      </div>
    </div>
  )
}
