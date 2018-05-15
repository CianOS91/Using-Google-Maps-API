function initMap() {
    //map options
    var options = {
        zoom: 11,
        center: { lat: 52.6680, lng: -8.6305 }
    };


    //new map
    var map = new google.maps.Map(document.getElementById("map"), options);

    //listen for a click
    google.maps.event.addListener(map, 'click',
        function(event) {
            //add marker
            addMarker({ coords: event.latLng });
        });

    //add markers
    /*
        var marker = new google.maps.Marker({
        position:{lat:52.6680,lng:-8.6305},
        map:map,
        icon:'http://maps.google.com/mapfiles/ms/icons/blue.png'
        });
        
        //info window
        var infoWindow = new google.maps.InfoWindow({
            content:'<h1>Limerick City</h1>'
        });
        
        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
        */

    //array of markers
    var markers = [{
            coords: { lat: 52.6680, lng: -8.6305 },
            iconImage: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
            content: "<h1>Limerick City</h1>"
        },

        {
            coords: { lat: 52.620446, lng: -8.656246 },
            content: "<h1>Raheen</h1>"
        },

        {
            coords: { lat: 52.5952, lng: -8.4723 }

        }
    ];

    //loop through markers
    for (var i = 0; i < markers.length; i++) {
        //add marker
        addMarker(markers[i]);
    }

    addMarker({
        coords: { lat: 52.6680, lng: -8.6305 },
        iconImage: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
        content: "<h1>Limerick City</h1>"
    });
    addMarker({
        coords: { lat: 52.620446, lng: -8.656246 },
        content: "<h1>Raheen</h1>"
    });
    addMarker({ coords: { lat: 52.5952, lng: -8.4723 } });

    //add marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });

        //check for custom icon
        if (props.iconImage) {
            //set icon image
            marker.setIcon(props.iconImage);
        }

        //check content
        if (props.content) {
            //info window
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}
