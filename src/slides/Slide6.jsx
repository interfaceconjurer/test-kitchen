import { Plus, MessageSquare } from 'lucide-react'
import './Slide6.css'

import training1 from '../assets/slides/treining-images/4ky2pi58u9c51.jpg'
import training2 from '../assets/slides/treining-images/blade-runner (1).jpeg'
import training3 from '../assets/slides/treining-images/for-those-asking-for-the-artwork-of-my-screenshot-original-v0-i2xoho1u7pr91.jpg'
import training4 from '../assets/slides/treining-images/rxdkgk9yugd81.jpg'
import result1 from '../assets/slides/results/gallery-1.png'
import result2 from '../assets/slides/results/gallery-2.png'
import result3 from '../assets/slides/results/gallery-3.png'
import result4 from '../assets/slides/results/gallery-4.png'

const trainingImages = [training1, training2, training3, training4]
const resultImages = [result1, result2, result3, result4]

export default function Slide6() {
  return (
    <div className="slide-6">
      <div className="equation-left">
        <div className="equation-column">
          <h3 className="grid-title">Training Data</h3>
          <div className="funnel-grid">
            {trainingImages.map((src, i) => (
              <div key={i} className="funnel-img" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={src} alt={`Training image ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="equation-operator">
        <Plus size={32} className="operator-icon" />
      </div>

      <div className="equation-prompt">
        <MessageSquare size={24} className="prompt-icon" />
        <span className="prompt-text">Creative Prompt</span>
      </div>

      <div className="equation-operator">
        <span className="equals-sign">=</span>
      </div>

      <div className="equation-right">
        <div className="equation-column">
          <h3 className="grid-title">Resulting Images from Fine Tune</h3>
          <div className="funnel-grid">
            {resultImages.map((src, i) => (
              <div key={i} className="funnel-img" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                <img src={src} alt={`Result image ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
