import decodeKinesis from './index'
import assert from 'assert'

const records = [{
    "kinesis": {
        "partitionKey": "partitionKey-3",
        "kinesisSchemaVersion": "1.0",
        "data": new Buffer("Hello World").toString('base64'),
        "sequenceNumber": "49545115243490985018280067714973144582180062593244200961"
    },
    "eventSource": "aws:kinesis"
}]

describe('filter', () => {
    it('get only kinesis date', () => {
        assert.equal(1, records.filter(decodeKinesis.filter).length)
    })
})

describe('decode', () => {
    it('decode base64 data', () => {
        let data = records.filter(decodeKinesis.filter)
            .map(decodeKinesis.decode)
        assert.equal('Hello World', data[0])
    })
})
