// to load 
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            showTable();
        }
    };

    xmlhttp.open("GET", "train.xml", true);
    xmlhttp.send();
}

function showTable() {
    var i;
    var table = "<tr><th>Train Name</th><th>Train Code</th><th>Start Station Name</th><th>Start Station Code</th><th>End station name</th><th>End Station Code</th><th>Engine operator</th></tr>";
    var x = xmlDoc.getElementsByTagName("train");
    for (i = 0; i < x.length; i++) {

        table += "<tr><td>" + x[i].getElementsByTagName("train_name")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("train_code")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("start_station_name")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("start_station_code")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("end_station_name")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("end_station_code")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("emp_name")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }

    document.getElementById("table").innerHTML = table;
}


function deleteRecord() {
    var i = document.getElementById("indexToDel").value;
    y = xmlDoc.getElementsByTagName("train")[i];
    xmlDoc.documentElement.removeChild(y);
    showTable();
}

function addNewRecord() {
    var i
    var mTrain = []
    var x = document.getElementById("newRecForm")
    train = xmlDoc.createElement("train")
    mTrain[0] = xmlDoc.createElement("train_name")
    mTrain[1] = xmlDoc.createElement("train_code")
    mTrain[2] = xmlDoc.createElement("start_station_name")
    mTrain[3] = xmlDoc.createElement("start_station_code")
    mTrain[4] = xmlDoc.createElement("end_station_name")
    mTrain[5] = xmlDoc.createElement("end_station_code")
    mTrain[6] = xmlDoc.createElement("emp_name")
    for (i = 0; i < 7; i++) {
        mTrain[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        train.appendChild(mTrain[i])
    }
    xmlDoc.documentElement.appendChild(train);
    console.log("Record added: " + x.elements[0].value)
    showTable()
}