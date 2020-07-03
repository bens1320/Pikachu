import string from "./css.js"
let n = 1

demo.innerHTML = string.substr(0, n)
demo2.innerText = string.substr(0, n)

let time = 0

const run = () => {
    n += 1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    demo.innerHTML = string.substr(0, n)
    demo2.innerText = string.substr(0, n)
    // 滚动到css最新显示的位置
    demo2.scrollTop = demo2.scrollHeight
}

const play = () => {
    return setInterval(run, time)
}

const pause = () => {
    window.clearInterval(id)
}

let id = play()

btnPause.onclick = () => {
    pause()
}

btnPlay.onclick = () => {
    pause()
    id = play()
}

btnSlow.onclick = () => {
    pause()
    time = 200
    id = play()
}

btnNormal.onclick = () => {
    pause()
    time = 100
    id = play()
}

btnFast.onclick = () => {
    pause()
    time = 0
    id = play()
}