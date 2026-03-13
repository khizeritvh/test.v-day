let musicPlaying = false

window.addEventListener('load', () => {
    launchConfetti()
    const music = document.getElementById('bg-music')
    music.volume = 0.3
    music.play().catch(() => {})
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
})

function launchConfetti() {
    const colors = ['#e8547a', '#c93060', '#f2899f', '#c9a96e', '#fff0f3', '#ffffff', '#a0203a']
    const duration = 6000
    const end = Date.now() + duration

    confetti({
        particleCount: 140,
        spread: 100,
        origin: { x: 0.5, y: 0.35 },
        colors
    })

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }
        confetti({
            particleCount: 35,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors
        })
        confetti({
            particleCount: 35,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors
        })
    }, 300)
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
