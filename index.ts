import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/dark.css'
import './src/index.css'


document.addEventListener('DOMContentLoaded', () => {
    console.log(hljs)
    hljs.registerLanguage('bash', bash)
    document.querySelectorAll('code').forEach((block) => {
        hljs.highlightElement(block)
    })

    const video = document.getElementById('video') as HTMLVideoElement
    video.play()

    video.addEventListener('loadeddata', () => {
        console.log('loaded')
        const vidCont = document.getElementById('vid-cont') as HTMLDivElement
        const prog = document.getElementById('prog') as HTMLDivElement

        vidCont.style.opacity = "1"
        prog.style.display = 'none'
    })

})