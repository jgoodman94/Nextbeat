<!doctype html>
<head>
  <meta charset="utf-8">

  <title>NextBeat</title>
  <meta name="Front Page" content="NextBeat">
  <meta name="viewport" content="width=device-width">
  <link rel="icon" type="image/png" href="favicon.png">
  <link href='http://fonts.googleapis.com/css?family=Arimo' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/styles.css">
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script type="text/javascript" src="js/indexjs.js"></script>
  <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.3.1.min.js"></script>
  <link href='http://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
</head>
<body>



  <video autoplay loop id="bgvid" muted>
    <source src="ultra2.mp4" type="video/mp4">
      <source src="ultra2.ogg" type="video/ogg">
      </video>




      <div id="welcome"><!--<img src="beatLogo.png">-->NextBeat</div>
      <div class="meter animate">
        <span style="width: 50%"><span></span></span>
      </div>
      <div id="options">
        <button id="createEvent" class="opButton">Create Event</button>
        <button id="findEvent" class="opButton">Explore</button>
        <div><a href="/dbDzf57bQ6.html">Or, check out an example event</a></div>
      </div>

      <div id="modalCreate">
        <form id="eventForm">
          <input type="text" id="eName" class="inputField" placeholder="Event Name *" maxlength="50" autocomplete="off" required><br>
          <input type="text" id="eDetails" class="inputField" placeholder="Details * (include any specific club, room, time of event, etc.)" maxlength="150" autocomplete="off" required><br>
          <input type="text" id="adminPass" class="inputField" placeholder="Admin Password * (so you can manage your event later)" required><br>
          <input type="text" id="eventPass" class="inputField" placeholder="Event Password (if you don't want any randos showing up)"><br>
          <input type="submit" id="eGo" value="Go">
        </form>
      </div>
      <div id="closeModal">X</div>
      <!--loading-->
      <div id="overlay"></div>
      <div id = "waiting">

        <div class="bubblingG">
          <span id="bubblingG_1">
          </span>
          <span id="bubblingG_2">
          </span>
          <span id="bubblingG_3">
          </span>
        </div>
      </div>
    </body>

    </html>
