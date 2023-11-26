$('.box1').tilt({
    maxTilt: 10,  
    easing: "cubic-bezier(.03,.98,.52,.99)",       
    speed: 300,    
    transition: true,   
    disableAxis: null,   
    reset: true,         
})

$('.box2').tilt({
    maxTilt: 10,
    perspective: 200,   
    easing: "cubic-bezier(.03,.98,.52,.99)",       
    speed: 500,    
    transition: true,   
    disableAxis: null,   
    reset: true,   
    glare: true,  
    maxGlare: 0.3,
    scale: 1.1      
})

$('.box3').tilt({
    maxTilt: 10,
    perspective: 100,   
    easing: "cubic-bezier(.03,.98,.52,.99)",   
    speed: 300,    
    transition: true,   
    disableAxis: null,   
    reset: false,       
})

