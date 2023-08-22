window.addEventListener('DOMContentLoaded', () => {
    let page = document.querySelector('.page');
    let wrapperSquares = document.querySelector('.items__wrapper');
    let squares = document.querySelectorAll('.item');
    wrapperSquares.style.top = window.innerHeight + 100 + 'px';
    page.style.top = '0px';
    page.style.height = window.innerHeight + (window.innerHeight * 0.6) + 'px';
     for(let i = 0;i<squares.length;i++) {
      squares[i].style.top = `${i + 1} * ${window.innerHeight * 0.6} + 'px'`;
    }
 
    window.addEventListener('wheel', pageMovement);
    // let stop = false;
    let pageStyleTop = 0;
    let wrapperStyleTop = 0;
    let square1 = 0;
    let square2 = 0;
    let square3 = 0;
    
    let squareRotate1 = 0;
    let squareRotate2 = 0;
    let squareRotate3 = 0;
    
    let coefficientPage = 1;
    let coefficientWrapper = 2;
    
    let coefficientSquare1 = 1;
    let coefficientSquare2 = 2;
    let coefficientSquare3 = 3;
    
    let itcorInit = [];
    for(let i = 0;i<squares.length;i++) {
        itcorInit[i] = parseInt(window.getComputedStyle(squares[i]).top);
    }

function pageMovement(e) {
    let step = e.wheelDeltaY / 4;
    if(Math.sign(step) == 1) {
        pageMovesDown(step);
    } else if(Math.sign(step) == -1) {
        pageMovesUp(step)
    }
}

   function pageMovesDown(step,pageUpInterval) {
    clearInterval(pageUpInterval);
    setTimeout(function() {
 let pageDownInterval = setInterval(function() {
                let pageTop = parseInt(window.getComputedStyle(page).top);
                  let coordinatesWrapper = parseInt(window.getComputedStyle(wrapperSquares).top);
                  let stop = false;
                  let squareCorrector = [];
                  for(let i = 0;i<squares.length;i++) {
                    squareCorrector[i] = parseInt(window.getComputedStyle(squares[i]).top)
                  } 
                                                        //page down
                                                        
                    if(Math.sign(step) == 1) {   
                            if(wrapperSquares.getBoundingClientRect().y + (parseInt(window.getComputedStyle(squares[0]).paddingTop) / 1.9) >= window.innerHeight / 2 && squareRotate3 >= 0) {
                                stop = true;
                            }
                            if(wrapperSquares.getBoundingClientRect().y + (parseInt(window.getComputedStyle(squares[0]).paddingTop) / 1.9) >= window.innerHeight / 2 && squareRotate1 == 0) {
                                stop = false;
                            }
                        if(page.getBoundingClientRect().y < 0 && stop == false) {
                          if(step >= 0) {
                          pageStyleTop = pageTop;
                          wrapperStyleTop = coordinatesWrapper;
                
                          square1 = squareCorrector[0];
                          square2 = squareCorrector[1];
                          square3 = squareCorrector[2];
                
                          pageStyleTop = pageStyleTop + coefficientPage;
                          wrapperStyleTop = wrapperStyleTop + coefficientWrapper;
                
                          let arr = [
                            square1 = square1 + coefficientSquare1,
                            i2 = square2 + coefficientSquare2,
                            square3 = square3 + coefficientSquare3,
                          ]
                
                          page.style.top = pageTop + 'px';
                          page.style.top = pageStyleTop + 'px';
                          wrapperSquares.style.top = coordinatesWrapper + 'px';
                          wrapperSquares.style.top = wrapperStyleTop + 'px';
                        
                                              // squeare init position
                
                        if(wrapperSquares.getBoundingClientRect().y > window.innerHeight / 2) {
                        for(let i = 0;i<squares.length;i++) {
                            if(parseInt(window.getComputedStyle(squares[i]).top) < itcorInit[i]) {
                                squares[i].style.top = arr[i] + 'px';
                            } else {
                             
                            }
                          }
                        }
                         step--;
                         if(step == 0) clearInterval(pageDownInterval);
                        }
                      } else if(page.getBoundingClientRect().y < 0 && stop == true) {
                        if(step>=0) {
                            rotateSquares(step);
                            step--;
                        }
                
                       } else {
                      clearInterval(pageDownInterval)
                    }
                    }
      }, 18);
    }, 10)
   
   }
   function pageMovesUp(step,pageDownInterval) {
       clearInterval(pageDownInterval)
       setTimeout(function() {
let pageUpInterval = setInterval(function() {
                let pageTop = parseInt(window.getComputedStyle(page).top);
                  let coordinatesWrapper = parseInt(window.getComputedStyle(wrapperSquares).top);
                  let stop = false
                  let squareCorrector = []
                  for(let i = 0;i<squares.length;i++) {
                    squareCorrector[i] = parseInt(window.getComputedStyle(squares[i]).top)
                  } 
                                                        //page up
                                                        
                  if(Math.sign(step) == -1) {
                            if(wrapperSquares.getBoundingClientRect().y + (parseInt(window.getComputedStyle(squares[0]).paddingTop) / 2) <= window.innerHeight / 1.9) {
                                stop = true;
                                }
                            if(wrapperSquares.getBoundingClientRect().y + (parseInt(window.getComputedStyle(squares[0]).paddingTop) / 2) <= window.innerHeight / 1.9 && squareRotate3 == 90) {
                                stop = false;
                            }
                        if(page.getBoundingClientRect().y + page.clientHeight - window.innerHeight > 0 && stop == false) {
                          page.style.top = pageTop + 'px';
                          wrapperSquares.style.top = coordinatesWrapper + 'px';
                
                          if(step <=0 ) {
                            
                          pageStyleTop = pageTop
                          wrapperStyleTop = coordinatesWrapper
                
                          square1 = squareCorrector[0]
                          square2 = squareCorrector[1]
                          square3 = squareCorrector[2]
                
                          pageStyleTop = pageStyleTop - coefficientPage
                          wrapperStyleTop = wrapperStyleTop - coefficientWrapper
                
                          let arr = [
                            square1 = square1 - coefficientSquare1,
                            i2 = square2 - coefficientSquare2,
                            square3 = square3 - coefficientSquare3,
                          ]
                   
                          page.style.top = (pageStyleTop) + 'px';
                          wrapperSquares.style.top = wrapperStyleTop + 'px';
                          
                            for(let i = 0;i<squares.length;i++) {
                          if(parseInt(window.getComputedStyle(squares[i]).top) > 0) {
                              squares[i].style.top = arr[i] + 'px';
                          }
                        
                        }
                        ++step;
                        if(step == 0) clearInterval(pageUpInterval);
                        }
                        
                      } else if(page.getBoundingClientRect().y + page.clientHeight - window.innerHeight > 0 && stop == true) {
                        if(step<=0) {
                                rotateSquares(step)
                            step++;
                        }
                       }  else {
                      clearInterval(pageUpInterval);
                      }
                    }
      }, 18);
       }, 50)
    
   }

    function rotateSquares(step) {   
        if(Math.sign(step) == -1) {;     //rotate right
            if(squareRotate1 < 90) {
                squareRotate1=squareRotate1+1;
                squares[0].style.transform =  `rotate(${squareRotate1 + "deg"}`;
              } else if(squareRotate2<90) {
                squareRotate2=squareRotate2+1
                squares[1].style.transform =  `rotate(${squareRotate2 + "deg"}`;
              } else if(squareRotate3<90) {
                squareRotate3=squareRotate3+1
                squares[2].style.transform =  `rotate(${squareRotate3 + "deg"}`;
                
              }
    
        } else if(Math.sign(step) == 1) {   //rotate left
            if(squareRotate3 > 0) {
                squareRotate3=squareRotate3-1;
                squares[2].style.transform =  `rotate(${squareRotate3 + "deg"}`;
              } else if(squareRotate2 > 0) {
                squareRotate2=squareRotate2-1
                squares[1].style.transform =  `rotate(${squareRotate2 + "deg"}`;
              } else if(squareRotate1 > 0) {
                squareRotate1=squareRotate1-1
                squares[0].style.transform =  `rotate(${squareRotate1 + "deg"}`;
              }
        }
    }
    
                                      // keyboard
    
    window.addEventListener('keydown',keydown)
        function keydown(e) {
      if(e.key === 'ArrowDown') {
      let step = -30
      pageMovesUp(step) 
      } else if(e.key === 'ArrowUp') {
      let step = 30
      pageMovesDown(step)
      }
    }
                                      // Mouse Drag'n'Drop

        let initMove
        let nextMove
    window.addEventListener('mousedown', mouseDown)
    function mouseDown(e) {
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseup', mouseUp)
        initMove = e.clientY ;
      }
    function mouseUp() {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseup', mouseUp)
    }
    function mouseMove(e) {
      e.preventDefault()
      nextMove = e.clientY;
      if(initMove - nextMove > 20) {
           pageMovesUp(-10)
      } else if(initMove - nextMove < 20) {
          pageMovesDown(10)
      }
      // return false;
    }
                                              // TouchEvent

  window.addEventListener('touchstart', touchStart)
 
      function touchStart(e) {
          window.addEventListener('touchmove', touchMove)
          window.addEventListener('touchend', touchEnd)
          initMove = e.changedTouches[0].clientY 
        }
        function touchEnd() {
          window.removeEventListener('touchmove', touchMove)
          window.removeEventListener('touchend', touchEnd)
        }
        function touchMove(e) {
          // e.preventDefault()
          nextMove = e.changedTouches[0].clientY;
      if(initMove.toFixed(0) - nextMove.toFixed(0) > 1 && nextMove.toFixed(0)%4 == 0) {
          pageMovesUp(-30);
   } else if(initMove.toFixed(0) - nextMove.toFixed(0) < 1 && nextMove.toFixed(0)%4 == 0) {
       pageMovesDown(30)
   }
        }     


    })  // DOMContentLoaded