function locomotiveScrollInitialize(){

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#webPage"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#webPage", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#webPage").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

locomotiveScrollInitialize()

if(window.screen.width >650){
  function initialize(){
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#imgs",
        pin: true,   
        start: "top top", 
        scrub: 1.5, 
        scroller: "#webPage",
        end: "+=60%",
      }
  });
  
  tl
  .addLabel('abc')
  .to("#l1",{
    x:"-130%",
    ease: "Power2.easeInOut"
  },'abc')
  .to("#l2",{
    x:"-150%",
    ease: "Power2.easeInOut"
  },'abc')
  .to("#r1",{
    x:"130%",
    ease: "Power2.easeInOut"
  },'abc')
  .to("#r2",{
    x:"150%",
    ease: "Power2.easeInOut"
  },'abc')
  .to(".large",{
      width:"100%",
      ease: "Power2.easeInOut"
  },'abc')
  }

  initialize()
}

function back2(){
  var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#back2",   
      start: "top 70%", 
      scroller: "#webPage",
    }
});

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#back2 #line",   
    start: "top 50%", 
    scroller: "#webPage",
  }
});

t2
.to(".a",{
  opacity:1,
  onStart:function(){
    $('.a').textillate({
      selector: '.texts',
      loop: false,
      minDisplayTime: 2000,
      initialDelay: 0,
      autoStart: true,
      inEffects: [],
      in: {
        effect: 'fadeInUp',
        delayScale: 1.5,
        delay: 20,
        sync: false,
        shuffle: false,
        reverse: false,
        callback: function () {}
      },
    
      type: 'char'
    })
  }

})

.from("#heading #line",{
  width:"0%",
  duration:2,
  ease: Expo.easeInOut
})


t3
.to("#lft2p ,.aa",{
  opacity:1,
  onStart:function(){
    $('.aa').textillate({
      selector: '.texts',
      loop: false,
      minDisplayTime: 2000,
      initialDelay: 0,
      autoStart: true,
      inEffects: [],
      in: {
        effect: 'fadeInUp',
        delayScale: 1,
        delay: 10,
        sync: false,
        shuffle: false,
        reverse: false,
        callback: function () {}
      },
    
      type: 'char'
    })
  }
})

.to("#ellipse",{
  scale:1.8,
  duration:1.5,
  duration:2,
  opacity:1,
  ease: Expo.easeInOut
},'ab')
.to("#ellipse img",{
  scale:1.2,
  duration:1.5,
  duration:2,
  ease: Expo.easeInOut
},'ab')

}

function back3(){
  var t4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#back3",   
      start: "top 70%", 
      scroller: "#webPage",
    }
});

  t4.from("#back3 .row,#back3rght a", {
    y: 30,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: .3
  }, "saath")
  .to("#back3 #rectangle", {
    scale: 1.3,
    opacity :1,
    ease: Expo.easeInOut,
    duration: 2
  }, "-=2.5")
  .to("#back3 #rectangle img", {
    scale: 1,
    ease: Expo.easeInOut,
    duration: 2
  }, "-=2.5")

}


function textillateonwords(){
  $('#back h1').textillate({
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    autoStart: true,
    inEffects: [],
    in: {
      effect: 'fadeInUp',
      delayScale: 2,
      delay: 15,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    },
  
    type: 'char'
  });
  
}


back2()
back3()
textillateonwords()