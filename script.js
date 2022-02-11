var arr=['#f79393','#93e3f7']
counter= 0


function firstloop(){
var t1 = gsap.timeline()
t1
.addLabel('abc')
.to("#imgoverlay1",{
    width: "100%",
    left: "0%",
    duration:1.5,
    delay:2,
    ease:"Expo.easeInOut",
},'abc')
.to("#imgoverlay2",{
    width: "100%",
    right: "0%",
    duration:1.5,
    delay:2,
    ease:"Expo.easeInOut",
},'abc')
}




var tlimg1 = gsap.timeline({delay:2,duration:1.5})
tlimg1
.set(img,{attr:{ src:'https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1962&q=80'}}
)
// var tlimg2 = gsap.timeline({delay:6,duration:1.5})
// tlimg2
// .set(img,{attr:{ src:'https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80'}}
// )

firstloop()

// onComplete:function(){
    //     gsap.set(imgoverlay2,{backgroundColor:"black"})
    // }



