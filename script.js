
function unmuteVideo() {
    let myVideo = document.getElementById("myVideo")
  
    if (myVideo.muted == true) {
      myVideo.muted = false;
    } else {
      myVideo.muted = true;
    }
  
  }
  
  function textadd1() {
    let text = document.querySelector(".change")
    text.innerHTML = `<p class="after-customize-section-container-text3">SOUNDRAW's AI was a real curiosity for me. I have a unique style, so <span class="multicolor-text5">I wanted see if the AI could keep up.</span> Know what I'm sayin'?</p>`
  
  }
  function textadd2() {
    let text = document.querySelector(".change")
    text.innerHTML = `<p class="after-customize-section-container-text3 text3-1-extendcss">As a filmmaker, sound is key to my videos.<span class="multicolor-text5">Soundraw has enabled me to create the sound for the mood for any videos that I'm making,</span> cutting out hours of searching for music to place. The future of sound for film is here!</p>`
  }
  function textadd3() {
    let text = document.querySelector(".change")
    text.innerHTML = `<p class="after-customize-section-container-text3"><span class="multicolor-text5">Soundraw is truly the future of music,</span> cutting out hours of searching for music to place. The future of sound for film is here!</p>`
  }
  function textadd4() {
    let text = document.querySelector(".change")
    text.innerHTML = `<p class="after-customize-section-container-text3">If you're a Video Editor who needs to customize a background track,<span class="multicolor-text5"> Soundraw's technology is super impressive and helpful!</span></p>`
  }
  
  
  function text2add1() {
    let text2 = document.querySelector(".change2")
    text2.innerHTML = `<p class="after-customize-section-container-text4-block-text1">Fivio Foreign</p>`
  }
  function text2add2() {
    let text2 = document.querySelector(".change2")
    text2.innerHTML = `<p class="after-customize-section-container-text4-block-text1">Drex Lee</p>`
  }
  function text2add3() {
    let text2 = document.querySelector(".change2")
    text2.innerHTML = `<p class="after-customize-section-container-text4-block-text1">YCImaging</p>`
  }
  function text2add4() {
    let text2 = document.querySelector(".change2")
    text2.innerHTML = `<p class="after-customize-section-container-text4-block-text1">Premiere Gal</p>`
  }
  
  function text3add1() {
    let text3 = document.querySelector(".change3")
    text3.innerHTML = `<p class="after-customize-section-container-text4-block-text2">Hip Hop Artist</p>`
  }
  function text3add2() {
    let text3 = document.querySelector(".change3")
    text3.innerHTML = `<p class="after-customize-section-container-text4-block-text2">Film Director, 4B+ views</p>`
  }
  function text3add3() {
    let text3 = document.querySelector(".change3")
    text3.innerHTML = `<p class="after-customize-section-container-text4-block-text2">Video creator, 500K+ subscribers</p>`
  }
  function text3add4() {
    let text3 = document.querySelector(".change3")
    text3.innerHTML = `<p class="after-customize-section-container-text4-block-text2">Video creator, 465K+ subscribers</p>`
  }
  
  // `<p class="after-customize-section-container-text3">As a filmmaker, sound is key to my videos.<span class="multicolor-text5">Soundraw has enabled me to create the sound for the mood for any videos that I'm making,</span> cutting out hours of searching for music to place. The future of sound for film is here!</p>`
  // `<p class="after-customize-section-container-text3"><span class="multicolor-text5">Soundraw is truly the future of music,</span> cutting out hours of searching for music to place. The future of sound for film is here!</p>`
  // `<p class="after-customize-section-container-text3">If you're a Video Editor who needs to customize a background track,<span class="multicolor-text5"> Soundraw's technology is super impressive and helpful!</span></p>`
  
  // document.querySelector(".outer1").classList.add("outer-img")
  
  function glowadd1() {
    document.querySelector(".outer1").classList.add("outer-img")
    document.querySelector(".outer1").classList.remove("opa-less")
  
    document.querySelector(".outer2").classList.remove("outer-img")
    document.querySelector(".outer2").classList.add("opa-less")
  
    document.querySelector(".outer3").classList.remove("outer-img")
    document.querySelector(".outer3").classList.add("opa-less")
  
    document.querySelector(".outer4").classList.remove("outer-img")
    document.querySelector(".outer4").classList.add("opa-less")
  
  }
  function glowadd2() {
    document.querySelector(".outer1").classList.remove("outer-img")
    document.querySelector(".outer1").classList.add("opa-less")
  
    document.querySelector(".outer2").classList.add("outer-img")
    document.querySelector(".outer2").classList.remove("opa-less")
  
    document.querySelector(".outer3").classList.remove("outer-img")
    document.querySelector(".outer3").classList.add("opa-less")
  
    document.querySelector(".outer4").classList.remove("outer-img")
    document.querySelector(".outer4").classList.add("opa-less")
  
  }
  function glowadd3() {
    document.querySelector(".outer1").classList.remove("outer-img")
    document.querySelector(".outer1").classList.add("opa-less")
  
    document.querySelector(".outer2").classList.remove("outer-img")
    document.querySelector(".outer2").classList.add("opa-less")
  
    document.querySelector(".outer3").classList.add("outer-img")
    document.querySelector(".outer3").classList.remove("opa-less")
  
    document.querySelector(".outer4").classList.remove("outer-img")
    document.querySelector(".outer4").classList.add("opa-less")
  
  }
  function glowadd4() {
    document.querySelector(".outer1").classList.remove("outer-img")
    document.querySelector(".outer1").classList.add("opa-less")
  
    document.querySelector(".outer2").classList.remove("outer-img")
    document.querySelector(".outer2").classList.add("opa-less")
  
    document.querySelector(".outer3").classList.remove("outer-img")
    document.querySelector(".outer3").classList.add("opa-less")
  
    document.querySelector(".outer4").classList.add("outer-img")
    document.querySelector(".outer4").classList.remove("opa-less")
  
  }
  
  
  // let innerCursor = document.querySelector(".innerCursor");
  // let outerCursor = document.querySelector(".outerCursor");
  
  // document.addEventListener('mouseover', moveCursor)
  
  // function moveCursor(e){
  //     let x = e.clientX;
  //     let y = e.clientY;
  //     // console.log(x,y)
  //     innerCursor.style.left = `${x}px`
  //     innerCursor.style.top = `${y}px`
  //     outerCursor.style.left = `${x}px`
  //     outerCursor.style.top = `${y}px`
  
  // }
  
  // let link1 = Array.from(document.querySelectorAll('a'))
  
  // link1.forEach((link1)=>{
  //     link1.addEventListener("mouseover", () => {
  //         outerCursor.classList.add("grow")
  //     })
  //     link1.addEventListener("mouseover", () => {
  //         outerCursor.classList.remove("grow")
  //     })
  // })
  // let link2 = Array.from(document.querySelectorAll('button'))
  
  // link2.forEach((link2)=>{
  //     link2.addEventListener('mouseover', () => {
  //         innerCursor.classList.add("grow")
  //     })
  //     link2.addEventListener('sssmouseover', () => {
  //         innerCursor.classList.remove("grow")
  //     })
  // })
  
  
  function unmuteVideo() {
    let myVideo = document.getElementById("myVideo")
  
    if (myVideo.muted == true) {
      myVideo.muted = false;
    } else {
      myVideo.muted = true;
    }
  
  }
  
  function textadd1() {
    let text = document.querySelector(".change")
    text.innerHTML = `<p class="after-customize-section-container-text3">SOUNDRAW's AI was a real curiosity for me. I have a unique style, so <span class="multicolor-text5">I wanted see if the AI could keep up.</span> Know what I'm sayin'?</p>`
  
  }
  function textadd2() {
    let text = document.querySelector(".change")
    text.innerHTML = `<p class="after-customize-section-container-text3 text3-1-extendcss">As a filmmaker, sound is key to my videos.<span class="multicolor-text5">Soundraw has enabled me to create the sound for the mood for any videos that I'm making,</span> cutting out hours of searching for music to place. The future of sound for film is here!</p>`
  }
  function textadd3() {
    let text = document.querySelector(".change")
    text.innerHTML = `<p class="after-customize-section-container-text3"><span class="multicolor-text5">Soundraw is truly the future of music,</span> cutting out hours of searching for music to place. The future of sound for film is here!</p>`
  }
  function textadd4() {
    let text = document.querySelector(".change")
    text.innerHTML = `<p class="after-customize-section-container-text3">If you're a Video Editor who needs to customize a background track,<span class="multicolor-text5"> Soundraw's technology is super impressive and helpful!</span></p>`
  }
  
  
  function text2add1() {
    let text2 = document.querySelector(".change2")
    text2.innerHTML = `<p class="after-customize-section-container-text4-block-text1">Fivio Foreign</p>`
  }
  function text2add2() {
    let text2 = document.querySelector(".change2")
    text2.innerHTML = `<p class="after-customize-section-container-text4-block-text1">Drex Lee</p>`
  }
  function text2add3() {
    let text2 = document.querySelector(".change2")
    text2.innerHTML = `<p class="after-customize-section-container-text4-block-text1">YCImaging</p>`
  }
  function text2add4() {
    let text2 = document.querySelector(".change2")
    text2.innerHTML = `<p class="after-customize-section-container-text4-block-text1">Premiere Gal</p>`
  }
  
  function text3add1() {
    let text3 = document.querySelector(".change3")
    text3.innerHTML = `<p class="after-customize-section-container-text4-block-text2">Hip Hop Artist</p>`
  }
  function text3add2() {
    let text3 = document.querySelector(".change3")
    text3.innerHTML = `<p class="after-customize-section-container-text4-block-text2">Film Director, 4B+ views</p>`
    // let ptext = document.querySelector(".after-customize-section-container-text3")
    document.querySelector(".after-customize-section-container-text3").style.marginBottom = "20px";
  }
  function text3add3() {
    let text3 = document.querySelector(".change3")
    text3.innerHTML = `<p class="after-customize-section-container-text4-block-text2">Video creator, 500K+ subscribers</p>`
  }
  function text3add4() {
    let text3 = document.querySelector(".change3")
    text3.innerHTML = `<p class="after-customize-section-container-text4-block-text2">Video creator, 465K+ subscribers</p>`
  }
  
  // `<p class="after-customize-section-container-text3">As a filmmaker, sound is key to my videos.<span class="multicolor-text5">Soundraw has enabled me to create the sound for the mood for any videos that I'm making,</span> cutting out hours of searching for music to place. The future of sound for film is here!</p>`
  // `<p class="after-customize-section-container-text3"><span class="multicolor-text5">Soundraw is truly the future of music,</span> cutting out hours of searching for music to place. The future of sound for film is here!</p>`
  // `<p class="after-customize-section-container-text3">If you're a Video Editor who needs to customize a background track,<span class="multicolor-text5"> Soundraw's technology is super impressive and helpful!</span></p>`
  
  // document.querySelector(".outer1").classList.add("outer-img")
  
  function glowadd1() {
    document.querySelector(".outer1").classList.add("outer-img")
    document.querySelector(".outer1").classList.remove("opa-less")
  
    document.querySelector(".outer2").classList.remove("outer-img")
    document.querySelector(".outer2").classList.add("opa-less")
  
    document.querySelector(".outer3").classList.remove("outer-img")
    document.querySelector(".outer3").classList.add("opa-less")
  
    document.querySelector(".outer4").classList.remove("outer-img")
    document.querySelector(".outer4").classList.add("opa-less")
  
  }
  function glowadd2() {
    document.querySelector(".outer1").classList.remove("outer-img")
    document.querySelector(".outer1").classList.add("opa-less")
  
    document.querySelector(".outer2").classList.add("outer-img")
    document.querySelector(".outer2").classList.remove("opa-less")
  
    document.querySelector(".outer3").classList.remove("outer-img")
    document.querySelector(".outer3").classList.add("opa-less")
  
    document.querySelector(".outer4").classList.remove("outer-img")
    document.querySelector(".outer4").classList.add("opa-less")
  
  }
  function glowadd3() {
    document.querySelector(".outer1").classList.remove("outer-img")
    document.querySelector(".outer1").classList.add("opa-less")
  
    document.querySelector(".outer2").classList.remove("outer-img")
    document.querySelector(".outer2").classList.add("opa-less")
  
    document.querySelector(".outer3").classList.add("outer-img")
    document.querySelector(".outer3").classList.remove("opa-less")
  
    document.querySelector(".outer4").classList.remove("outer-img")
    document.querySelector(".outer4").classList.add("opa-less")
  
  }
  function glowadd4() {
    document.querySelector(".outer1").classList.remove("outer-img")
    document.querySelector(".outer1").classList.add("opa-less")
  
    document.querySelector(".outer2").classList.remove("outer-img")
    document.querySelector(".outer2").classList.add("opa-less")
  
    document.querySelector(".outer3").classList.remove("outer-img")
    document.querySelector(".outer3").classList.add("opa-less")
  
    document.querySelector(".outer4").classList.add("outer-img")
    document.querySelector(".outer4").classList.remove("opa-less")
  
  }
  
  
  // let innerCursor = document.querySelector(".innerCursor");
  // let outerCursor = document.querySelector(".outerCursor");
  
  // document.addEventListener('mouseover', moveCursor)
  
  // function moveCursor(e){
  //     let x = e.clientX;
  //     let y = e.clientY;
  //     // console.log(x,y)
  //     innerCursor.style.left = `${x}px`
  //     innerCursor.style.top = `${y}px`
  //     outerCursor.style.left = `${x}px`
  //     outerCursor.style.top = `${y}px`
  
  // }
  
  // let link1 = Array.from(document.querySelectorAll('a'))
  
  // link1.forEach((link1)=>{
  //     link1.addEventListener("mouseover", () => {
  //         outerCursor.classList.add("grow")
  //     })
  //     link1.addEventListener("mouseover", () => {
  //         outerCursor.classList.remove("grow")
  //     })
  // })
  // let link2 = Array.from(document.querySelectorAll('button'))
  
  // link2.forEach((link2)=>{
  //     link2.addEventListener('mouseover', () => {
  //         innerCursor.classList.add("grow")
  //     })
  //     link2.addEventListener('sssmouseover', () => {
  //         innerCursor.classList.remove("grow")
  //     })
  // })
  
  
  
  function btn_switch(){
      let btn1 = document.querySelector(".soundraw-pricing-section-inner-navbar-second-section-btn1")
      btn1.classList.add("background-pricing-btn")
      let btn2 = document.querySelector(".soundraw-pricing-section-inner-navbar-second-section-btn2")
      btn2.classList.remove("background-pricing-btn")
      let mul_text = document.querySelector(".soundraw-pricing-section-inner-navbar-second-section-text1")
      mul_text.classList.remove("multicolor-text")
      mul_text.classList.add("mul-color-text")
  }
  
  function btn_switch2(){
    let btn1 = document.querySelector(".soundraw-pricing-section-inner-navbar-second-section-btn1")
    btn1.classList.remove("background-pricing-btn")
    let btn2 = document.querySelector(".soundraw-pricing-section-inner-navbar-second-section-btn2")
    btn2.classList.add("background-pricing-btn")
    let mul_text = document.querySelector(".soundraw-pricing-section-inner-navbar-second-section-text1")
    mul_text.classList.remove("mul-color-text")
    mul_text.classList.add("multicolor-text")
  
  }


function monthly(){
  let first_data = document.querySelector("#soundraw-pricing-section-inner-cards-1-box2")
  first_data.innerHTML = "$19<sup>.99</sup>"
  let second_data = document.querySelector("#soundraw-pricing-section-inner-cards-3-box2")
  second_data.innerHTML = "$39<sup>.99</sup>"
}
function anually(){
  let first_data = document.querySelector("#soundraw-pricing-section-inner-cards-1-box2")
  first_data.innerHTML = "$16<sup>.99</sup>"
  let second_data = document.querySelector("#soundraw-pricing-section-inner-cards-3-box2")
  second_data.innerHTML = "$29<sup>.99</sup>"
}
