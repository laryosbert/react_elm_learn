
//example
// import _fetch from 'fetchTimeout'
// _fetch(fetch('//localhost/items'), 2000)
//     .then(function (res) {
//         console.log(res)
//     }, function (err) {
//         console.log(err);
//     });

export default (fetch_promise, timeout) => {
    var abort_fn = null;

    //timeout promise
    var abort_promise = new Promise(function (resolve, reject) {
        abort_fn = function () {
            reject('abort promise as timeout');
        };
    });

    //Promise.race, return the first promise which get resolve or reject with same result
    var abortable_promise = Promise.race([
        fetch_promise,
        abort_promise
    ]);

    setTimeout(function () {
        abort_fn();
    }, timeout);

    return abortable_promise;
}
