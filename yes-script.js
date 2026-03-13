let musicPlaying = false

window.addEventListener('load', () => {
<<<<<<< HEAD
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

=======
    launchConfetti()
>>>>>>> 53381002b4de1b58beb5e651dcc915e653231962
    const music = document.getElementById('bg-music')
    music.volume = 0.3
    music.play().catch(() => {})
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
})

function launchConfetti() {
<<<<<<< HEAD
    const colors = ['#e8a0b0', '#c96880', '#a84f66', '#f2c4ce', '#b8935a', '#fff0f4', '#f9c6d0']
=======
    const colors = ['#e8547a', '#c93060', '#f2899f', '#c9a96e', '#fff0f3', '#ffffff', '#a0203a']
>>>>>>> 53381002b4de1b58beb5e651dcc915e653231962
    const duration = 6000
    const end = Date.now() + duration

    confetti({
<<<<<<< HEAD
        particleCount: 130,
        spread: 100,
        origin: { x: 0.5, y: 0.35 },
        colors,
        shapes: ['circle', 'square'],
=======
        particleCount: 140,
        spread: 100,
        origin: { x: 0.5, y: 0.35 },
        colors
>>>>>>> 53381002b4de1b58beb5e651dcc915e653231962
    })

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }
        confetti({
<<<<<<< HEAD
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
=======
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
>>>>>>> 53381002b4de1b58beb5e651dcc915e653231962
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
