<!doctype html>
<html class="full-height">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex, follow">
  <meta http-equiv="expires" content="0">

  <title>Stripo</title>
  <base href="/cabinet/">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Google Tag Manager -->
  <script>(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-KGD7HVJ');
  </script>
  <!-- End Google Tag Manager -->

  <!-- Amplitude analytics -->
  <script type="text/javascript">
    (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
    ;r.type="text/javascript";r.async=true
    ;r.src="https://cdn.amplitude.com/libs/amplitude-4.5.2-min.gz.js"
    ;r.onload=function(){if(e.amplitude.runQueuedFunctions){
      e.amplitude.runQueuedFunctions()}else{
      console.log("[Amplitude] Error: could not load SDK")}}
    ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
    ;function s(e,t){e.prototype[t]=function(){
      this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
      var o=function(){this._q=[];return this}
      ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
      ;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
        ;return this}
      ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
      ;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
      ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut",
        "setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify",
        "clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","logEventWithTimestamp",
        "logEventWithGroups","setSessionId","resetSessionId"]
      ;function v(e){function t(t){e[t]=function(){
        e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
        for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
        e=(!e||e.length===0?"$default_instance":e).toLowerCase()
        ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
      ;e.amplitude=n})(window,document);

    amplitude.getInstance().init("246810a6e954a53a140e3232aac8f1a9");
  </script>
  <!-- End Amplitude analytics -->


  <link class="stripo-styles-marker" rel="shortcut icon" href="assets/img/favicons/favicon.png">
  <link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="assets/img/favicons/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="assets/img/favicons/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="assets/img/favicons/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="assets/img/favicons/favicon-16x16.png" sizes="16x16">
  <link rel="icon" type="image/png" href="assets/img/favicons/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="assets/img/favicons/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="assets/img/favicons/android-chrome-192x192.png" sizes="192x192">
  <meta name="msapplication-square70x70logo" content="assets/img/favicons/smalltile.png"/>
  <meta name="msapplication-square150x150logo" content="assets/img/favicons/mediumtile.png"/>
  <meta name="msapplication-wide310x150logo" content="assets/img/favicons/widetile.png"/>
  <meta name="msapplication-square310x310logo" content="assets/img/favicons/largetile.png"/>


<link rel="stylesheet" href="styles.ef4620f40e73287a0f46.css"></head>
<body class="full-height">

<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGD7HVJ" height="0" width="0"
          style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-auth.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGjYa93Fn7c4rYX9DZk_qFBbJ1le-31pw",
    authDomain: "stripo-app.firebaseapp.com",
    databaseURL: "https://stripo-app.firebaseio.com",
    projectId: "stripo-app",
    storageBucket: "stripo-app.appspot.com",
    messagingSenderId: "500576820705"
  };
  firebase.initializeApp(config);

</script>

<script>
  window.fbAsyncInit = function () {
    FB.init({
      appId: window.location.hostname.includes('staging') ? '226771407798774' : '220581981751305',
      xfbml: true,
      version: 'v4.0'
    });
    FB.AppEvents.logPageView();
  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

</script>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>(function () {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === "function") {
    ic('reattach_activator');
    ic('update', intercomSettings);
  } else {
    var d = document;
    var i = function () {
      i.c(arguments)
    };
    i.q = [];
    i.c = function (args) {
      i.q.push(args)
    };
    w.Intercom = i;

    function l() {
      var s = d.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.intercom.io/widget/b1m243ec';
      var x = d.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      window.intercomSettings = {};
      w.Intercom('onHide', function () {
        w.focus()
      });
    }

    if (w.attachEvent) {
      w.attachEvent('onload', l);
    } else {
      w.addEventListener('load', l, false);
    }
  }
})()
</script>
<script src="https://js.stripe.com/v3/"></script>
<script>
  var origin = window.location.origin;
  var key = '';
  if (
    origin === 'https://my.stripo.email'
    || origin === 'https://stripo.email'
    || origin === 'https://green.stripo.email'
    || origin === 'https://blue.stripo.email') {
    key = 'pk_live_AIcPpYfp1vjWf6t1KfFHr1Ma';
  } else {
    key = 'pk_test_S6bezstKpNhJuGNZtDwlPSxI';
  }
  var stripePayments = Stripe(key);
  var stripeElements = stripePayments.elements();

</script>
<script> var global = window; </script>

<mb-root>
  <div class="loader-c app-loader">
    <div class="loader-z"></div>
  </div>
</mb-root>

<script type="text/javascript" src="runtime.ec2944dd8b20ec099bf3.js"></script><script type="text/javascript" src="polyfills.0143d1f34790df4c5e4b.js"></script><script type="text/javascript" src="scripts.86225da5e8a17cb7a905.js"></script><script type="text/javascript" src="main.d9e37e325032ba621dea.js"></script></body>
</html>
