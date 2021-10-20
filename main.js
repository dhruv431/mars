canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var w=100;
var h=120;
var rk=200;
var ry=200;
image=["mars.jpeg","mars.jpg","mars2.jpeg","mars3.jpeg","mars4.jpeg","mars5.jpeg"];
var a=Math.random();
var b=a*6;
var c=Math.floor(b);
var d=image[c];
function add () 
{
b_img = new Image();
b_img.onload= bg;
b_img.src= d;

m_img = new Image();
m_img.onload= mg;
m_img.src= "rover.png";

}

function bg()
{
    ctx.drawImage (b_img,0,0,canvas.width,canvas.height);
}

function mg()
{
    ctx.drawImage (m_img,rk,ry,w,h);
}
window.addEventListener("keydown",m_kd);

function m_kd (e)
{
kp = e.keyCode;
console.log(kp);
if (kp == '38')
{
console.log("up");
up();
}

if (kp == '40')
{
console.log("down");
down();
}

if (kp == '37')
{
console.log("left");
left();
}

if (kp == '39')
{
console.log("right");
right();
}
}
function up (){
    if (ry >= 0)
    {
    ry= ry-10;
    bg();
    mg();
    }
}
function down (){
    if (ry <= 500)
    {
    ry= ry+10;
    bg();
    mg();
    }
}
function right (){
    if (rk <= 700)
    {
    rk= rk+10;
    bg();
    mg();
    }
}
function left (){
    if (rk >= 0)
    {
    rk= rk-10;
    bg();
    mg();
    }
}