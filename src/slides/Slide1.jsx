import paintbrushes from '../assets/slides/paintbrushes.png'
import imac from '../assets/slides/imac.png'
import './Slide1.css'

export default function Slide1() {
  return (
    <div className="slide-1">
      <img src={imac} alt="" className="imac-photo" />
      <div className="paint-mask">
        <img src={paintbrushes} alt="" className="paintbrushes-photo" />
      </div>
      <div className="angled-divider" />
    </div>
  )
}
