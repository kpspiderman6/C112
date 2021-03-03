Webcam.set({
    width : 250,
    height :250,
    image_format :'png',
    png_quality: 60
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function CAPTURE(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML='<img id="final_img" src="'+data_uri+'">';
    });
    }
    console.log("ml5version",ml5.version);
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);

    function modelLoaded(){
        console.log("modelloaded initialised");

    }
    function SNAPSHOT(){
        img=document.getElementById("final_img");
        classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("result1").innerHTML=results[0].label;

        }
    }

