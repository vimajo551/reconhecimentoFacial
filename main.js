Webcam.set({
    width: 350,
    height: 300,
    image_formate:"jpeg",
    jpeg_quality: 90,
})
var camera = document.getElementById("camera")
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="pokebola" src="'+data_uri+'"/>'
    })
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pdR5L9e0P/',modelLoaded)
function modelLoaded(){
    console.log("carregado")
}
function check(){
    getimg = document.getElementById("pokebola")
    classifier.classify(getimg,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        document.getElementById("resultObjectName").innerHTML = results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}