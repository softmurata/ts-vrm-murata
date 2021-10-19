## posenet index.html

```
<html>
  <head>
    <script type="text/javascript" src="main.js"></script>
  </head>
  <body>
    <div id="canvas" style="width:1080px;height:720px;"></div>
    <div>
        <div id="loading-indicator">PoseNet model is loading.</div>
        <canvas id="webacamCanvas" width="1080" height="720"></canvas>
        <video id="video" width="1080" height="720" style="display:none;" autoplay playsinline>Video stream not available.</video>
    </div>
  </body>
</html>
```

## mediapipe index.html

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script type="text/javascript" src="main.js"></script>
</head>

<body>
  <div class="container">
    <video class="input_video"></video>
    <canvas class="output_canvas" width="1280px" height="720px"></canvas>
  </div>
</body>
</html>
```
