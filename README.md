# Ushahidi
## Mobile Apps

---

## GitHub
#### Clone the [Ushahidi](https://github.com/ushahidi/platform-mobile) repo

```
git clone git@github.com:ushahidi/platform-mobile.git Ushahidi_Mobile
cd Ushahidi_Mobile
```

---

## XCode
#### Ensure the latest [XCode](https://developer.apple.com/xcode/) is installed

```
https://developer.apple.com/xcode/
```

---

## Homebrew
#### Ensure that [Homebrew](http://brew.sh) is installed

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Add the Homebrew location `export PATH="/usr/local/bin:$PATH"` to your environment `$PATH`.

Update the Homebrew recipes

```
brew update
```

Check health of Homebrew recipes

```
brew doctor
```

---

## NPM
#### Ensure that [NPM](https://www.npmjs.com) is installed

```
brew install node
npm install -g npm
```

Check the version of NPM

```
npm --version
```

---

## Cordova
### Install the latest [Cordova](https://www.npmjs.com/package/cordova)

```
npm install -g cordova@latest
npm install -g cordova-common
```

Check the version of Cordova

```
cordova -v
```

---

## Ionic
#### Install the latest [Ionic2](http://ionicframework.com/docs/v2/) and necessary dependencies

```
npm install -g ionic@latest
npm install -g cordova-ios
npm install -g ios-sim
npm install -g ios-deploy
npm install -g cordova-android
npm install -g android-simulator
npm install -g cordova-browser
```

Check the version of Ionic

```
ionic info
```

List the root level NPM packages

```
npm list --depth=0
```

---

## Android
#### Ensure that [Android](https://developer.android.com/index.html) is installed

```
https://developer.android.com
```

```
android list sdk --all --extended
android update sdk -u -a -t android-24
android update sdk -u -a -t extra-android-m2repository
android update sdk -u -a -t extra-google-google_play_services
android update sdk -u -a -t extra-google-analytics_sdk_v2
android update sdk -u -a -t extra-intel-Hardware_Accelerated_Execution_Manager
```

Run Android SDK Manager
```
android sdk
```

Run Android Virtual Device Manager
```
android avd
```

---

## iOS
#### Commands to [build](http://ionicframework.com/docs/v2/cli/build/) and [run](http://ionicframework.com/docs/v2/cli/run/) the iOS app

```
ionic build ios --verbose
ionic build ios --release
```

```
ionic run ios
ionic run ios --livereload --consolelogs --serverlogs
```

Check whether the Cordova requirements for iOS are installed

```
cordova requirements ios
```

---

## Android
#### Commands to [build](http://ionicframework.com/docs/v2/cli/build/) and [run](http://ionicframework.com/docs/v2/cli/run/) the Android app

```
ionic build android --verbose
ionic build android --release
```

```
ionic run android --consolelogs --serverlogs
ionic run android --livereload --consolelogs --serverlogs
```

Check whether the Cordova requirements for Android are installed

```
cordova requirements android
```

## Desktop
### Commands to run the app in the Browser

```
ionic build browser --desktop --testing
```

```
ionic run browser
```

Check whether the Cordova requirements for Browser are installed

```
cordova requirements browser
```
