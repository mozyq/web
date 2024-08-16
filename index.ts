import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/dark.css'


document.addEventListener('DOMContentLoaded', () => {
    console.log(hljs)
    hljs.registerLanguage('bash', bash)
    document.querySelectorAll('code').forEach((block) => {
        hljs.highlightElement(block)
    })

    const video = document.getElementById('video') as HTMLVideoElement
    video.play()
})