function Total(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chem").value);
    var sub5 = parseInt(document.getElementById("comp").value);

    if(sub1 > 100 || sub2> 100 ||  sub3 > 100||  sub4> 100 ||  sub5> 100 ){
        alert("Please Enter Marks in range of 100");}
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "English Marks:"+sub1+"<br> Maths Marks: "+sub2+"<br> Physics Marks: "+sub3+"<br> Chemistry Marks: "+sub4+"<br> Computers Marks: "+sub5+"<br> Total Marks: "+total;
    }
}

function Average(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chem").value);
    var sub5 = parseInt(document.getElementById("comp").value);
    
    if(sub1 > 100 || sub2> 100 ||  sub3 > 100||  sub4> 100 ||  sub5> 100 ){
    alert("Please Enter Marks in range of 100");} else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var avg = total/5;
        document.getElementById("avg").innerHTML="Your Average marks: "+avg
    }
}

function Grade(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chem").value);
    var sub5 = parseInt(document.getElementById("comp").value);
    
    if(sub1 > 100 || sub2> 100 ||  sub3 > 100||  sub4> 100 ||  sub5> 100 ){
    alert("Please Enter Marks in range of 100");} else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var avg = total/5;
        
        if(avg >=80 && avg<=100){
            document.getElementById("grade").innerHTML="You Got A+";
        }else if(avg >=75 && avg<=79){
            document.getElementById("grade").innerHTML="You Got A+";
        }else if(avg >=70 && avg<=74){
            document.getElementById("grade").innerHTML="You Got A";
        }else if(avg >=65 && avg<=69){
            document.getElementById("grade").innerHTML="You Got B";
        }else if(avg >=50 && avg<=64){
            document.getElementById("grade").innerHTML="You Got C";
        }else if(avg >=40 && avg<=49){
            document.getElementById("grade").innerHTML="You Got D";
        }else{
            document.getElementById("grade").innerHTML="You Got F Grade";
        }
    }
}