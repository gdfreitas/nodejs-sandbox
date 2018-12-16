(async () => {
    const {value} = await doSomeServiceCall()
    console.log(value)
})();

function doSomeServiceCall() {
    return Promise.resolve({value: 10})
}