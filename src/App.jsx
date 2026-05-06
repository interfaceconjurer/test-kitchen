import { useState, useRef } from 'react'
import './App.css'

const slides = [
  { bg: '#1a1a2e', color: '#eaeaea' },
  { bg: '#16213e', color: '#eaeaea' },
  { bg: '#0f3460', color: '#eaeaea' },
  { bg: '#533483', color: '#eaeaea' },
  { bg: '#e94560', color: '#ffffff' },
]

function App() {
  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState(null)
  const [direction, setDirection] = useState('next')
  const [animating, setAnimating] = useState(false)
  const timeoutRef = useRef(null)

  const goTo = (next) => {
    if (animating || next === current) return
    const dir = next > current ? 'next' : 'prev'
    setDirection(dir)
    setPrevious(current)
    setCurrent(next)
    setAnimating(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setAnimating(false)
      setPrevious(null)
    }, 500)
  }

  const advance = () => {
    if (current < slides.length - 1) goTo(current + 1)
  }

  const goBack = () => {
    if (current > 0) goTo(current - 1)
  }

  const handleClick = (e) => {
    const x = e.clientX
    const width = window.innerWidth
    if (x < width * 0.3) {
      goBack()
    } else {
      advance()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault()
      advance()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goBack()
    }
  }

  const getSlideClass = (i) => {
    if (i === current) return `slide active enter-${direction}`
    if (i === previous && animating) return `slide exit-${direction}`
    return 'slide'
  }

  return (
    <div
      className="deck"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="slide-container">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={getSlideClass(i)}
            style={{ backgroundColor: slide.bg, color: slide.color }}
          >
            <span className="slide-number">{i + 1}</span>
          </div>
        ))}
      </div>

      <div className="progress">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              goTo(i)
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
