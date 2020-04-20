/*
function sendRequest(urls: string[], max:number, callback: () => void) {

}
*/
function fetch(url, timeout = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`url[${url}] success`)
            resolve()
        }, timeout)
    })
}

function sendRequest(urls, max, callback) {
    const urlCount = urls.length;
    const requestsQueue = [];
    const results = [];
    let i = 0;
    const handleRequest = (url) => {
        const req = fetch(url).then(res => {
            const len = results.push(res);
            if (len < urlCount && i + 1 < urlCount) {
                requestsQueue.shift();
                handleRequest(urls[++i])
            } else if (len === urlCount) {
                'function' === typeof callback && callback(results)
            }
        }).catch(e => {
            results.push(e)
        });
        if (requestsQueue.push(req) < max) {
            handleRequest(urls[++i])
        }
    };
    handleRequest(urls[i])
}

sendRequest(Array.from({length:10}).map((n,index) => `/path/${index}`), 3, function() {
    console.log('all done!')
})
