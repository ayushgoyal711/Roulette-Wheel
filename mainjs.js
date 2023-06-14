var winningStreak=[1,2,3,4,5];
           
var blackarr=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

var checkAns=()=>{
const answers = document.querySelectorAll(".numbers");
// console.log(answers[0].innerText)
answers.forEach(curAns => {
for(var i=0;i<blackarr.length;i++){
if(curAns.innerText==blackarr[i]){
curAns.classList.add("black");
break;
    }
    else{
        curAns.classList.add("red");
}
}
 }); 
}
checkAns();



//Collecting Data

var check=()=>{
    var Balance=document.getElementById("BalanceDisplay");
    var Bid=document.getElementById("Bid");
    // console.log(Balance);
    // console.log(typeof(Bid));
    if(Bid.value=="0" || Bid.value>parseInt(Balance.innerText)){
    alert("Enter Valid Bid Amount");
    return 0;
}
    else
    Balance.innerText=Balance.innerText-Bid.value;

return 1;
}


var UpdateBalance=(n)=>{
    var Balance=document.getElementById("BalanceDisplay");
    var Bid=document.getElementById("Bid");
    Balance.innerHTML=parseInt(Balance.innerText)+parseInt(Bid.value)*n;
    document.getElementById("winningAmount").innerHTML=`you won ${Bid.value*n} chips`;          
  }



var DrawNo=()=>{
    document.getElementById("winningAmount").innerText=" ";
    var no=Math.floor((Math.random()*37))+0;
    document.getElementById("SpinNo").innerHTML=no;
    winningStreak.push(no);
    var streak=document.querySelectorAll(".arr");
    var i=1;
    streak.forEach(st=>{
            st.innerHTML=winningStreak[winningStreak.length-i];
            if(blackarr.indexOf(parseInt(st.innerText))===-1){
                console.log(blackarr.indexOf(parseInt(st.innerText)))
                st.style.backgroundColor="red";
                st.style.color="white";
        }
            else
            st.style.backgroundColor="black";
            st.style.color="white";;
            i++;
    });

    return no;
}






//spin function
var spin=()=>{
    
    
    
    document.getElementById("winningAmount").innerText=" ";
    var Balance=document.getElementById("BalanceDisplay");
    var Bid=document.getElementById("Bid");
    // if(Bid.value=="0" || Bid.value>parseInt(Balance.innerText)){
    // alert("enter Bid amount");
    // return;
    // }
    if(check()){
        var InputNo=document.getElementById("BidNo").value;
        if(InputNo.length==0 ||InputNo<0 || InputNo>36){
            alert("Enter No. between 0 to 36");
            return;
        }
        document.getElementById("SpinNo").innerText="......";
        setTimeout(()=>{
        
        // Balance.innerText=Balance.innerText-Bid.value;

        var no=DrawNo();
        console.log(no);
        // console.log(typeof(Bid.value))
        document.getElementById("SpinNo").innerHTML=no;
        if(no==InputNo){
            UpdateBalance(36);
        // Balance.innerHTML=parseInt(Balance.innerText)+parseInt(Bid.value)*36;
        // alert(`you won ${Bid.value*36}`);

        }
        },2000);
    }

}



//odd
var odd=()=>{   
    if(check()){
        document.getElementById("winningAmount").innerText=" ";
        document.getElementById("SpinNo").innerText="....."; 
        setTimeout(()=>{
        console.log("hello");
        var no=DrawNo();
        console.log(no);
        if(no%2!==0){
            // alert(`you won ${Bid.value*2}`);
        UpdateBalance(2);
        }
    },2000)
    }
}

//even
var even=()=>{
        
        if(check()){
            document.getElementById("winningAmount").innerText=" ";
            document.getElementById("SpinNo").innerText=".....";
            setTimeout(()=>{
            var no=DrawNo();
            console.log(no);
            if(no%2===0){
            // alert(`you won ${Bid.value*2}`);
                UpdateBalance(2);
            }
        },2000);
    }

}

//red
var red=()=>{
    if(check()){
        document.getElementById("winningAmount").innerText=" ";
            document.getElementById("SpinNo").innerText=".....";
        setTimeout(()=>{
        var no=DrawNo();
        console.log(no);
        for(var i=0;i<blackarr.length;i++){
            if(blackarr[i]===no){
            return;
            }
        }
        // alert("Winner"/;
        // alert(`you won ${Bid.value*2}`);
        UpdateBalance(2);
    },2000);

    }

}

//black
var black=()=>{               
    if(check()){
        document.getElementById("winningAmount").innerText=" ";
        document.getElementById("SpinNo").innerText="......";
        setTimeout(()=>{
        var no=DrawNo();
        console.log(no);
        for(var i=0;i<blackarr.length;i++){
            if(blackarr[i]===no){
            // alert("winner");
            // alert(`you won ${Bid.value*2}`);
            UpdateBalance(2);
            return;
            }
        }
    },2000);
    }

}            

//logic for twelves,eighteens
const Twelves=(start,plus,incre,profit)=>{
    if(check()){
        document.getElementById("winningAmount").innerText=" ";
        document.getElementById("SpinNo").innerText="......";
        setTimeout(()=>{

    // var DwarNo=Math.floor((Math.random()*37))+0
    var no=DrawNo();
    console.log(no);
    for(var i=start;i<start+plus;i+=incre){
        console.log(i);
        if(no==i){
            UpdateBalance(profit)
            // alert("you won");
            // alert(`you won ${Bid.value*profit}`);
            break;
        } 
    }
},2000);
}

}

DrawNo();