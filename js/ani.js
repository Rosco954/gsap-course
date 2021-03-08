const tween = gsap.fromTo('.heading-ani', {
    x:0, 
    opacity:0},
    {
    duration: 1,
    x: '50%',
    opacity: 1,
    ease: 'bounce',
    stagger: 0.5    
    }
    );