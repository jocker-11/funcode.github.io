document.getElementById("ans_submit").addEventListener("click", test);
var lookans = document.getElementById("look_ans");
var i = 0;

function test(){
    var x_1 = document.getElementById("input_1").value;
    var x_2 = document.getElementById("input_2").value;

    var ans_1= "int num_1, num_2, num_3, num_4;";
    var ans_2= "scanf(\"%d%d%d%d\",&num_1, &num_2, &num_3, &num_4);";
    document.querySelector('.testBox').style.boxShadow = "0 0 30px rgba(136, 201, 153, 0.5)";

    if(x_1 == ans_1){
       if(x_2 == ans_2){
            document.getElementById("input_1").style.backgroundColor="black";
            document.getElementById("input_2").style.backgroundColor="black";
            alert("答對了");
        }
        else{
            alert("再想想喔");
            document.getElementById("input_1").style.backgroundColor="black";
            // document.getElementById("input_2").style.backgroundColor="#C62828";
            document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
        }
    }
    else{
        alert("再想想喔");
        // document.getElementById("input_1").style.backgroundColor="#C62828";
        document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
    }
}

lookans.onclick=function(){
    i++;
    if(i%2 == 1){
        document.getElementById("input_1").value = "int num_1, num_2, num_3, num_4;";
        document.getElementById("input_2").value = "scanf(\"%d%d%d%d\",&num_1, &num_2, &num_3, &num_4);";
    }
    else{
        document.getElementById("input_1").value = "// 宣告四個整數變數";
        document.getElementById("input_2").value = "// 將四個變數做輸入的動作";
    }  
}