import { Terminal, FileAudio } from 'lucide-react'
import './Slide3.css'

const terminalLines = [
  { prompt: '$ ', text: 'ssh root@192.168.1.147', type: 'command' },
  { prompt: '', text: "root@192.168.1.147's password: ", type: 'password' },
  { prompt: '', text: 'iPhone:~ root#', type: 'ready' },
  { prompt: 'iPhone:~ root# ', text: 'cd /System/Library/Audio/UISounds', type: 'command' },
  { prompt: 'iPhone:/System/Library/Audio/UISounds root# ', text: 'ls *.caf', type: 'command' },
  { prompt: '', text: 'lock.caf          sms-received1.caf   sms-received4.caf', type: 'output' },
  { prompt: '', text: 'low_power.caf     sms-received2.caf   sms-received5.caf', type: 'output' },
]

export default function Slide3() {
  return (
    <div className="slide-3">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span className="terminal-title">
            <Terminal size={12} /> root@iPhone
          </span>
        </div>
        <div className="terminal-body">
          {terminalLines.map((line, i) => (
            <div
              key={i}
              className={`terminal-line ${line.type}`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <span className="prompt">{line.prompt}</span>
              {line.type === 'password' ? (
                <span className="text">{line.text}<span className="cursor-blink">●●●●●●</span></span>
              ) : (
                <span className="text">{line.text}</span>
              )}
            </div>
          ))}
        </div>
        <div className="scanlines" />
      </div>

      <svg className="tether-cable" viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 905,440 C 990,460 1040,540 980,620 S 860,710 895,740"
          stroke="#2a2a2a"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 905,440 C 990,460 1040,540 980,620 S 860,710 895,740"
          stroke="#33FF33"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8 6"
          className="data-flow"
          filter="url(#glow)"
        />
      </svg>

      <div className="iphone-device">
        <div className="device-frame">
          <FileAudio size={32} className="file-icon" />
          <div className="device-dot" />
        </div>
      </div>
    </div>
  )
}
