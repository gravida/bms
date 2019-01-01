import Network from '@/common/http'

interface User {
    id: number;
    username: string;
    password: string;
    sex: number;
}
export default class ClientApi {
    clientApi = {
        /**
         * method post
         * 
         * body:{username:string,password:string}
         * response: success  =>User
         * response: error =>string
         */
        musics: '/v1/musics'
    }
    private network = new Network();
    public list(): Promise<User> {
        return this.network.Get(this.clientApi.musics, {})
    }

    public addMusic(): Promise<User> {
        return this.network.Post("/v1/musics", {name: "aaa"})
    }
}