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
                text: 'sidescript@gmail.com',
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

Vue.component('list-product', {
    props: ['product', 'productactive'],
    template: `
    <div>
        <div class="col-md-3 col-6 product-list" v-for="(item, index) of product" :key="index">
            <div class="card-product">
                <img :src="...." class="w-100 img-product" >
                <div class="product-detail position-relative">
                    <div
                        class="bg-dark text-warning bookmark px-2 py-1 position-absolute text-16 font-weight-bold rounded-circle ">
                        <span class="iconify" data-icon="bi:bookmark-fill"></span>
                    </div>
                    <h5 class="product-name font-weight-bold">{{item.nama}}</h5>
                    <div class="product-price">
                        Rp. {{item.harga}},00 
                    </div>
                    <div class="d-flex product-info">
                        <div>
                            <span class="mb-0 font-weight-bold text-center title mr-2">{{item.sisa}}</span>
                            <span class="text">Tersisa</span>
                        </div>
                        <div class="ml-xl-4 ml-2">
                            <span class="mb-0 font-weight-bold text-center title mr-2">{{item.terjual}}</span>
                            <span class="text">Terjual</span>
                        </div>
                    </div>
                    <button class="btn btn-dark text-warning text-20 py-0 w-100"  type="button" data-toggle="modal" :data-target="'#modalProduct-'+ item.id">
                        <span class="iconify" data-icon="clarity:shopping-cart-line"></span>
                    </button>
                </div>
            </div>
            <div class="modal fade" :id="'modalProduct-'+ item.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">{{item.nama}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-4 p-0">
                                        <img :src="'img/product/'+ productactive.toLowerCase()+ '/'+ item.gambar"
                                            alt="">
                                    </div>
                                    <div class="col-md-7 ml-auto p-0">
                                        <form action="">
                                            <div class="form-group">
                                                <label for="jumlah">Jumlah Barang</label>
                                                <input type="number" class="form-control"
                                                    aria-describedby="jumlah" @change="totalQty" :data-sisa="item.sisa">
                                                <small class="form-text text-muted " >Maksimal {{item.sisa}} buah</small>
                                            </div>
                                            Subtotal Produk :
                                            <h4 class="text-warning">
                                                Rp.{{qty * item.harga}},00
                                            </h4> 
                                            <input type="hidden" >
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    data: function () {
        return {
            qty: 1,
            from: 0,
        }
    },
    methods: {
        totalQty: function (event) {
            const value = event.target.value
            const sisa = event.target.dataset.sisa
            if (this.from < sisa) {
                if (value >= 1) {
                    this.qty = value
                    this.from++
                }
            }
        }

    }
})