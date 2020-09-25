
const JsonToNameValue = (json) => {
    if (typeof json == 'string') {
        return json
    }

    let str = ''
    if (typeof json != 'object') {
        return str

    } else {
        const keys = Object.keys(json)
        if (keys.length < 1) return str
        keys.forEach((k, i) => {
            let value = json[k]
            if (typeof value == 'object') {
                value = JSON.stringify(value)
            }
            if (i != 0) str += ', '
            str += k + ':' + value
        })

        return str
    }
}

module.exports = JsonToNameValue