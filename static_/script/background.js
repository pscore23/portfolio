(async () => { // なぜ async とアロー関数使ってるのかって?
    await particlesJS("particles-js", { // 答えは簡単、なんとなくテスト()
        "particles": { // なぜ await まで使ってテストするのかって?
            "number": { // 答えは簡単、なんとなくテスト()
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ced1"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                },
                "polygon": {
                    "nb_sides": 23
                },
                "image": {
                    "width": 190,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.664994832269074,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 2.2722661797524872,
                    "opacity_min": 0.08115236356258881,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 961.4383117143238
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            }
        },
        "retina_detect": true
    })
})()