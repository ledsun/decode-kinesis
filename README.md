# decode-kinesis

Decode AWS Kinesis recordes received at an AWS Lambda function. / AWS Lambda 関数で受け取った AWS Kinesis のレコードをデコードします。

AWS Kinesis deals BASE64-encoded records. / AWS Kinesis は BASE64 でエンコードしたレコードを扱います。

## Usage

Example / 例

```js
var decodeKinesis = require('decode-kinesis')

exports.handler = function(event, context) {
    var sends = event.Records
        .filter(decodeKinesis.filter)
        .map(decodeKinesis.decode)
        .forEach(function(data) {
            // Do something nice!
        })
```

## API

### filter

Return boolean which `record` has `kinesis` prorety or not. / `kinesis` プロパティを持つかどうかの真偽値を返します。

Name | Type | Description
--- | --- | ----
record | object | record received from kinesis


### decode

Return decoded value from `recode`. / デコードした値を返します。

Name | Type | Description
--- | --- | ----
record | object | record received from kinesis


## Setup

Use a npm package. / npmパッケージを使ってください。

```
npm install decode-kinesis
```

## Development
### Build

This is written in ES6. / ES6で書いています。

[6to5](https://github.com/6to5/6to5) is used to convert ES5. /
 [6to5](https://github.com/6to5/6to5)を使ってES5に変換します。

 ```
 npm install
 npm run build
 ```

### Test

[mocha](https://github.com/mochajs/mocha) is used to test. / [mocha](https://github.com/mochajs/mocha)を使います。

```
npm test
```

### Deploy
Update `package.json`. / `package.json`を更新します。

and / それから
```
npm install
npm run build
npm test
npm publish
```

## Reference
[Step 2.1: Create a Lambda Function Deployment Package - AWS Lambda](http://docs.aws.amazon.com/ja_jp/lambda/latest/dg/walkthrough-kinesis-events-adminuser-create-test-function-create-function.html)
