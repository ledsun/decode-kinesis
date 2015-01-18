export function filter(record) {
    return record.kinesis
}

export function decode(record) {
    const encodedPayload = record.kinesis.data

    return new Buffer(encodedPayload, 'base64').toString('ascii')
}
