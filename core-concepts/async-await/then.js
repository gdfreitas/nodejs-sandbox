class Sleep {
    constructor(timeout)  {
        this.timeout = timeout;
    }

    then(resolve, reject) {
        const startTime = Date.now()
        setTimeout(() => resolve(Date.now() - startTime), this.timeout)
    }
}

(async () => {
    const actualTime = await new Sleep(1000);
    console.log(actualTime);
})();