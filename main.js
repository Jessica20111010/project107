
function startClassification()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ze5C3JOIj/", modelready)
}
function modelready()
{
    classifier.classify(gotResults)
}