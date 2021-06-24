function ServerPost(url, send) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url)
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }
            else {
                resolve(xhr.response)
            }
        }
        xhr.onerror =() =>{
            // console.log()
            reject(xhr.response)
        }
        // console.log(send)
        xhr.send(send);
    })    
}
export {ServerPost};