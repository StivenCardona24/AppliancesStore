var app = new Vue({
  el: "#app",
  data: {
    appliances: [
      {
        id: 1,
        img: 'images/tv1.png',
        name: 'SAMSUNG',
        category: 'TV',
        desc: `Television Samsung 60'' UHD 4k, smartTv`,
        descmodal: `Television Samsung 60'' UHD 4k, smartTv `,
        price: 4500000,
        idm: 1,
        modal_id: 'pd1',
        modalw: '#pd1',
        order_amount: 1,
      },
      {
        id: 2,
        img: 'images/tv2.png',
        name: 'LG',
        category: 'TV',
        desc: `Television LG 50'' OLED 4k, smartTv, LG`,
        descmodal: ` Television LG 50'' OLED 4k, smartTv, LG`,
        price: 3300000,
        idm: 2,
        modal_id: 'pd2',
        modalw: '#pd2',
        order_amount: 1,
      },
      {
        id: 3,
        img: 'images/fridge1.png',
        name: 'MABE',
        category: 'FRIDGE',
        desc: `Fridge MABE No Frost 313 Lts. Brutos RMA300FJCG`,
        descmodal: `Fridge MABE No Frost 313 Lts. Brutos RMA300FJCG `,
        price: 1500000,
        idm: 3,
        modal_id: 'pd3',
        modalw: '#pd3',
        order_amount: 1,
      },
      {
        id: 4,
        img: 'images/fridge2.png',
        name: 'SAMSUNG',
        category: 'FRIDGE',
        desc: `Fridge No Frost SAMSUNG European 307 Lts RB30N4160B`,
        descmodal: `Fridge No Frost SAMSUNG European 307 Lts RB30N4160B`,
        price: 2500000,
        idm: 4,
        modal_id: 'pd4',
        modalw: '#pd4',
        order_amount: 1
      },
      {
        id: 5,
        img: 'images/fryer2.png',
        name: 'IMUSA',
        category: 'FRYER',
        desc: `Imusa Air Fryer Without Oil Easy Fry 4.2 Liters EZ201D56`,
        descmodal: `Imusa Air Fryer Without Oil Easy Fry 4.2 Liters EZ201D56 `,
        price: 440000,
        idm: 5,
        modal_id: 'pd5',
        modalw: '#pd5',
        order_amount: 1,
      },
      {
        id: 6,
        img: 'images/fryer1.png',
        name: 'OSTER',
        category: 'FRYER',
        desc: `OSTER 4.7Lt Digital Air Fryer 2120712`,
        descmodal: `OSTER 4.7Lt Digital Air Fryer 2120712`,
        price: 755000,
        idm: 6,
        modal_id: 'pd6',
        modalw: '#pd6',
        order_amount: 1,
      },

      {
        id: 7,
        img: 'images/lavadora1.png', //'https://exitocol.vtexassets.com/arquivos/ids/12717830-500-auto?v=637873779341170000&width=500&height=auto&aspect=true',
        name: 'WHIRLPOOL',
        category: 'WASHING',
        desc: `WHIRLPOOL Top Load Washer 19 kg (42 lb) WW19BTAHLA`,
        descmodal: `WHIRLPOOL Top Load Washer 19 kg (42 lb) WW19BTAHLA`,
        price: 1940000,
        idm: 7,
        modal_id: 'pd7',
        modalw: '#pd7',
        order_amount: 1,
      },
      {
        id: 8,
        img: 'images/Lavadora2.png',
        name: 'LG',
        category: 'WASHING',
        desc: `LG Washing Machine Top Load 13 kg (29 lb) WT13BSBP.ABMECOL`,
        descmodal: `LG Washing Machine Top Load 13 kg (29 lb) WT13BSBP.ABMECOL`,
        price: 1790000,
        idm: 8,
        modal_id: 'pd1',
        modalw: '#pd1',
        order_amount: 1,
      },

    ],

    products: [],

    clients: [
      {
        id: 1,
        name: 'Juan Jose',
        usser: 'Juanjo',
        password: 1234,
        cart: [],
        accounts: [
          {
            type: 'Card',
            name: 'Visa',
            number: 12345678,

          },
          {
            type: 'Api',
            name: 'Nequi',
            number: 12345678,
          }
        ],

        shopping: [

        ]
        

      },
      {
        id: 2,
        name: 'Isabela Cardona',
        usser: 'IsaCar',
        password: 1234,
        cart: [],
        accounts: 
        [
          {
            type: 'Card',
            name: 'Mastercard',
            number: 12345678,

          },
         
        ],
        shopping: [
          
        ]
        

      }
    ],



    client: '',
    cart: [],
    totalCart: 0,
    //variables below
    fcartN: '',
    category: "categories",
    modaltrigger: 0,
    payment: '',
    usser: "",
    password: "",
    logspan: 0,
    ward: false,
    nameCard: '',
    numberCard: '',



  },
  mounted() {
    this.searchFor();
  },

  methods: {


    login() {

      if (this.usser == "" && this.password == "") {
        this.logspan = 2;
        return
      }

      this.clients.forEach(element => {

        if (this.usser == element.usser && this.password == element.password) {
          alert("Bienvenido");
          this.client = element;
         

         
          
          let close = document.getElementById("close");
          close.click();


        }



      });

      if (this.client == '') {
        this.logspan = 1;
      }
      else{
       
        if( this.client.cart.length > 0){
          this.client.cart.forEach(element => {

            this.addToCart(element);
            
          });
        }

          this.client.cart = this.cart.map(p => p);

          


        
        
    }

    },
    logout(){
      if (confirm("¿Are you sure to log out?") === true){
          this.modaltrigger = 0;
          this.logspan = 0;
          this.usser = '';
          this.password = '';
          this.client = '';
          this.cancel();
      }
  },

  closelogin(){
    this.logspan = 0;
    this.usser = '';
    this.password = '';
},

    minusbtn(item) {
      if (item.order_amount > 0) {
        item.order_amount -= 1;
      }
    },
    plusbtn(item) {
      if (item.order_amount < 20) {
        item.order_amount += 1;
      }
    },

    closemodal(item) {
      item.order_amount = 1;
    },
    cartClick() {
      if (this.cart.length > 0) {
        const total = this.cart.map(element => element.price * element.order_amount).reduce((a, b) => a + b, 0);
        this.totalCart = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(total);
      }
    },

    addToCart(item) {
      if (item.order_amount > 0 && item.order_amount < 20 ) {

        this.cart.push({
          img: item.img,
          name: item.name,
          order_amount: item.order_amount,
          price: item.price,
        });

        /*acc -> accumulator; cv -> current value*/
        this.cart = this.cart.reduce((acc, cv) => {
          const elementExists = acc.find(e => e.name === cv.name);
          if (elementExists) {
            return acc.map((e) => {
              if (e.name === cv.name) {
                return {
                  ...e,
                  order_amount: e.order_amount + cv.order_amount
                }
              }
              return e;
            });
          }
          return [...acc, cv];
        }, []);

        this.fcartN = this.cart.length;

        alert(` ${item.order_amount} ${item.name} added to cart`);
        item.order_amount = 1;

        if(this.client != ''){
          this.client.cart = this.cart.map((p) => p);
        }

      } else {
        alert('you must add at least one product');
      }
    },
    delFromCart(index) {
      this.cart.splice(index, 1);
      const total = this.cart.map(element => element.price * element.order_amount).reduce((a, b) => a + b, 0);
      this.totalCart = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(total);
      if (this.cart.length > 0) {
        this.fcartN = this.cart.length;
      } else {
        this.fcartN = '';
      }
    },


    cancel() {
      if (this.cart.length > 0) {
        this.cart.splice(0, this.cart.length);
        const total = this.cart.map(element => element.price * element.order_amount).reduce((a, b) => a + b, 0);
        this.totalCart = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(total);
        //alert('Su pedido fue cancelado satisfactoriamente');
        this.appliances.forEach(element => element.order_amount = 1);
       
        this.fcartN = '';
      } else {
        const total = this.cart.map(element => element.price * element.order_amount).reduce((a, b) => a + b, 0);
        this.totalCart = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(total);
      }

      
    },

    searchFor() {

      if (this.category == "all" || this.category == "categories") {

        this.products = this.appliances;
      }
      else {
        this.products = this.appliances.filter(item => item.category == this.category);
        window.location.href = "#products"


      }

      




    },

    pay(){

      if(this.cart.length == 0){
          alert("No tienes productos añadidos al carrito");
          return
      }

      if(this.client == ''){
        alert("You must log in")
        let log = document.getElementById("log");
        log.click();
      }

      this.ward = true;


     

      


  },

    buy() {
      if(this.payment == ''){
        alert("Enter the payment method");
        return
       }

       this.client.accounts.forEach(element => {
        if(this.payment == element.type){
          alert("your purchase has been made successfully");
          this.client.shopping.push(this.cart.map(e => e));
          this.ward = false;
          this.payment = '';
          this.cancel();
          let close = document.getElementById("close");
          close.click();
          return
         }
        
       });

       if(this.cart.length > 0){
        alert("You do not have this purchase method available");
        let log = document.getElementById("add");
        log.click();


       }
     
       this.ward = false;
      

      

       
    },

    save(){

      let ward = true;
      if(this.payment != '' && this.nameCard != '' && this.numberCard != ''){

        this.client.accounts.forEach(element => {

          if(this.nameCard == element.name && this.numberCard == element.number){
            alert("You already have an account");
            ward = false;

          }
          
        });

        if(ward){
          this.client.accounts.push({
            type: this.payment,
            name: this.nameCard,
            number: this.numberCard
          })

          alert("account added successfully");
          let close = document.getElementById("close");
          close.click();
        }



      }
      else{
        alert("Enter the data correctly");
      }

      this.nameCard = '';
      this.numberCard = '';


    }


  }
});

  //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
