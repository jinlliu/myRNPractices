Precondition software listing:
* JDK 1.8+
* Android SDK 25+
* React Native 0.38+
* NodeJS 6.2.2
* Python 2.7.11
* Chocolatey

Please reference this to [get start with React Native](http://facebook.github.io/react-native/docs/getting-started.html)

Please go to index.android.js(index.iso.js) to change to run.

run navigator example:
<pre>
<code>
import NavigatorPractice from './src/NavigatorPractice';

AppRegistry.registerComponent('myRNStudy', () => NavigatorPractice);
</code>	
</pre>

Third party component list:
++ Tabnavigator
* [react-native-tab-navigator](https://www.npmjs.com/package/react-native-tab-navigator)
* [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
++ Hackathon
This practice need to call a REST micro service which defined with Spring Boot.
* [react-native-camera](https://www.npmjs.com/package/react-native-camera)
* [react-native-image-picker](https://www.npmjs.com/package/react-native-image-picker)
* [react-native-image-resizer](https://www.npmjs.com/package/react-native-image-resizer)
* [react-native-star-rating](https://www.npmjs.com/package/react-native-star-rating)

after <pre><code>npm install aboveThirdPartyComponent --save</code></pre>
then do <pre><code>react-native link </code></pre>