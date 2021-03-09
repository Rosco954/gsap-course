
    let tl = gsap.timeline()
    tl.fromTo('.heading', {
        opacity:0,
        x: -500,
    },
    {
        x: 0,
        opacity: 1,
        duration: .6,
        ease: 'power2',
    },
    )
    .fromTo('.logo', {
        x: -200,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        delay: 0.2,
        duration: 1
    },
    '>-0.6'
    )
    .fromTo('.menu', {
        x: 200,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        delay: 0.2,
        duration: 1
    },
    '>-1.15'
    )
    .fromTo('.girl', {
        height: 0
    },
    {
        height: 600,
        duration: 1.2,
        ease: 'power3'
    },
    '>-.5'
    )
    .fromTo('.boy', {
        height: 0
    },
    {
        height: 600,
        duration: 1.2,
        ease: 'power3'
    },
    '>-.5'
    )
    .fromTo('.shape1', {
        opacity:0,
        scale: 0.2
    },
    {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2'
    },
    '>-.7'
    )
    .fromTo('.shape2', {
        opacity:0,
        scale: 0.2
    },
    {
        opacity: 0.5,
        scale: 1,
        duration: 1.2,
        ease: 'power2'
    },
    '>-.7'
    )
    .fromTo('.shape3', {
        opacity:0,
        scale: 0.2
    },
    {
        opacity: 0.5,
        scale: 1,
        duration: 1.2,
        ease: 'power2'
    },
    '>-1.15'
    )
    .fromTo('.left-ani', {
        opacity:0,
        x: -500,
    },
    {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2',
        stagger: 0.8
    },
    '>-1.15'
    )
    .fromTo('.shape2', {
        y: -300
    },
    {
        y: -260,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
    },
    '>-1.15'
    )
    .fromTo('.shape3', {
        y: 300
    },
    {
        y: 260,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
    },
    '>-2'
    );
