function selected(){
    document.getElementById('container').innerHTML=''
    document.getElementById('result').innerHTML=''
    var interest_type=document.getElementById('interest_type').value;
    var x = document.getElementById('show').innerHTML==="";
    if(interest_type=='Compound Interest'  && x){
        var tp=document.createElement("select");
        tp.id='cf';
        tp.className='form-control';
        var option1 = document.createElement("option");
        var option2 = document.createElement("option");
        var option3 = document.createElement("option");
        var option4 = document.createElement("option");
        var option5 = document.createElement("option");
        var option6 = document.createElement("option");
        option1.value="d";option2.value="w";option3.value='m';option4.value='q';option5.value='hy';option6.value='a';
        option1.text="Daily";
        option2.text="Weakly";
        option3.text="Monthly";
        option4.text="Quaterly";
        option5.text="Half-Yearly";
        option6.text="Annually";
        tp.add(option1);tp.add(option2);tp.add(option4);tp.add(option5);tp.add(option6);
        document.getElementById('show').appendChild(tp);
    }
    if(interest_type=='Simple Interest' && !x){
        document.getElementById('show').innerHTML = "";
    }

}

function calculate(){
var interest_type=document.getElementById('interest_type').value;
var P = document.getElementById('pi').value;
var r = document.getElementById('rate').value;
var unit = document.getElementById('period_unit').value;
var period = document.getElementById('period').value;
if(interest_type == 'ci'){
var cf = document.getElementById('cf').value;}
var result =document.getElementById('result')


var n=365;

if(cf =='w'){
   n=52;
}else if(cf=='m'){
 n=12;
}else if(cf == 'q'){
 n=4
}else if(cf == 'hy'){
  n=2;
}else if(cf=='a'){
  n=1;
}

var A = (function(){
    if(interest_type=='Simple Interest'){
        return eval(P*(1+r*period*0.01));
    }else{
        return eval(P*(1+r*0.01/n)**(n*period));
    }
})();

var t=1;

if(unit == 'month'){
    t=12;
}else if(unit =='weak'){
    t=52
}else if(unit =='day'){
    t=365
}

var interest = eval((A-P)/t)

result.innerText = "The interest is "+(interest).toFixed(3);

if(document.getElementById('container').innerHTML==''){

var data=[
   {x:'Principal',value:P},
   {x:interest_type,value:interest}
]
var chart=anychart.pie();
chart.title("Interest chart");


  chart.data(data);

  chart.container('container');
  chart.draw();
}
}

function showval(){
    var P = document.getElementById('pi').value;
    var op = document.getElementById('rval');
    op.value=P
}

function reset(){
    document.getElementById('container').innerHTML="";
    document.getElementById('result').innerHTML="";
    document.getElementById('my_form').reset();
}