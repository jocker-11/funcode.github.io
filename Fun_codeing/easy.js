document.getElementById("ans_submit").addEventListener("click", test);
var lookans = document.getElementById("look_ans");
var i = 0;

function test(){
    var x_1 = document.getElementById("box_1").value;
    var x_2 = document.getElementById("box_2").value;
    var x_3 = document.getElementById("box_3").value;
    var x_4 = document.getElementById("box_4").value;
    var x_5 = document.getElementById("box_5").value;

    var ans_1= "y;";
    var ans_2= "y=box[n+1];";
    var ans_3= "box[n+1]=box[n];";
    var ans_4= "box[n]=y;";
    var ans_5= "printf(\"%d\",box[i]);";
    document.querySelector('.testBox').style.boxShadow = "0 0 30px rgba(136, 201, 153, 0.5)";
    if(x_1 == ans_1){
       if(x_2 == ans_2){
            if(x_3 == ans_3){
               if(x_4 == ans_4){
                  if(x_5 == ans_5){
                        document.getElementById("box_1").style.backgroundColor="black";
                        document.getElementById("box_2").style.backgroundColor="black";
                        document.getElementById("box_3").style.backgroundColor="black";
                        document.getElementById("box_4").style.backgroundColor="black";
                        document.getElementById("box_5").style.backgroundColor="black";
                        alert("答對了");
                    }
                    else{
                        alert("再想想喔");
                        document.getElementById("box_1").style.backgroundColor="black";
                        document.getElementById("box_2").style.backgroundColor="black";
                        document.getElementById("box_3").style.backgroundColor="black";
                        document.getElementById("box_4").style.backgroundColor="black";
                        // document.getElementById("box_5").style.backgroundColor="#C62828";
                        document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
                    }
                }
                else{
                    alert("再想想喔");
                    document.getElementById("box_1").style.backgroundColor="black";
                    document.getElementById("box_2").style.backgroundColor="black";
                    document.getElementById("box_3").style.backgroundColor="black";
                    // document.getElementById("box_4").style.backgroundColor="#C62828";
                    document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
                }
            }
            else{
                alert("再想想喔");
                document.getElementById("box_1").style.backgroundColor="black";
                document.getElementById("box_2").style.backgroundColor="black";
                // document.getElementById("box_3").style.backgroundColor="#C62828";
                document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
            }
        }
        else{
            alert("再想想喔");
            document.getElementById("box_1").style.backgroundColor="black";
            // document.getElementById("box_2").style.backgroundColor="#C62828";
            document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
        }
    }
    else{
        alert("再想想喔");
        // document.getElementById("box_1").style.backgroundColor="#C62828";
        document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
    }
   
}

/*  var i = 0;
    i++;
    if(i%2 == 1){
        變形
    }
    else{
        還原
    }           */

lookans.onclick=function(){
    i++;
    if(i%2 == 1){
        document.getElementById("box_1").value = "y;";
        document.getElementById("box_2").value = "y=box[n+1];";
        document.getElementById("box_3").value = "box[n+1]=box[n];";
        document.getElementById("box_4").value = "box[n]=y;";
        document.getElementById("box_5").value = "printf(\"%d\",box[i]);";
    }
    else{
        document.getElementById("box_1").value = "// 加上變數 y ";
        document.getElementById("box_2").value = "// 簡易打包的部分";
        document.getElementById("box_3").value = "// 簡易打包的部分";
        document.getElementById("box_4").value = "// 簡易打包的部分";
        document.getElementById("box_5").value = "// 輸出排序完的結果";
    }  
}