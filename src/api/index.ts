import Http from '@/common/http'

interface User {
    id: number;
    username: string;
    password: string;
    sex: number;
}

interface Music {
    name: string;
    picture: string;
    url: string;
    source: string;
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
    private http = new Http();
    public list(): Promise<User> {
        return this.http.Get(this.clientApi.musics, {})
    }

    public addMusic(music: Music): Promise<User> {
        return this.http.Post("/v1/musics", music)
    }
}