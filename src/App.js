import "./App.css";
import Navigation from "./Navigation.js";
import Homepage from "./Homepage.js";
import About from "./About.js";
import Projects from "./Projects.js";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import Contact from "./Contact";

import weblogo from "./images/weblogo.svg";

function App() {
  // const parallax = (e) => {
  //   document.querySelectorAll(".shapes").forEach((function(move){
  //     const moving_value = move.getAttribute("data-value");
  //     const x = (e.clientX * moving_value)/250;
  //     const y = (e.clientY * moving_value)/250;

  //     move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //   }))
  // }

  // document.addEventListener("mousemove",parallax);

  return (
    <div className="App">
      {/* <div className="websitelogo">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          viewBox="0 0 2048 2048"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,2048.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M9880 16743 c-335 -25 -560 -52 -815 -99 -1742 -316 -3283 -1334
-4260 -2814 -589 -891 -941 -1889 -1052 -2980 -25 -251 -25 -969 0 -1220 96
-947 377 -1830 836 -2629 599 -1041 1462 -1888 2516 -2468 349 -192 690 -340
1095 -473 1169 -386 2394 -434 3598 -139 112 27 209 54 215 59 7 5 59 34 117
63 336 171 765 511 1201 953 362 367 539 591 708 899 151 275 278 652 342
1011 27 150 37 493 20 640 -41 345 -157 646 -374 972 -130 194 -190 267 -361
438 -170 170 -265 248 -446 369 -308 206 -575 314 -1145 465 -531 140 -760
221 -1005 352 -660 355 -1084 941 -1185 1640 -47 320 -21 775 61 1063 45 159
160 333 334 506 521 516 1463 879 2220 857 139 -5 168 -9 280 -41 884 -250
1609 -822 2118 -1670 401 -668 642 -1454 729 -2377 25 -262 25 -993 0 -1265
-103 -1121 -395 -2157 -895 -3175 -129 -263 -124 -250 -112 -250 16 0 309 290
436 430 967 1070 1545 2394 1674 3835 18 198 24 700 11 920 -91 1547 -710
2981 -1778 4117 -208 222 -496 485 -588 538 -24 14 -99 68 -165 120 -295 232
-649 457 -1015 645 l-160 82 -145 19 c-194 25 -728 25 -957 0 -359 -39 -699
-117 -1073 -244 -910 -312 -1517 -693 -2103 -1320 -176 -187 -280 -313 -510
-614 -458 -597 -682 -993 -843 -1488 -162 -496 -249 -1178 -191 -1500 56 -310
186 -674 340 -955 224 -409 497 -708 877 -959 318 -211 615 -343 1180 -526
688 -222 854 -282 1060 -385 288 -144 486 -327 596 -550 67 -135 87 -231 82
-379 -4 -98 -10 -137 -33 -205 -107 -316 -417 -593 -905 -809 -221 -98 -406
-158 -635 -206 -763 -159 -1445 -2 -2220 509 -467 308 -867 690 -1279 1220
-161 207 -161 207 -227 365 -169 404 -316 941 -378 1375 -75 525 -75 1070 -1
1675 140 1133 508 2075 1138 2913 262 348 471 573 887 955 496 455 1096 912
1540 1171 175 103 524 279 715 361 190 82 219 105 220 178 l0 32 -122 -2 c-68
-1 -143 -3 -168 -5z"
            />
          </g>
        </svg>
      </div> */}
      <div className="headerSection"></div>
      <section className="section section1">
        <div className="vskew vskew-red">
          <div className="container">
            {/* <div className="cloudContainer">
            <div className="cloud"></div>
            </div> */}
            <div className="headingNameSection">
              <h1 className="headingNameBottom">Lavanya Sood</h1>
              <h1 className="headingNameTop">Lavanya Sood</h1>
            </div>

            <div class="bubble">Software Developer</div> 
          </div>
        </div>
      </section>

      <section className="section section2">
        <div className="vskew vskew-yellow">
          <div className="container">
            <h1>about me</h1>
          </div>
        </div>
      </section>

      <section className="section section3">
        <div className="vskew vskew-blue">
          <div className="container">
            <h1>projects</h1>
          </div>
        </div>
      </section>

      <section className="section section4">
        <div className="vskew vskew-green">
          <div className="container">
            <h1>contact</h1>
          </div>
        </div>
      </section>

      {/* <BrowserRouter>
          <Routes>
              <Route path="/about" element={<About/>}/>
              <Route exact path="/projects" element={<Projects/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/" element={<Homepage/>}/>
          </Routes>
          <Navigation/>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
