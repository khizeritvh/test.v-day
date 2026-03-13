let musicPlaying = false

window.addEventListener('load', () => {
    // Spawn petals on yes page too
    const petals = ['🌸', '🌺', '✿', '🌷', '💮', '🌼', '💗', '🪷']
    const petalBg = document.getElementById('petalBg')
    if (petalBg) {
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
    }

    launchConfetti()

    const music = document.getElementById('bg-music')
    music.volume = 0.3
    music.play().catch(() => {})
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
})

function launchConfetti() {
    const colors = ['#e8a0b0', '#c96880', '#a84f66', '#f2c4ce', '#b8935a', '#fff0f4', '#f9c6d0']
    const duration = 6000
    const end = Date.now() + duration

    confetti({
        particleCount: 130,
        spread: 100,
        origin: { x: 0.5, y: 0.35 },
        colors,
        shapes: ['circle', 'square'],
    })

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }
        confetti({
            particleCount: 30,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.65 },
            colors
        })
        confetti({
            particleCount: 30,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.65 },
            colors
        })
    }, 350)
}

function toggleMusic() {
    const music = document.getElementById('bg-music')
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}
