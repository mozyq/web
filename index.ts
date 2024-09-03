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
        const percent = (video.buffered.end(0) / video.duration * 100).toFixed(2)
        console.log('progress')
        console.log(percent)
        prog.innerText = `${percent}%`
        prog.style.width = `${video.buffered.end(0) / video.duration * 630}px`
    }

    video.addEventListener('progress', progress)
    video.addEventListener('canplay', hideProg)

    hljs.registerLanguage('bash', bash)

    document.querySelectorAll('code').forEach((block) => {
        hljs.highlightElement(block)
    })

    const source = document.createElement("source")
    source.setAttribute(
        "src",
        "https://mozyq.org/video.mp4")

    source.setAttribute("type", "video/mp4")

    video.appendChild(source)
})