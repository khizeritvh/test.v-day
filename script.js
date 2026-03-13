const gifStages = [
    "https://media1.giphy.com/media/fSEoD7tXf6esHkpwpN/giphy.gif",         // 0 normal
    "https://media1.giphy.com/media/fSEoD7tXf6esHkpwpN/giphy.gif",         // 1 confused (same for now)
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",           // 2 pleading
    "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",               // 3 sad
    "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",               // 4 sadder
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",               // 5 devastated
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",               // 6 very devastated
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif"                // 7 crying
]

const noMessages = [
    "No",
    "Are you absolutely sure? 🤔",
    "Please don't do this to me… 🥺",
    "You'd really break my heart like that?",
    "I'd be so sad… you have no idea 😢",
    "I'm literally begging at this point 💔",
    "This is not how our story is supposed to go…",
    "Very last chance, I really mean it 😭",
    "Fine, you can't even catch me anyway 😜"
]

const yesTeasePokes = [
    "psst… try hitting no first. just once 😏",
    "go on, I dare you to press no 👀",
    "you're missing the plot twist 😈",
    "click no… if you're brave enough 😏"
]

let yesTeasedCount = 0
let noClickCount = 0
let runawayEnabled = false
let musicPlaying = true

const catGif = document.getElementById('cat-gif')
const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const music = document.getElementById('bg-music')

// Spawn floating petals
const petals = ['🌸', '🌺', '✿', '🌷', '💮', '🌼', '💗', '🪷']
const petalBg = document.getElementById('petalBg')
for (let i = 0; i < 20; i++) {
    const p = document.createElement('div')
    p.className = 'petal'
    p.textContent = petals[Math.floor(Math.random() * petals.length)]
    p.style.left = `${Math.random() * 100}%`
    p.style.fontSize = `${0.75 + Math.random() * 0.85}rem`
    const dur = 12 + Math.random() * 14
    p.style.animationDuration = `${dur}s`
    p.style.animationDelay = `${Math.random() * dur}s`
    petalBg.appendChild(p)
}

// Autoplay music
music.muted = true
music.volume = 0.3
music.play().then(() => {
    music.muted = false
}).catch(() => {
    document.addEventListener('click', () => {
        music.muted = false
        music.play().catch(() => {})
    }, { once: true })
})

function toggleMusic() {
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.muted = false
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}

function handleYesClick() {
    if (!runawayEnabled) {
        const msg = yesTeasePokes[Math.min(yesTeasedCount, yesTeasePokes.length - 1)]
        yesTeasedCount++
        showTeaseMessage(msg)
        return
    }
    window.location.href = 'yes.html'
}

function showTeaseMessage(msg) {
    const toast = document.getElementById('tease-toast')
    toast.textContent = msg
    toast.classList.add('show')
    clearTimeout(toast._timer)
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2800)
}

function handleNoClick() {
    noClickCount++

    const msgIndex = Math.min(noClickCount, noMessages.length - 1)
    noBtn.textContent = noMessages[msgIndex]

    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize)
    yesBtn.style.fontSize = `${currentSize * 1.35}px`
    const padY = Math.min(15 + noClickCount * 5, 55)
    const padX = Math.min(40 + noClickCount * 10, 115)
    yesBtn.style.padding = `${padY}px ${padX}px`

    if (noClickCount >= 2) {
        const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize)
        noBtn.style.fontSize = `${Math.max(noSize * 0.85, 10)}px`
    }

    const gifIndex = Math.min(noClickCount, gifStages.length - 1)
    swapGif(gifStages[gifIndex])

    if (noClickCount >= 2 && !runawayEnabled) {
        enableRunaway()
        runawayEnabled = true
    }
}

function swapGif(src) {
    catGif.style.opacity = '0'
    setTimeout(() => {
        catGif.src = src
        catGif.style.opacity = '1'
    }, 200)
}

function enableRunaway() {
    noBtn.addEventListener('mouseover', runAway)
    noBtn.addEventListener('touchstart', runAway, { passive: true })
}

function runAway() {
    const margin = 20
    const btnW = noBtn.offsetWidth
    const btnH = noBtn.offsetHeight
    const maxX = window.innerWidth - btnW - margin
    const maxY = window.innerHeight - btnH - margin

    const randomX = Math.random() * maxX + margin / 2
    const randomY = Math.random() * maxY + margin / 2

    noBtn.style.position = 'fixed'
    noBtn.style.left = `${randomX}px`
    noBtn.style.top = `${randomY}px`
    noBtn.style.zIndex = '50'
}
