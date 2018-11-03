import axios from 'axios'

export default class GitHubApi {
    static async printUserInfo (username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch (err) {
            console.error('Erro ao consultar API', err)
        }
    }
}
