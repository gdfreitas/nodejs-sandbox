class List {
    constructor () {
        this.content = []
    }

    add (data) {
        this.content.push(data)
        console.log(this.content)
    }
}

export default List
