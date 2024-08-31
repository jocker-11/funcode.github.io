document.getElementById("ans_submit").addEventListener("click", test);
var lookans = document.getElementById("look_ans");
var i = 0;

function test(){
    var x_1 = document.getElementById("for_1").value;
    var x_2 = document.getElementById("for_2").value;
    var x_3 = document.getElementById("for_3").value;
    var x_4 = document.getElementById("for_4").value;
    var x_5 = document.getElementById("for_5").value;
    var x_6 = document.getElementById("for_6").value;
    var x_7 = document.getElementById("for_7").value;
    var x_8 = document.getElementById("for_8").value;

    var ans_1= "int box[4], i, n;";
    var ans_2= "for(i=0;i<4;i++){";
    var ans_3= "scanf(\"%d\",&box[i]);";
    var ans_4= "}";
    var ans_5= "for(i=0;i<3;i++){";
    var ans_6="for(n=0;n<3;n++){"
    var ans_7= "}";
    var ans_8= "}";
    document.querySelector('.testBox').style.boxShadow = "0 0 30px rgba(136, 201, 153, 0.5)";

    if(x_1 == ans_1){
       if(x_2 == ans_2){
           if(x_3 == ans_3){
               if(x_4 == ans_4){
                  if(x_5 == ans_5){
                    if(x_6 == ans_6){
                        if(x_7 == ans_7){
                            if(x_8 == ans_8){
                                document.getElementById("for_1").style.backgroundColor="black";
                                document.getElementById("for_2").style.backgroundColor="black";
                                document.getElementById("for_3").style.backgroundColor="black";
                                document.getElementById("for_4").style.backgroundColor="black";
                                document.getElementById("for_5").style.backgroundColor="black";
                                document.getElementById("for_6").style.backgroundColor="black";
                                document.getElementById("for_7").style.backgroundColor="black";
                                document.getElementById("for_8").style.backgroundColor="black";
                                alert("答對了");
                            }
                            else{
                                alert("再想想喔");
                                document.getElementById("for_1").style.backgroundColor="black";
                                document.getElementById("for_2").style.backgroundColor="black";
                                document.getElementById("for_3").style.backgroundColor="black";
                                document.getElementById("for_4").style.backgroundColor="black";
                                document.getElementById("for_5").style.backgroundColor="black";
                                document.getElementById("for_6").style.backgroundColor="black";
                                document.getElementById("for_7").style.backgroundColor="black";
                                document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
                            }
                        }
                        else{
                            alert("再想想喔");
                            document.getElementById("for_1").style.backgroundColor="black";
                            document.getElementById("for_2").style.backgroundColor="black";
                            document.getElementById("for_3").style.backgroundColor="black";
                            document.getElementById("for_4").style.backgroundColor="black";
                            document.getElementById("for_5").style.backgroundColor="black";
                            document.getElementById("for_6").style.backgroundColor="black";
                            document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
                        }
                     }
                     else{
                        alert("再想想喔");
                        document.getElementById("for_1").style.backgroundColor="black";
                        document.getElementById("for_2").style.backgroundColor="black";
                        document.getElementById("for_3").style.backgroundColor="black";
                        document.getElementById("for_4").style.backgroundColor="black";
                        document.getElementById("for_5").style.backgroundColor="black";
                        document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
                     }
                    }
                    else{
                        alert("再想想喔");
                        document.getElementById("for_1").style.backgroundColor="black";
                        document.getElementById("for_2").style.backgroundColor="black";
                        document.getElementById("for_3").style.backgroundColor="black";
                        document.getElementById("for_4").style.backgroundColor="black";
                        document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
                    }
                }
                else{
                    alert("再想想喔");
                    document.getElementById("for_1").style.backgroundColor="black";
                    document.getElementById("for_2").style.backgroundColor="black";
                    document.getElementById("for_3").style.backgroundColor="black";
                    document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
                }
            }
            else{
                alert("再想想喔");
                document.getElementById("for_1").style.backgroundColor="black";
                document.getElementById("for_2").style.backgroundColor="black";
                document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
            }
        }
        else{
            alert("再想想喔");
            document.getElementById("for_1").style.backgroundColor="black";
            document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
        }
    }
    else{
        alert("再想想喔");
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
        document.getElementById("for_1").value = "int box[4], i, n;";
        document.getElementById("for_2").value = "for(i=0;i<4;i++){";
        document.getElementById("for_3").value = "scanf(\"%d\",&box[i]);";
        document.getElementById("for_4").value = "}";
        document.getElementById("for_5").value = "for(i=0;i<3;i++){";
        document.getElementById("for_6").value = "for(n=0;n<3;n++){";
        document.getElementById("for_7").value = "}";
        document.getElementById("for_8").value = "}";
    }
    else{
        document.getElementById("for_1").value = "int box[4];";
        document.getElementById("for_2").value = "// 用for迴圈做重複輸入的動作";
        document.getElementById("for_3").value = "scanf (\"%d%d%d%d\";,&box[0].&box[1],&box[2],&box[3]);";
        document.getElementById("for_4").value = "// 第一層for迴圈";
        document.getElementById("for_5").value = "// 第二層for迴圈";
        document.getElementById("for_6").value = "// 第二層for迴圈";
        document.getElementById("for_7").value = "// 第二層的大括弧";
        document.getElementById("for_8").value = "// 第一層的大括弧";
    }  
}