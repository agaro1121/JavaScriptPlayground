function doAsync() {
    let p = new Promise((resolve, reject) => {
        console.log('in promise code');
        /*
         * equivalent of Thread.sleep(2000)
         *
         * setTimeout(Callback, TimeInMillis)
         * executes callback after TimeInMillis
         * */
        setTimeout(() => {
            console.log('resolving...');
            resolve();
        }, 2000);
    });

    return p;
}

/*
 * Rejecting
 * */
function doAsync2() {
    let p = new Promise((resolve, reject) => {
        console.log('in promise code');
        /*
         * equivalent of Thread.sleep(2000)
         *
         * setTimeout(Callback, TimeInMillis)
         * executes callback after TimeInMillis
         * */
        setTimeout(() => {
            console.log('rejecting...');
            reject();
        }, 2000);
    });

    return p;
}

//resolving
let promise = doAsync().then( //equivalent of Future.onComplete(...)
    () => console.log('fulfilled!'),
    () => console.log('rejected !!!!')
);

//rejecting
let promise2 = doAsync2().then( //equivalent of Future.onComplete(...)
    () => console.log('fulfilled!'),
    () => console.log('rejected !!!!')
);

/*
 *
 * Passing Failure reasons from promise -> completing code
 *
 * */
function doAsyncWithRejectReason() {
    let p = new Promise((resolve, reject) => {
        console.log('in promise code');
        /*
         * equivalent of Thread.sleep(2000)
         *
         * setTimeout(Callback, TimeInMillis)
         * executes callback after TimeInMillis
         * */
        setTimeout(() => {
            console.log('resolving...');
            reject('Database Error');
        }, 2000);
    });

    return p;
}

let promise3 = doAsyncWithRejectReason().then( //equivalent of Future.onComplete(...)
    (success) => console.log('fulfilled! with...' + success),
    (ex) => console.log('rejected !!!! because....' + ex)
);

function doAsyncWithResolveObject() {
    let p = new Promise((resolve, reject) => {
        console.log('in promise code');
        /*
         * equivalent of Thread.sleep(2000)
         *
         * setTimeout(Callback, TimeInMillis)
         * executes callback after TimeInMillis
         * */
        setTimeout(() => {
            console.log('resolving...');
            resolve('Database Success!!');
            // resolve({          //Will work :-)
            //     num: 123,
            //     string: "String"
            // })
        }, 2000);
    });

    return p;
}

let promise4 = doAsyncWithResolveObject().then( //equivalent of Future.onComplete(...)
    (success) => console.log('fulfilled! with...' + success),
    (ex) => console.log('rejected !!!! because....' + ex)
);

/*
 * Chaining `.then` calls
 * */
function doAsyncChained() {
    let p = new Promise((resolve, reject) => {
        console.log('in promise code');
        /*
         * equivalent of Thread.sleep(2000)
         *
         * setTimeout(Callback, TimeInMillis)
         * executes callback after TimeInMillis
         * */
        setTimeout(() => {
            console.log('resolving...');
            resolve('OK');
        }, 2000);
    });

    return p;
}
//resolving
let promise5 =
    doAsyncChained()
    //only passing in a function for success case
        .then(value => {
            console.log('fulfilled! ' + value);
            /*
             wraps this up in a new fulfilled promise because
             the previous promise was fulfilled.
             Sort of like Future.map(...)
             */
            return 'for Sure';
        })
        .then(value => console.log('Really! ' + value));
/*
 ******* Output *******
 > fulfilled! OK
 > Really! for Sure //'for Sure was passed along as the new value'
 * */
function doAsyncWithErrorCatch() {
    let p = new Promise((resolve, reject) => {
        console.log('in promise code');
        /*
         * equivalent of Thread.sleep(2000)
         *
         * setTimeout(Callback, TimeInMillis)
         * executes callback after TimeInMillis
         * */
        setTimeout(() => reject('No Go'), 2000);
    });

    return p;
}
let promise6 =
    doAsyncWithErrorCatch()
    /*
        * Similar to Future.onFailure(...)
        * */
        .catch(reason => console.log('Error: ' + reason));