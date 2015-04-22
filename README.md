moTrend: Keep moving with Twitter Trends

Keep in touch with Twitter's trending topics while you're driving. To keep your eyes on the road and hands on the wheel, it speaks the top 3 trends to you.  To give you a high level view of how people feel about this topic in your local area, there is a Sentiment graphic.

moTrend is an AngularJS app designed for a vehicle in-dash system that is 800 px x 380 px.

Check back for these upcoming features:
- Listen to local trending topics as you change locations.  It will refresh every 15 minutes.
- Listen to national trending topics.
- Log into Twitter while you're parked, then listen to your personal twitter feed while you're in motion.

3rd party APIs and IDs include:
- Codebird, used to pull the Twitter feed. https://github.com/jublonet/codebird-js
- Twitter keys and tokens are user-specific, so they must be generated and stored in js/key.config.js to run the app.
- Yahoo! WOEID (Where On Earth IDentifier) used to localize Twitter feed. https://developer.yahoo.com/geo/geoplanet/
- Voice from Google Chrome's Speech Synthesis. http://codepen.io/matt-west/pen/wGzuJ
