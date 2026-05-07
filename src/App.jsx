import { useState, useRef } from 'react'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import './App.css'

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7]

function getInitialSlide() {
  const params = new URLSearchParams(window.location.search)
  const s = parseInt(params.get('slide'), 10)
  return s >= 1 && s <= slides.length ? s - 1 : 0
}

function App() {
  const [current, setCurrent] = useState(getInitialSlide())
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
    if (e.target.closest('button')) return
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
        {slides.map((SlideComponent, i) => (
          <div key={i} className={getSlideClass(i)}>
            <SlideComponent />
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
