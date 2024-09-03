import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/dark.css'
import './src/index.css'


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    const vidCont = document.getElementById('vid-cont') as HTMLDivElement
    const video = document.getElementById('video') as HTMLVideoElement
    const prog = document.getElementById('prog') as HTMLDivElement

    function hideProg() {
        console.log('hideProg')
        vidCont.style.opacity = "1"
        prog.style.display = 'none'
    }

    function progress() {
        console.log('progress')
        prog.innerText = `${video.buffered.end(0)}`
        prog.style.width = `${video.buffered.end(0) / video.duration * 100}%`
    }

    video.addEventListener('progress', progress)
    video.addEventListener('canplay', hideProg)

    hljs.registerLanguage('bash', bash)

    document.querySelectorAll('code').forEach((block) => {
        hljs.highlightElement(block)
    })
})