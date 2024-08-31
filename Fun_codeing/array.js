document.getElementById("ans_submit").addEventListener("click", test);
var lookans = document.getElementById("look_ans");
var i = 0;

function test(){
    var x_1 = document.getElementById("array_1").value;
    var x_2 = document.getElementById("array_2").value;

    var ans_1 = "int box[4];";
    var ans_2 = "scanf(\"%d%d%d%d\",&box[0], &box[1], &box[2], &box[3]);";
    document.querySelector('.testBox').style.boxShadow = "0 0 30px rgba(136, 201, 153, 0.5)";
    if(x_1 == ans_1){
       if(x_2 == ans_2){
            document.getElementById("array_1").style.backgroundColor="black";
            document.getElementById("array_2").style.backgroundColor="black";
            alert("答對了");
        }
        else{
            alert("再想想喔");
            document.getElementById("array_1").style.backgroundColor="black";
            // document.getElementById("array_2").style.backgroundColor="#C62828";
            document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
        }
    }
    else{
        alert("再想想喔");
        // document.getElementById("array_1").style.backgroundColor="#C62828";
        document.querySelector('.testBox').style.boxShadow = "10px 10px 70px rgba(198, 40, 40, 0.5)";
    }
}

lookans.onclick=function(){
    i++;
    if(i%2 == 1){
        document.getElementById("array_1").value = "int box[4];";
        document.getElementById("array_2").value = "scanf(\"%d%d%d%d\",&box[0], &box[1], &box[2], &box[3]);";
    }
    else{
        document.getElementById("array_1").value = "int num_1, num_2, num_3, num_4;";
        document.getElementById("array_2").value = "scanf (\"%d%d%d%d\",&num_1, &num_2, &num_3, &num_4); ";
    }  
}