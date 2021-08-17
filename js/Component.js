Vue.component('list-contact', {
    template: `<div>
        <div class="list-contact d-flex position-relative w-100" v-for="(item,index) of contact" :key="index">
            <div class="contact-icon position-absolute text-warning text-20 ">
                <span class="iconify" :data-icon="item.icon"></span>
            </div>
            <div class="contact-text text-dark pr-3 w-100">
                <p class="title text-18 font-weight-bold mb-1 ">{{item.title}}</p>
                <p class="mb-0 text-secondary">{{item.text}}</p>
            </div>
        </div>
    </div>`,
    data: function () {
        return {
            contact: [{
                id: 1,
                title: 'Email',
                icon: 'entypo:email',
                text: 'esesdedev@gmail.com',
            }, {
                id: 2,
                title: 'Instagram',
                icon: 'akar-icons:instagram-fill',
                text: 'sidescript.id',
            }, {
                id: 3,
                title: 'Whats App',
                icon: 'akar-icons:whatsapp-fill',
                text: '+62 857-3278-4157',
            }]
        }
    }
})