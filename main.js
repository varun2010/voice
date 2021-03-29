var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking selfie...")
        speak();
    }
    
}
function  speak(){
    var synth=window.speechSynthesis;
    var speak_value="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_value);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snap();
        save();
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
    });
}
function save(){
   link=document.getElementById("link");
   image=document.getElementById("selfie").src;
   link.href=image;
   link.click();
}