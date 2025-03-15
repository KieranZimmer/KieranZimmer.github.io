let map;
let guessMarker, line;
let actualLocation
let nextRace;
let racesUNUSED = ['Mtebid',
 'Shanid',
 'Tibetid',
 'NorthAtlantid',
 'Katanga',
 'Chikuzen',
 'Assyroid',
 'DesertAustralid',
 'FennoNordid',
 'EquatorialSudanid',
 'Volgid',
 'Hadza',
 'Xhosaid',
 'Appalacid',
 'MountainIndid',
 'Pacifid',
 'Huanghoid',
 'Libyid',
 'Moorish',
 'BrachioMelanesid',
 'AmurSakhalin',
 'Tasmanid',
 'NorthAndid',
 'Sonorid',
 'Pontid',
 'ProtoEthiopid',
 'Chukiangid',
 'Omotic',
 'TransMediterranid',
 'Athabaskid',
 'MountainAralid',
 'WestCongolesid',
 'IndoIranid',
 'Kolid',
 'SouthFuegid',
 'Mexicid',
 'Tonkinesid',
 'PlainsPamirid',
 'NorthEthiopid',
 'Satsuma',
 'CentralBrachid',
 'Kham',
 'PaleoAtlantid',
 'Californid',
 'WestAlpinid',
 'Strandlooper',
 'GracileMediterranid',
 'SouthGondid',
 'Targid',
 'Congolesid',
 'Carpathid',
 'MiddleNile',
 'Iranid',
 'Arizonid',
 'Baykal',
 'Dinarid',
 'Transcaspian',
 'Dayakid',
 'Armenid',
 'GuineoCamerunian',
 'JahaiSemangid',
 'FenguPondo',
 'IndoNordic',
 'NorthAndamanid',
 'Fezzanid',
 'Micronesid',
 'EastPamirid',
 'Vedda',
 'AfricanAlpinoid',
 'ArabianVeddoid',
 'Strandid',
 'Fijid',
 'NorthGondid',
 'Khoid',
 'Aetid',
 'GracileIndid',
 'NorthLappid',
 'SouthAustralid',
 'Annamid',
 'Norid',
 'IndoBrachid',
 'SouthAndid',
 'Barrinean',
 'Changkiangid',
 'PreSlavic',
 'Senegalid',
 'Toda',
 'Ladogan',
 'Samoyedic',
 'Berberid',
 'WestEthiopid',
 'CentralEthiopid',
 'SouthBantuid',
 'Isthmid',
 'Huarpid',
 'DeuteroMalayid',
 'Alfoeld',
 'EastSudanid',
 'Dalofaelid',
 'Aoshima',
 'CentralBantuid',
 'RobustPolynesid',
 'SouthPolynesid',
 'WestAmazonid',
 'Toalid',
 'AngloSaxon',
 'Kalaharid',
 'Yemenid',
 'NiloHamitic',
 'Semangid',
 'ChocoMotilon',
 'Gobid',
 'Bororo',
 'ManchuKorean',
 'LagoaSanta',
 'Eurafricanid',
 'Siwa',
 'PaleoSaharid',
 'Senoid',
 'Malagasid',
 'Dinkaid',
 'Kachinid',
 'NorthIndid',
 'Planid',
 'PaleoSardinian',
 'NorthPontid',
 'EastBambutid',
 'AndronovoTuranid',
 'Sinhalesid',
 'Maasai',
 'Casamance',
 'ProtoMalayid',
 'ChopiTswana',
 'Anatolid',
 'Sudanid',
 'EastEthiopid',
 'CentralAndid',
 'Karnatid',
 'Aralid',
 'SouthNilotid',
 'MountainDama',
 'Patagonid',
 'SaharanEthiopid',
 'PreNilotid',
 'Pampid',
 'Maya',
 'Tapirid',
 'Sandawe',
 'Bukaid',
 'NorthAmazonid',
 'Danakil',
 'WestBambutid',
 'Yakonin',
 'Hallstatt',
 'Keralid',
 'InsularMelanesid',
 'Baskid',
 'MunduMangbeto',
 'Khmerid',
 'SouthPalaungid',
 'Ishikawa',
 'Karroid',
 'ProtoNordid',
 'Uralid',
 'EastAlpinid',
 'NeoMelanesid',
 'Malabarese',
 'Guinesid',
 'EastBrachid',
 'Katangid',
 'Yenisey',
 'MountainMelanesid',
 'Tronder',
 'Arabid',
 'Choshiu',
 'ScandoLappid',
 'TwaCwa',
 'Pueblid',
 'SouthAmazonid',
 'ProtoIranid',
 'Chukchid',
 'Shari',
 'SouthEthiopid',
 'NorthBantuid',
 'Egyptid',
 'SudanoGuinesid',
 'Gorid',
 'EastPalaungid',
 'Palaungid',
 'Shillukid',
 'CaliforniaPacifid',
 'Bobo',
 'PaleoMelanesid',
 'CentralPamirid',
 'Nesiotid',
 'NorthAustralid',
 'Malid',
 'Canarid']
let races = ['FennoNordid', 'Chikuzen', 'Xhosaid', 'Khoid', 'WestCongolesid', 'Katanga', 'Assyroid', 'Mtebid', 'MountainAralid', 'NorthAtlantid', 'Katanga', 'IndoIranid', 'Moorish', 'Tibetid', 'BeringSea', 'NorthAndid', 'Xhosaid', 'Mtebid', 'Pacifid', 'SouthGondid', 'Moorish', 'Tibetid', 'WestAmazonid', 'Patagonid', 'ProtoEthiopid', 'DesertAustralid', 'Kolid', 'Chikuzen', 'MountainIndid', 'NiloHamitic', 'Dinarid', 'Sonorid', 'BrachioMelanesid', 'Hadza', 'Appalacid', 'Sudanid', 'SouthFuegid', 'Libyid', 'NorthLappid', 'Hadza', 'Micronesid', 'EquatorialSudanid', 'Arizonid', 'Vedda', 'NorthAtlantid', 'Chikuzen']
let seenRaces = []
let round = 1;
let totalScore = 0;
let averageScore;

let polygons = [];
let centroidMarker;
let mapListener;
let eventListeners = [];

function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// shuffleArray(races);
console.log(races)

function initMap() {
    window.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        // mapTypeId: "satellite",
        // styles: [
        //     { featureType: "administrative.country", elementType: "labels", stylers: [{ visibility: "on" }] },
        //     { featureType: "administrative.locality", stylers: [{ visibility: "off" }] },
        //     { featureType: "road", stylers: [{ visibility: "off" }] },
        //     { featureType: "poi", stylers: [{ visibility: "off" }] },
        //     { featureType: "transit", stylers: [{ visibility: "off" }] }
        // ]
    });

    // Load the first puzzle
    // setupMap();
    getNextFaceData();
}

function setupMap() {

    console.log("Setting up map")
    // console.log("Polygons:", window.polygonData)

    actualLocation = polygonData['centroid'];
    centroidMarker = new google.maps.Marker({
        position: actualLocation,
        map: window.map,
        title: "Actual Location",
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        visible: false
    });

    for (let polygonCoords of window.polygonData["bright"]) {
        console.log(polygonCoords.length)

        // polygonCoords = [polygonCoords['exterior']].concat(polygonCoords['interior'])
        console.log(polygonCoords)
        
        if (polygonCoords[0].length < 3) {
            polygons.push(
                new google.maps.Circle({
                    center: polygonCoords[0][0],
                    radius: 50000,
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.1,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.4,
                    map: window.map,
                    visible: false
                })
            )
        }
        // else if (polygonCoords.length === 2) {
        // }
        else {
            polygons.push(
                new google.maps.Polygon({
                    paths: polygonCoords,
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.1,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.4,
                    visible: false,
                    map: window.map
                })
            )
        }
    }
    
    for (let polygonCoords of window.polygonData["dull"]) {

        console.log("dull poly", polygonCoords)
        if (polygonCoords[0].length < 3) {
            polygons.push(
                new google.maps.Circle({
                    center: polygonCoords[0][0],
                    radius: 50000,
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.1,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.2,
                    map: window.map,
                    visible: false
                })
            )
        }
        else {
            polygons.push(
                new google.maps.Polygon({
                    paths: polygonCoords,
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.1,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.2,
                    visible: false,
                    map: window.map
                })
            )
        }
        // polygons.push(polygon)
    }

    mapListener = window.map.addListener("click", (event) => {
        if (guessMarker) guessMarker.setMap(null); // Remove old guess marker
        if (line) line.setMap(null);  // Remove old line

        let guessPosition = event.latLng;
        
        // Place new marker
        guessMarker = new google.maps.Marker({
            position: guessPosition,
            map: window.map,
            title: "Your Guess"
        });

        // Show actual location
        centroidMarker.setVisible(true);
        // circle.setVisible(true)
        for (let poly of polygons) {
            poly.setVisible(true);
        }

        // Draw line between actual location and guess
        line = new google.maps.Polyline({
            path: [actualLocation, guessPosition],
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
            map: window.map
        });

        // 855 -> 3263
        // 382 -> 4131
        // 4.5 -> 4989
        
        // Calculate and display distance
        let distance = google.maps.geometry.spherical.computeDistanceBetween(
            new google.maps.LatLng(actualLocation),
            guessPosition
        ) / 1000; // Convert meters to kilometers

        document.getElementById("distance").innerText = `Distance: ${distance.toFixed(2)} km`;

        function getScore(distance) {
            const minDist = 200;   // Full score at 200 km
            const maxDist = 5200;  // Zero score at 5200 km
        
            if (distance <= minDist) return 5000;  // Full points if within 200 km
            if (distance >= maxDist) return 0;     // No points if 5200 km or farther
        
            const score = 5000 * (1 - Math.log(distance / minDist) / Math.log(maxDist / minDist));
            return Math.round(score);
        }
        
        let score = getScore(distance);
        totalScore += score
        console.log("scores", totalScore, round)
        averageScore = Math.round(totalScore / round)
        document.getElementById("score").innerText = `Score: ${score}`;
        document.getElementById("average-score").innerText = `Average Score: ${averageScore}`;
        document.getElementById("race-name").innerText = nextRace;
        document.getElementById("next-face").disabled = false;
        document.getElementById("results").removeAttribute('hidden')
        document.getElementById("info").removeAttribute('hidden')
        document.getElementById("race-details").innerText = `http://humanphenotypes.net/${nextRace}.html`

        let bounds = new google.maps.LatLngBounds();
    
        // Extend bounds to include each vertex of the polygon
        for (let poly of polygons) {
            if (!!poly.getPath) {
                poly.getPath().forEach(function (latLng) {
                    bounds.extend(latLng);
                });
            }
            // For circles
            // else {
            //     bounds.extend(poly.getBounds());
            // }
        }
        bounds.extend(guessPosition)
        bounds.extend(actualLocation)
        console.log(bounds)
        window.map.fitBounds(bounds); // Adjusts the map to fit the polygon

        google.maps.event.removeListener(mapListener);
    });

    // // Add click event listener to the polygon
    // let listener = google.maps.event.addListener(polygon, "click", function (event) {
    //     alert("Polygon clicked!");
    // });
    // eventListeners.push(listener);
}

function teardownMap() {
    // Remove polygons
    console.log("Tearing down map")
    polygons.forEach(polygon => polygon.setMap(null));
    polygons = [];

    if (guessMarker) guessMarker.setMap(null); // Remove old guess marker
    if (line) line.setMap(null);  // Remove old line
    if (centroidMarker) centroidMarker.setMap(null);
}

function getNextFaceData() {
    console.log("getting next face data")
    nextRace = races.pop()
    let raceLowercase = nextRace.toLowerCase()
    // Change faces
    document.getElementById("facem").src = `images/${raceLowercase}m.jpg`;
    document.getElementById("facef").src = `images/${raceLowercase}f.jpg`;
    oldScript = document.getElementById("polygons-script")
    if (oldScript) oldScript.remove()
    let nextFaceScript = document.createElement("script");
    nextFaceScript.src = `polygons/${raceLowercase}_polygons.js`;
    nextFaceScript.id = "polygons-script";
    nextFaceScript.onload = function() { 
        // console.log(`${nextRace} script loaded`, window.polygonData); 
        setupMap();  // Call setupMap only after the script is loaded
    };
    document.body.appendChild(nextFaceScript);
}

function nextFace() {
    round += 1;
    document.getElementById("round").innerText = `Round ${round}`
    document.getElementById("next-face").disabled = true;
    teardownMap();
    getNextFaceData();
}

// Add event listener to button with ID "next-face"
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next-face").addEventListener("click", nextFace);
    initMap();
});
