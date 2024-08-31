document.getElementById("ans_submit").addEventListener("click", test);
var lookans = document.getElementById("look_ans");
var i = 0;

function test(){
    var x_1 = document.getElementById("fun_1").value;
    var x_2 = document.getElementById("fun_2").value;
    var x_3 = document.getElementById("fun_3").value;
    var x_4 = document.getElementById("fun_4").value;
    var x_5 = document.getElementById("fun_5").value;

    var ans_1= "#include<stdio.h>";
    var ans_2= "int main(void){";
    var ans_3= "printf(\"請輸入任意且互不相等的四個數字：\");";
    var ans_4= "return 0;";
    var ans_5= "}";
    document.querySelector('.testBox').style.boxShadow = "0 0 30px rgba(136, 201, 153, 0.5)";

    if(x_1 == ans_1){
       if(x_2 == ans_2){
            if(x_3 == ans_3){
               if(x_4 == ans_4){
                  if(x_5 == ans_5){
                        document.getElementById("fun_1").style.backgroundColor="black";
                        document.getElementById("fun_2").style.backgroundColor="black";
                        document.getElementById("fun_3").style.backgroundColor="black";
                        document.getElementById("fun_4").style.backgroundColor="black";
                        document.getElementById("fun_5").style.backgroundColor="black";
                        alert("答對了");
                    }
                    else{
                        alert("再想想喔");
                        document.getElementById("fun_1").style.backgroundColor="black";
                        document.getElementById("fun_2").style.backgroundColor="black";
                        document.getElementById("fun_3").style.backgroundColor="black";
                        document.getElementById("fun_4").style.backgroundColor="black";
                        // document.getElementById("fun_5").style.boxShadow="0 0 10px rgba(198, 40, 40, 0.5)";
                        document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
                    }
                }
                else{
                    alert("再想想喔");
                    document.getElementById("fun_1").style.backgroundColor="black";
                    document.getElementById("fun_2").style.backgroundColor="black";
                    document.getElementById("fun_3").style.backgroundColor="black";
                    // document.getElementById("fun_4").style.backgroundColor="#C62828";
                    document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";;
                }
            }
            else{
                alert("再想想喔");
                document.getElementById("fun_1").style.backgroundColor="black";
                document.getElementById("fun_2").style.backgroundColor="black";
                // document.getElementById("fun_3").style.backgroundColor="#C62828";
                document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
            }
        }
        else{
            alert("再想想喔");
            document.getElementById("fun_1").style.backgroundColor="black";
            // document.getElementById("fun_2").style.backgroundColor="#C62828";
            document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
        }
    }
    else{
        alert("再想想喔");
        // document.getElementById("fun_1").style.backgroundColor="#C62828";
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
        document.getElementById("fun_1").value = "#include<stdio.h>";
        document.getElementById("fun_2").value = "int main(void){";
        document.getElementById("fun_3").value = "printf(\"請輸入任意且互不相等的四個數字：\");";
        document.getElementById("fun_4").value = "return 0;";
        document.getElementById("fun_5").value = "}";

    }
    else{
        document.getElementById("fun_1").value = "// 加上stdio.h標頭檔";
        document.getElementById("fun_2").value = "// 加上主函式main";
        document.getElementById("fun_3").value = "// 輸出：請輸入任意且互不相等的四個數字：";
        document.getElementById("fun_4").value = "// 程式正常結束";
        document.getElementById("fun_5").value = "// 大括號";
    }  
}