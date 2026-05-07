import { Brain, ImagePlus, Sparkles, ArrowRight, Puzzle } from 'lucide-react'
import './Slide5.css'

export default function Slide5() {
  return (
    <div className="slide-5">
      <h2 className="slide-5-heading">My Experiment: Fine-Tuning an Image Model</h2>
      <p className="slide-5-subtitle">Using Replicate + FLUX + LoRA</p>

      <div className="diagram">
        <div className="diagram-col">
          <div className="diagram-box input-box">
            <ImagePlus size={52} className="diagram-icon input-icon" />
            <span className="box-label">Training Photos</span>
          </div>
        </div>

        <div className="diagram-col model-col">
          <div className="diagram-box model-box">
            <Brain size={60} className="diagram-icon model-icon" />
            <span className="box-label">FLUX</span>
            <span className="box-sublabel">Base Model</span>
          </div>
          <div className="lora-badge">
            <Puzzle size={14} />
            <span>LoRA</span>
          </div>
        </div>

        <div className="arrow-col">
          <ArrowRight size={28} className="flow-arrow" />
        </div>

        <div className="diagram-col">
          <div className="diagram-box output-box">
            <Sparkles size={52} className="diagram-icon output-icon" />
            <span className="box-label">Generated Images</span>
          </div>
        </div>

        <svg className="curved-arrow" viewBox="0 0 220 60" fill="none">
          <path
            d="M 10 5 C 30 55, 150 55, 195 30"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeDasharray="8 6"
            fill="none"
            strokeLinecap="round"
          />
          <polygon
            points="200,30 190,24 190,36"
            fill="#F59E0B"
            transform="rotate(80 195 30)"
          />
        </svg>
      </div>
    </div>
  )
}
