import SimpleSynth from './modules/simple-synth.js'
import MixerChannel from './modules/mixer-channel.js'

window.audioContext = new AudioContext()
console.log("I'M THE ONE AND ONLY DOMINATOR")

document.getElementById('start').addEventListener('click', (ev) => {
  window.audioContext.resume()
  ev.target.disabled = true
  ev.target.innerText = 'BREEEEOOOOOMMM'
  window.setTimeout(() => {
    ev.target.hidden = true
  }, 300)
})

const synth = new SimpleSynth()
const synthChannel = new MixerChannel()

synth.output.connect(synthChannel.input)
synthChannel.output.connect(window.audioContext.destination)

// expose for debugging
window.synth = synth
window.synthChannel = synthChannel
