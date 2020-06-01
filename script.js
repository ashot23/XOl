
// var mej = document.getElementsByClassName("div0")

// for (let s = 0; s < mej.length; s++) {


  

//   mej[s].onclick =  function games(params) {
   












var X = 0
var O = 0
var gameX = 0
var gameX1 = 0
var gameX2 = 0
var gameX3 = 0
var gameX4 = 0
var gameX5 = 0
var gameX6 = 0
var gameX7 = 0
var gameO = 0
var gameO1 = 0
var gameO2 = 0
var gameO3 = 0
var gameO4 = 0
var gameO5 = 0
var gameO6 = 0
var gameO7 = 0
 var en9 = 0


function gic(id1,id2,id3,nk) {
  var xs1 = document.getElementById(id1)
  var xs2 = document.getElementById(id2)
  var xs3= document.getElementById(id3)
  xs1.style.backgroundImage = "url('IMG/"+nk+"-.jpg')"
  xs2.style.backgroundImage = "url('IMG/"+nk+"-.jpg')"
  xs3.style.backgroundImage = "url('IMG/"+nk+"-.jpg')"
}



 function imga(params){
   var nk = document.getElementsByClassName("ico")
  var img = document.createElement("img")
  img.setAttribute("class","ico")
  img.setAttribute("align","center")
  document.body.append(img)
  img.src =  params 
    if (nk[1]) {
      document.body.removeChild(nk[0])
    }
 }





function win() {

var sdiv = document.getElementsByClassName("div0")

for (let i = 0; i < sdiv.length; i++) {
  sdiv[i].onclick = "None"
  
}

setTimeout(() => {
  
alert("Հախտանակ")
end()
}, 800);

}




function end() {
  var nkar = document.getElementsByClassName("ico")
  if (nkar[0]) {
    document.body.removeChild(nkar[0])
    console.log(nkar);
  }



    X = 0
     O = 0
     gameX = 0
     gameX1 = 0
     gameX2 = 0
     gameX3 = 0
     gameX4 = 0
     gameX5 = 0
     gameX6 = 0
     gameX7 = 0
     gameO = 0
     gameO1 = 0
     gameO2 = 0
     gameO3 = 0
     gameO4 = 0
     gameO5 = 0
     gameO6 = 0
     gameO7 = 0
en9 = 0
    for (let x = 0; x < mej.length; x++) {
        if (document.getElementById(x)) {
            mej[x].removeChild(document.getElementById(x))
        }
             

         }

         for (let s = 0; s < mej.length; s++) {


    

            mej[s].onclick =  function games(params) {
              console.log(mej[s]);
                en9++


                var d = document.createElement("div") 
                mej[s].appendChild(d)
                d.setAttribute("class","div1")
                d.setAttribute("id",s)
                var sha = document.getElementById(s)
                 
             
        
               
                this.onclick = "None"

                if (en9==9) {
                    console.log('esim');    
                    setTimeout(() => {
                      end()
                    }, 300);           
                   
                    en9 =0
                }
         


                   if (X==0&&O==0) {
                       d.setAttribute("class","X")
                       imga("IMG/o.jpg")
                       O=1
                   


                     if (sha.id==0||sha.id==1||sha.id==2) {
                              gameX++  
                             
                              if (sha.id==0) {
                                gameX3++ 
                                gameX6++ 
                              
                                if (gameX3==3) {
                                    win()
                                gic(0,3,6,"X1")
                                  console.log('X3');
                                  
                                }
                                if (gameX6==3) {
                                    win()
                                    gic(0,4,8,"X2")
                                }
                              }
                           else  if (sha.id==1) {
                                gameX4++ 
                              
                                if (gameX4==3) {
                                    win()
                                    gic(1,4,7,"X1")
                                }
                              }     
                              else  if (sha.id==2) {
                                gameX5++ 
                                gameX7++ 
                                if (gameX7==3) {
                                    win()
                                    gic(2,4,6,"X3")
                                }
                                if (gameX5==3) {
                                    win()
                                    gic(2,5,8,"X1")
                                }
                              }
                                  
        
        
                                
                         if (gameX==3) {
                            win()
                         gic(0,1,2,"X")
        
                            
                         }
                        
        
                     }   
                     
                     
                 else  if (sha.id==3||sha.id==4||sha.id==5) {
                        gameX1++    
                        
                        if (sha.id==3) {
                            gameX3++ 
                            
                        
                            if (gameX3==3) {
                                win()
                                gic(0,3,6,"X1")
                            }
                          }
                           else  if (sha.id==4) {
                            gameX4++ 
                            gameX6++ 
                            gameX7++ 
                            if (gameX7==3) {
                                win()
                                gic(2,4,6,"X3")
                            }
                            if (gameX4==3) {
                                win()
                                gic(1,4,7,"X1")
                            }
                            if (gameX6==3) {
                                win()
                                gic(0,4,8,"X2")
                            }
                          }
        
                          else  if (sha.id==5) {
                            gameX5++ 
                          
                            if (gameX5==3) {
                                win()
                                gic(2,5,8,"X1")
                            }
                          }
                              
        
        
        
                   if (gameX1==3) {
                    win()
                    gic(3,4,5,"X")
                   }
               }
               else  if (sha.id==6||sha.id==7||sha.id==8) {
                gameX2++    
                
                if (sha.id==6) {
                    gameX3++ 
                    gameX7++ 
                    if (gameX7==3) {
                        win()
                        gic(2,4,6,"X3")
                        
                    }
              
                    if (gameX3==3) {
                        win()
                        gic(0,3,6,"X1")
                    }
                  }
                  else  if (sha.id==7) {
                    gameX4++ 
                  
                    if (gameX4==3) {
                        win()
                        gic(1,4,7,"X1")
                    }
                  }
                  else  if (sha.id==8) {
                    gameX5++ 
                    gameX6++
                    if (gameX5==3) {
                        win()
                        gic(2,5,8,"X1")
                    }
        
                    if (gameX6==3) {
                        win()
                        gic(0,4,8,"X2")
                    }
                  }
                      
        
        
           if (gameX2==3) {
            win()
            gic(6,7,8,"X")
           }
        }
        
        
          
        
        
        
        
                   
                 
        
                   }
                  else if (X==0&&O==1) {
                    d.setAttribute("class","O")
                    imga("IMG/X.jpg")
                 

                    O=0  
                      if (sha.id==0||sha.id==1||sha.id==2) {
                               gameO++  
                              
                               if (sha.id==0) {
                                 gameO3++ 
                                 gameO6++ 
                               
                                 if (gameO3==3) {
                                    win()
                                    gic(0,3,6,"o1")
                                 }
                                 if (gameO6==3) {
                                    win()
                                    gic(0,4,8,"o2")
                                 }
                               }
                            else  if (sha.id==1) {
                                 gameO4++ 
                               
                                 if (gameO4==3) {
                                    win()
                                    gic(1,4,7,"o1")
                                 }
                               }     
                               else  if (sha.id==2) {
                                 gameO5++ 
                                 gameO7++ 
                                 if (gameO7==3) {
                                    win()
                                    gic(2,4,6,"X3")
                                 }
                                 if (gameO5==3) {
                                    win()
                                    gic(2,5,8,"o1")
                                 }
                               }
                                   
         
         
                                 
                          if (gameO==3) {
                            win()
                     gic(0,1,2,"o")
                          }
                         
         
                      }   
                      
                      
                  else  if (sha.id==3||sha.id==4||sha.id==5) {
                         gameO1++    
                         
                         if (sha.id==3) {
                             gameO3++ 
                             
                          
                             if (gameO3==3) {
                                win()
                                gic(0,3,6,"o1")
                             }
                           }
                            else  if (sha.id==4) {
                             gameO4++ 
                             gameO6++ 
                             gameO7++ 
                             if (gameO7==3) {
                                win()
                                gic(2,4,6,"o3")
                             }
                             if (gameO4==3) {
                                win()
                                gic(1,4,7,"o1")
                             }
                             if (gameO6==3) {
                                win()
                                gic(0,4,8,"o2")
                             }
                           }
         
                           else  if (sha.id==5) {
                             gameO5++ 
                           
                             if (gameO5==3) {
                                win()
                                gic(2,5,8,"o1")
                             }
                           }
                               
         
         
         
                    if (gameO1==3) {
                        win()
                        gic(3,4,5,"o")
                    }
                }
                else  if (sha.id==6||sha.id==7||sha.id==8) {
                 gameO2++    
                 
                 if (sha.id==6) {
                     gameO3++ 
                     gameO7++ 
                     if (gameO7==3) {
                        win()
                        gic(2,4,6,"o3")
                     }
                    
                     if (gameO3==3) {
                         win()
                         gic(0,3,6,"o1")
                     }
                   }
                   else  if (sha.id==7) {
                     gameO4++ 
                   
                     if (gameO4==3) {
                        win()
                        gic(1,4,7,"o1")
                     }
                   }
                   else  if (sha.id==8) {
                     gameO5++ 
                     gameO6++
                     if (gameO5==3) {
                        win()
                        gic(2,5,8,"o1")
                     }
         
                     if (gameO6==3) {
                        win()
                        gic(0,4,8,"o2")
                     }
                   }
                       
         
         
            if (gameO2==3) {
                win()
                gic(6,7,8,"o")
            }
         }
        
        
        
        
        
        
        
        }
        
        
        
        
        
        
        
        
        
        
        
                           
        
        
        
        
        
        
        
        }
        
        
        
        
        
                
        
            } 
           
            



}



for (let i = 0; i < 9; i++) {
    var divs = document.createElement("div") 
       div.appendChild(divs)
       divs.setAttribute("class","div0")
   
   
}


gameX = 0
gameX1 = 0
gameX2 = 0
gameX3 = 0
gameX4 = 0
gameX5 = 0
gameX6 = 0
gameX7 = 0
gameO = 0
gameO1 = 0
gameO2 = 0
gameO3 = 0
gameO4 = 0
gameO5 = 0
gameO6 = 0
gameO7 = 0
var mej = document.getElementsByClassName("div0")


  for (let s = 0; s < mej.length; s++) {


    

    mej[s].onclick =  function games() {
        console.log(mej[s]);
        en9++
        var d = document.createElement("div") 
        mej[s].appendChild(d)
        d.setAttribute("class","div1")
        d.setAttribute("id",s)
        var sha = document.getElementById(s)
        if (en9==9) {
            setInterval(() => {
              end()
            }, 400);
        
          
            en9 = 0
        }



       
        this.onclick = "None"
           if (X==0&&O==0) {
            imga("IMG/o.jpg")
               d.setAttribute("class","X")
               O=1
             if (sha.id==0||sha.id==1||sha.id==2) {
                      gameX++  
                      
                      if (sha.id==0) {
                        gameX3++ 
                        gameX6++ 
                      
                        if (gameX3==3) {
                            win()
                            gic(0,3,6,"X1")
                          
                        }
                        if (gameX6==3) {
                            win()
                            gic(0,4,8,"X2")
                        }
                      }
                   else  if (sha.id==1) {
                        gameX4++ 
                      
                        if (gameX4==3) {
                            win()
                            gic(2,4,6,"X3")
                        }
                      }     
                      else  if (sha.id==2) {
                        gameX5++ 
                        gameX7++ 
                        if (gameX7==3) {
                            win()
                            gic(2,4,6,"X3")
                        }
                        if (gameX5==3) {
                            win()
                            gic(2,5,8,"X1")
                        }
                      }
                          


                        
                 if (gameX==3) {
                    win()
                    gic(0,1,2,"X")

                    
                 }
                

             }   
             
             
         else  if (sha.id==3||sha.id==4||sha.id==5) {
                gameX1++    
                
                if (sha.id==3) {
                    gameX3++ 
                  
                    if (gameX3==3) {
                        win()
                        gic(0,3,6,"X1")
                    }
                  }
                   else  if (sha.id==4) {
                    gameX4++ 
                    gameX6++ 
                    gameX7++ 
                    if (gameX7==3) {
                        
                        win()
                        gic(2,4,6,"X3")
                    }
                    if (gameX4==3) {
                        win()
                        gic(1,4,7,"X1")
                    }
                    if (gameX6==3) {
                        win()
                        gic(0,4,8,"X2")
                    }
                  }

                  else  if (sha.id==5) {
                    gameX5++ 
                  
                    if (gameX5==3) {
                        win()
                        gic(2,5,8,"X1")
                    }
                  }
                      



           if (gameX1==3) {
            win()
            gic(3,4,5,"X")
           }
       }
       else  if (sha.id==6||sha.id==7||sha.id==8) {
        gameX2++    
        
        if (sha.id==6) {
            gameX3++ 
            gameX7++ 
            if (gameX7==3) {
                win()
                gic(2,4,6,"X3")
                
            }
      
            if (gameX3==3) {
                win()
                gic(0,3,6,"X1")
            }
          }
          else  if (sha.id==7) {
            gameX4++ 
          
            if (gameX4==3) {
                win()
                gic(1,4,7,"X1")
          }
          }
          else  if (sha.id==8) {
            gameX5++ 
            gameX6++
            if (gameX5==3) {
                win()
                
                gic(2,5,8,"X1")
            }

            if (gameX6==3) {
                win()
                gic(0,4,8,"X2")
            }
          }
              


   if (gameX2==3) {
    win()
    gic(6,7,8,"X")
   }
}


  




           
         

           }
          else if (X==0&&O==1) {
            
            d.setAttribute("class","O")
            imga("IMG/X.jpg")
            O=0  
              if (sha.id==0||sha.id==1||sha.id==2) {
                       gameO++  
                      
                       if (sha.id==0) {
                         gameO3++ 
                         gameO6++ 
                       
                         if (gameO3==3) {
                            win()
                            gic(0,3,6,"o1")
                         }
                         if (gameO6==3) {
                            win()
                            gic(0,4,8,"o2")
                         }
                       }
                    else  if (sha.id==1) {
                         gameO4++ 
                       
                         if (gameO4==3) {
                            win()
                            gic(1,4,7,"o1")
                         }
                       }     
                       else  if (sha.id==2) {
                         gameO5++ 
                         gameO7++ 
                         if (gameO7==3) {
                            win()
                            gic(2,4,6,"o3")
                         }
                         if (gameO5==3) {
                            win()
                            gic(2,5,8,"o1")
                         }
                       }
                           
 
 
                         
                  if (gameO==3) {
                    gic(0,1,2,"o")
                  }
                 
 
              }   
              
              
          else  if (sha.id==3||sha.id==4||sha.id==5) {
                 gameO1++    
                 
                 if (sha.id==3) {
                     gameO3++ 
                     
                  
                     if (gameO3==3) {
                        win()
                        gic(0,3,6,"o1")
                     }
                   }
                    else  if (sha.id==4) {
                     gameO4++ 
                     gameO6++ 
                     gameO7++ 
                     if (gameO7==3) {
                        win()
                        gic(2,4,6,"o3")
                     }
                     if (gameO4==3) {
                        win()
                        gic(1,4,7,"o1")
                     }
                     if (gameO6==3) {
                        win()
                        gic(0,4,8,"o2")
                     }
                   }
 
                   else  if (sha.id==5) {
                     gameO5++ 
                   
                  if (gameO5==3) {
                        win()
                        gic(2,5,8,"o1")
                     }
                   }
                       
 
 
 
            if (gameO1==3) {
                win()
                gic(3,4,5,"o")
            }
        }
        else  if (sha.id==6||sha.id==7||sha.id==8) {
         gameO2++    
         
         if (sha.id==6) {
             gameO3++ 
             gameO7++ 
             if (gameO7==3) {
                win()
                gic(2,4,6,"o3")
             }
            
             if (gameO3==3) {
                win()
                gic(0,3,6,"o1")
             }
           }
           else  if (sha.id==7) {
             gameO4++ 
           
             if (gameO4==3) {
                win()
                gic(1,4,7,"o1")
             }
           }
           else  if (sha.id==8) {
             gameO5++ 
             gameO6++
             if (gameO5==3) {
                win()
                gic(2,5,8,"o1")
             }
 
             if (gameO6==3) {
                win()
                gic(0,4,8,"o2")
             }
           }
               
 
 
    if (gameO2==3) {
        win()
        gic(6,7,8,"o")
    }
 }







}











                   







}





        

    } 
   
  



  


