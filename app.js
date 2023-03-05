console.log("hrell");
const heading=document.getElementById("firstani")
const heading1=document.getElementById("secondani")
const para=document.getElementById("pani")
const para1=document.getElementById("fani")
const dash=document.getElementById("dash")
const logo=document.getElementById("logo")
const logo1=document.getElementById("logo1")
const img=document.getElementsByClassName("productImage")

setInterval(()=>{heading.classList.toggle("offScreenHeading")},6000)
setInterval(()=>{heading1.classList.toggle("offScreenHeading")},6000)
setInterval(()=>{para.classList.toggle("behindText")},6000)
setInterval(()=>{para1.classList.toggle("behindText")},6000)
setInterval(()=>{dash.classList.toggle("rotate30")},6000)
setInterval(()=>{dash.classList.toggle("rotate60")},6000)
setInterval(()=>{logo.classList.toggle("comeUp")},6000)
setInterval(()=>{logo1.classList.toggle("comeUp")},6000)


for(let i=0;i<=img.length;i++){
    setInterval(()=>{img[i].className="productImage rotate60"},6000)
}
for(let i=0;i<=img.length;i++){
    setInterval(()=>{img[i].className="productImage rotate120"},12000)
}
for(let i=0;i<=img.length;i++){
    setInterval(()=>{img[i].className="productImage rotate0"},18000)
}


