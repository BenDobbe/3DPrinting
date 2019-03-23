<template>
<div id="page">
<div class="wrapper">
  <div class="before">
    <img class="content-image" src="https://cdn1.epicgames.com/ue/item/SteamLocomotive_Screenshot01-1920x1080-ef8f29fff5663738d9370bbda20da1a4.png" draggable="false"/>   </div>
  <div class="after">
    <img class="content-image" src="https://i.pinimg.com/originals/d2/34/59/d23459c64677cf33f5435d2d3a868007.jpg" draggable="false"/>
  </div>
  <div class="scroller">
    <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><polygon points="0 50 37 68 37 32 0 50" style="fill:#fff"/><polygon points="100 50 64 32 64 68 100 50" style="fill:#fff"/></svg>
  </div>
</div>
</div>
</template>

<script>
    export default {
        mounted () {
 // I hope this over-commenting helps. Let's do this!
            // Let's use the 'active' variable to let us know when we're using it
            let active = false;

            // First we'll have to set up our event listeners
            // We want to watch for clicks on our scroller
            document.querySelector('.scroller').addEventListener('mousedown',function(){
            active = true;
            // Add our scrolling class so the scroller has full opacity while active
            document.querySelector('.scroller').classList.add('scrolling');
            });
            // We also want to watch the body for changes to the state,
            // like moving around and releasing the click
            // so let's set up our event listeners
            document.body.addEventListener('mouseup',function(){
            active = false;
            document.querySelector('.scroller').classList.remove('scrolling');
            });
            document.body.addEventListener('mouseleave',function(){
            active = false;
            document.querySelector('.scroller').classList.remove('scrolling');
            });

            // Let's figure out where their mouse is at
            document.body.addEventListener('mousemove',function(e){
            if (!active) return;
            // Their mouse is here...
            let x = e.pageX;
            // but we want it relative to our wrapper
            x -= document.querySelector('.wrapper').getBoundingClientRect().left;
            // Okay let's change our state
            scrollIt(x);
            });

            // Let's use this function
            function scrollIt(x){
                let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
                document.querySelector('.after').style.width = transform+"px";
                document.querySelector('.scroller').style.left = transform-25+"px";
            }

            // Let's set our opening state based off the width, 
            // we want to show a bit of both images so the user can see what's going on
            let screenHalfWidth = screen.width / 2
            scrollIt(screenHalfWidth);

            // And finally let's repeat the process for touch events
            // first our middle scroller...
            document.querySelector('.scroller').addEventListener('touchstart',function(){
            active = true;
            document.querySelector('.scroller').classList.add('scrolling');
            });
            document.body.addEventListener('touchend',function(){
            active = false;
            document.querySelector('.scroller').classList.remove('scrolling');
            });
            document.body.addEventListener('touchcancel',function(){
            active = false;
            document.querySelector('.scroller').classList.remove('scrolling');
            });
        }
    }
</script>

<style lang="scss" scoped>
    #page{
    width:100%;
    height:100%;
    background:#eee;
    }

    *{
    margin:0;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    /* Our wrapper */
    .wrapper{
    width: 100%;
    height: 100%;
    max-height:100vh;
    position: absolute;
    left:50%;
    top:50%;
    transform:translate3d(-50%,-50%,0);
    overflow:hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    /* Our image information */
    .before,
    .after {
    width:100%;
    height:100%;
    background-repeat:no-repeat;
    background-color: white;
    background-size: cover;
    background-position: center;
    position: absolute;
    top:0;
    left:0;
    pointer-events:none;
    overflow: hidden;
    }

    .after{
    width:125px;
    }

    .scroller{
    width: 50px;
    height:50px;
    position: absolute;
    left:100px;
    top:50%;
    transform:translateY(-50%);
    border-radius:50%;
    background-color: #fff;
    opacity:0.9;
    transition: opacity 0.12s ease-in-out;
    pointer-events:auto;
    cursor: pointer;
    box-shadow: 3.5px 0px 7px rgba(100, 100, 100, 0.2);
    }

    .scroller:hover{
    opacity:1;
    }

    .scrolling{
    pointer-events:none;
    opacity:1;
    }

    .scroller__thumb{
    width:100%;
    height:100%;
    padding:5px;
    }

    .scroller:before,
    .scroller:after{
    content:" ";
    display: block;
    width: 7px;
    height: 9999px;
    position: absolute;
    left: 50%;
    margin-left: -3.5px;
    z-index: 30;
    transition:0.1s;
    }
    .scroller:before{
    top:100%;
    }
    .scroller:after{
    bottom:100%;
    }
    /* If you want to cahnge the colors, make sure you change the fill in the svgs to match */
    .scroller{
    border: 5px solid #fff;
    }
    .scroller:before,
    .scroller:after{
    background: #fff;
    }
    .hero {
        width: 100%;
        height: 100vh;
        display: flex;
        
        @include breakpoint(mobile) {
            height: 600px;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
        }
        
        &__content {
            margin-left: 5rem;
            font-weight: 700;
            line-height: 1.4;
            max-width: 550px;

            @include breakpoint(mobile) {
                margin-left: 1.5rem;
                margin-right: 1.5rem;
            }
        }

        &__intro {
            max-width: 450px;
            margin-bottom: 3rem;

            @include breakpoint(mobile) {
                max-width: none;
            }
        }

        &__image {
            width: 35%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -45%);
            animation: floating 4000ms ease-in-out 0s infinite normal;

            @include breakpoint(mobile) {
                display: none;
            }
        }

        &__block--left {
            display: flex;
            align-items: center;
            flex: 1 50%;

            @include breakpoint(mobile) {
                flex: 1 100%;
            }
        }

        &__block--right {
            flex: 1 50%;
            background-color: $color-grey;

            @include breakpoint(mobile) {
                display: none;
            }
        }
    }

    @keyframes floating {
        0% {
            transform: translate(-50%, -45%);	
        }
        50% {
            transform: translate(-50%, -48%);	
        }	
        100% {
            transform: translate(-50%, -45%);
        }			
    }
</style>
