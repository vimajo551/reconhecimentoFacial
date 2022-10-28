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
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EspL6NkI0/model.json',modelLoaded)
function modelLoaded(){
    console.log("carregado")
}