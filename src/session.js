import token from './token'

const host = 'https://api.jellow.club'
const version = '/1.0/'
// const host = 'https://jellow.nondanee.tk'
const headers = {'content-type': 'application/json; charset=utf-8'}


const refresh = () =>
    fetch(host + version + 'app_auth_tokens.refresh', {headers: {'x-jike-refresh-token': token.refreshToken, 'x-jike-device-id': token.deviceId}})
    .then(response => response.headers.get('x-jike-access-token'))

const query = (accessToken, path, options = {}) => {
    options.headers = Object.assign(options.headers || {}, headers, {'x-jike-access-token': accessToken, 'x-jike-device-id': token.deviceId})
    return fetch(host + version+ path, options)
}

export default (() => {
    let session = Promise.resolve()
    const call = (path, options) =>
        session.then(accessToken => query(accessToken, path, options))
        .then(response => response.status === 401 ? (session = refresh(), call(path, options)) : response.json())
    return call
})()