import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            user:{
                username:'',
                password:''
            }    
        }
    },
    methods: {
        login(){
            const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
            console.log(api);
            axios.post(api, this.user)
            .then((res)=>{
                console.log(res);
                const token = res.data.token;
                const expired = res.data.expired;
                //可縮寫成const { token, expired } = response.data;
                document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
                window.location = 'products.html';        
            }).catch((err) => {
                alert(err.response.data.message);
            });
        }
    },
    mounted() {
    },
}).mount('#app');