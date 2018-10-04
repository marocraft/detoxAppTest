# Description
detoxAppTest is an open source projet, which allows you to test the ui of your application with detox. in this readme you can learn how to Test your React Native App like a real user
# Introducing Detox
Detox is an end to end testing library for your react native app that enables you to emulate user behavior and test how your app reacts to it, automatically.

![myimage-alt-tag](https://camo.githubusercontent.com/888c0d6cf1f13798062d7c7899443b6a114bd0f6/687474703a2f2f692e696d6775722e636f6d2f656f61444559702e676966)

# Detox instalation

## 1. Install Detox command line tools (detox-cli)

to configure Detox on your project, `detox-cli` should be installed globally.
```sh
  npm install -g detox-cli
```
## 2. Add Detox to your project

If you have a React Native project, go to its root folder (where `package.json` is found) and type the following command.

```sh
  npm install detox --save-dev
```

## 3. Install a test runner

Detox CLI supports Jest and Mocha so u can chose one of theme to test your project.

- [Jest](http://jestjs.io/)

```sh
  npm install jest --save-dev
```
Or.

- [Mocha](https://mochajs.org/)

```sh
  npm install mocha --save-dev
```
## 4. Add Detox config instructions to package.json

Those instruction Detox should be in your `package.json`.

```json
"detox": {
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/example.app",
      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      "type": "ios.simulator",
      "name": "iPhone 7"
    }
  }
}
```
## 5. Create your first test

Detox has `detox init` and support two type of test runners.

* ```detox init -r mocha```
* ```detox init -r jest```

At this step you should have an e2e folder with a custom test, and your write the test that you want. there is an example of files.

* firstTest.spec.js file

```JavaScript
describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
  
  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.label('Hello!!!'))).toBeVisible();
  });
  
  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.label('World!!!'))).toBeVisible();
  });
});
```
* init.js file
```JavaScript
const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/mocha/adapter');

before(async () => {
  await detox.init(config);
});

beforeEach(async function () {
  await adapter.beforeEach(this);
});

afterEach(async function () {
  await adapter.afterEach(this);
});

after(async () => {
  await detox.cleanup();
});
```
## 6. Run your Detox test

```sh
  detox test
```
> TIP: PLEASE don't forget to Build your project first with ``` detox build ```

# Documentation

Learn everything about using Detox from the [documentation](https://github.com/wix/Detox).

Or

> TIP: You can also check out this [tutorial](https://medium.com/@bogomolnyelad/how-to-test-your-react-native-app-like-a-real-user-ecfc72e9b6bc) on Medium with video by [@bogomolnyelad](https://medium.com/@bogomolnyelad) for more details.

# Clone my Awsome project
 
 * First clone it to your machine with
 
```sh
  git clone
```
 * Install dependencies in the root of the project with
 
```sh
  cd detoxAppTest/
  npm install
```
* Run your Test with

```sh
  detox build
  detox test
```

Enjoy with Detox :).
