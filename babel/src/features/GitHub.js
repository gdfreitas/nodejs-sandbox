import gitHubApi from './gitHubApi'

export default class GitHub {
    constructor () {
        this.repositories = []
        this.formElement = document.getElementById('repositoryForm')
        this.inputElement = document.querySelector('input[name=repository]')
        this.listElement = document.getElementById('repositoryList')
        this.registerHandlers()
    }

    registerHandlers () {
        this.formElement.onsubmit = event => this.addRepository(event)
    }

    setLoading (loading = true) {
        if (loading) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando...'))
            loadingEl.setAttribute('id', 'loading')

            this.formElement.appendChild(loadingEl)
        } else {
            document.getElementById('loading').remove()
        }
    }

    setError (visible = true, error) {
        if (visible) {
            let errorEl = document.createElement('span')
            errorEl.appendChild(document.createTextNode(`Erro ao consultar: ${error}`))
            errorEl.setAttribute('id', 'error')
            this.formElement.appendChild(errorEl)
        } else {
            let el = document.getElementById('error')
            if (el) {
                el.remove()
            }
        }
    }

    async addRepository (event) {
        event.preventDefault()

        const repositoryInput = this.inputElement.value

        if (!repositoryInput) return

        this.setLoading()
        this.setError(false)

        try {
            const response = await gitHubApi.get(`/users/${repositoryInput}`)
            const { avatar_url, name, bio, html_url } = response.data

            this.repositories.push({
                name,
                description: bio,
                avatar_url,
                link: html_url
            })

            this.render()
        } catch (err) {
            console.error('Erro ao buscar por repositório', err.response)
            this.setError(true, err.response.data.message)
        }

        this.setLoading(false)
    }

    render () {
        this.listElement.innerHtml = ''
        this.repositories.forEach(repository => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repository.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repository.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repository.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repository.link)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listElement.appendChild(listItemEl)
        })
    }
}
