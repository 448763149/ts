import {HttpService} from '@/api/request/http'
   
declare module 'vue/types/vue' {
    interface Vue {
        $httpService: HttpService;
    }
}