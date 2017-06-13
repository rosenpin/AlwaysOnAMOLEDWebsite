  function tickTime() {
        displayTime();
        displayDate();
        setTimeout(tickTime, 5000);             
    }

    function displayTime() {
        var elt = document.getElementById("layer-clock"); 
        var now = new Date();
        var minutes = now.getMinutes();
        elt.innerHTML = "" + now.getHours() + ":" + (minutes < 10 ? "0" + minutes : "" + minutes);
    }

    function displayDate() {
        var elt = document.getElementById("layer-date");
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        
        var date = new Date();
        elt.innerHTML = days[date.getDay()] + ' ' + date.getDate() + ', ' + months[date.getMonth()];         
    }

    window.onload = tickTime;

    // Use background from Muzei's featured art.
    $.ajax({
      dataType: 'jsonp',
      url: 'http://www.muzei.co/featured',
      jsonpCallback: 'withfeatured',
      cache: true,
      success: function(data) {
        var image = data.thumbUri || data.imageUri;
        $('#layer-wallpaper').css('background-image', 'url("' + image + '")');
      }
    });