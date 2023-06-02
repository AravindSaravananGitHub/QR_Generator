

const frm=document.querySelector('#frm');
const output=document.querySelector('#output');
const spinner=document.querySelector('.loader');
//const qr=document.querySelector('#qrcode');
const btnsave=document.querySelector('#save');
const qrcodeElement=document.getElementById('qrcode');


function  generateQRcode(e){
    //console.log("Aravind");
    e.preventDefault();
    const url=document.querySelector('#url').value;
    const first_color=document.querySelector('#first-color').value;
    const second_color=document.querySelector('#second-color').value;


    //console.log(url,first_color,second_color);

    if(url===""){
        alert("Please Enter the URL");
    }
    else{
        qrcodeElement.innerHTML="";
        // Spinner Start
        spinner.style.display='flex';
        

        setTimeout(()=>{
            // Spinner End
            spinner.style.display='none';
            qrcodeElement.innerHTML="";

            var qrcode=new QRCode('qrcode',{
                text: url,
                width: 250,
                height: 250,
                colorDark : first_color,
                colorLight :second_color,
                correctLevel : QRCode.CorrectLevel.H
            });

        },1000);
    }
}
frm.addEventListener('submit', generateQRcode);

btnsave.addEventListener('click',()=>{
    setTimeout(()=>{
    const imgsrc=qrcodeElement.querySelector('img').src;
    //console.log(imgsrc);
    btnsave.href=imgsrc;   
    btnsave.download='qrcode';
    },50);
});


