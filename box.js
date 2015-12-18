@keyframes rotCube {
  0%,
  100% {
    transform: translateX(-50%) translateY(-50%) rotateX(-35deg) rotateY(60deg) rotateZ(0deg);
    animation-timing-function: linear;
  }
  50% {
    transform: translateX(-50%) translateY(-50%) rotateX(-35deg) rotateY(30deg) rotateZ(0);
  }
}

@keyframes groundAnimation {
  0%,
  100% {
    background-position: 50% 0;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes topAnimation {
  0%,
  100% {
    background-position: 50% 0;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes leftAnimation {
  0%,
  100% {
    background: #111;
    background-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 200%);
    background-size: 200% 200%;
    background-position: -100% 100%;
  }
  50% {
    background: #888;
    background-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 200%);
    background-size: 200% 200%;
    background-position: 100% 100%;
  }
}

@keyframes shadowAnimation {
  0%,
  100% {
    box-shadow: 0px -100px 100px rgba(0, 0, 0, 1), 0px -20px 20px rgba(0, 0, 0, 1), 0px 0px 5px rgba(0, 0, 0, 1);
  }
  50% {
    box-shadow: 100px 0px 100px rgba(0, 0, 0, 1), 20px 0px 20px rgba(0, 0, 0, 1), 0px 0px 5px rgba(0, 0, 0, 1);
  }
}

@keyframes frontAnimation {
  0%,
  100% {
    background: #888;
    background-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 200%);
    background-size: 200% 200%;
    background-position: 0% 100%;
  }
  50% {
    background: #111;
    background-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 200%);
    background-size: 200% 200%;
    background-position: 200% 100%;
  }
}

body {
  background: black;
}

.center {
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  perspective: 1000px;
  perspective-origin: 0% 0%;
}

#ground,
#shadow {
  background: red;
  box-sizing: content-box;
  padding: 0;
  margin: 0;
  width: 1000px;
  height: 1000px;
  transform-style: preserve-3d;
  background: rgba(55, 55, 55, 1);
  transform-origin: 50% 50%;
  display: block;
  position: absolute;
  transform: translateX( -400px) translateY( -400px) rotateX( 90deg) translateZ( -100px);
}

#ground {
  background-image: radial-gradient(ellipse at center, rgba(255, 255, 255, .7) 0%, rgba(0, 0, 0, 1) 50%);
  background-size: 200% 200%;
  animation: groundAnimation 8s infinite;
}

#shadow {
  background: rgba(0, 0, 0, .2);
  width: 200px;
  height: 200px;
  transform: rotateX( 90deg) translateZ(-98px);
  box-shadow: -20px 0px 100px rgba(0, 0, 0, 1), 0px 0px 20px rgba(0, 0, 0, 1), 0px 0px 5px rgba(0, 0, 0, 1);
  box-shadow-blend-mode: color-dodge;
  animation: shadowAnimation 8s infinite;
}

#cube {
  width: 200px;
  height: 200px;
  position: absolute;
  transform-origin: 50% 50%;
  transform: translateX(-50%) translateY(-50%) rotateY(45deg);
  transform-style: preserve-3d;
  animation: rotCube 12s infinite;
}

#cube figure {
  box-sizing: content-box;
  padding: 0;
  margin: 0;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  background: rgba(0, 0, 0, .5);
  display: block;
  position: absolute;
  box-shadow-blend-mode: color-dodge;
  blend-mode: screen;
}

figure div {
  box-sizing: content-box;
  position: absolute;
  display: block;
  width: 200px;
  height: 200px;
  transform-origin: 50% 50%;
  display: block;
  position: absolute;
  background: rgba(0, 0, 0, .2);
  transform: scale(.8);
  box-shadow: 0px 0px 5px rgba(255, 255, 255, .5), inset 0px 0px 50px rgba(0, 0, 0, .4);
  box-shadow-blend-mode: color-dodge;
}

#cube .front {
  background: #888;
  transform: rotateY( 0deg) translateZ( 100px);
  background-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%);
  background-size: 300% 300%;
  animation: frontAnimation 8s infinite;
}

#cube .back {
  background: #000;
  transform: rotateX( 180deg) translateZ( 100px);
}

#cube .right {
  background: #000;
  transform: rotateY( 90deg) translateZ( 100px);
}

#cube .left {
  background: #333;
  transform: rotateY( -90deg) translateZ( 100px);
  background-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(255, 0, 0, 1) 80%);
  background-size: 300% 300%;
  animation: leftAnimation 8s infinite;
}

#cube .top {
  background: #ddd;
  transform: rotateX(90deg) translateZ( 100px);
  background-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%);
  background-size: 300% 300%;
  animation: topAnimation 8s infinite;
}

#cube .bottom {
  transform: rotateX( -90deg) translateZ( 100px);
}
