var app = new Vue({
  el: "#app",
  data: {
    appliances:[
      {
                id: 1,
                img: 'images/aparato-electrico.png',
                name: 'SAMSUNG',
                categorie: 'TV',
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
        img: 'images/aparato-electrico.png',
        name: 'LG',
        categorie: 'TV',
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
                img: 'images/aparato-electrico.png',
                name: 'MABE',
                categorie: 'FRIDGE',
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
        img: 'images/aparato-electrico.png',
        name: 'SAMSUNG',
        categorie: 'FRIDGE',
        desc: `Fridge No Frost SAMSUNG European 307 Lts RB30N4160B`,
        descmodal: `Fridge No Frost SAMSUNG European 307 Lts RB30N4160B`,
        price: 2500000,
        idm: 4,
        modal_id: 'pd4',
        modalw: '#pd4',
        order_amount: 1,
      },
      {
        id: 5,
        img: 'images/aparato-electrico.png',
        name: 'IMUSA',
        categorie: 'FRYER',
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
img: 'images/aparato-electrico.png',
name: 'OSTER',
categorie: 'FRYER',
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
  img: 'images/aparato-electrico.png',
  name: 'WHIRLPOOL',
  categorie: 'WASHING',
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
img: 'images/aparato-electrico.png',
name: 'LG',
categorie: 'WASHING',
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
  

    cart: [],
    totalCart: 0,
    //variables below
    fcartN: '',
    categorie: "",
    
    
  },
  mounted(){
    this.searchFor();
  },
  methods: {
    minusbtn(item){
      if (item.order_amount > 0) {
          item.order_amount -= 1;
      } 
  },
  plusbtn(item){
      if (item.order_amount < 20) {
          item.order_amount += 1;
      } 
  },
  closemodal(item){
      item.order_amount = 1;
  },
  cartClick(){
      if (this.cart.length > 0) {
          const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
          this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
      }
  },
  addToCart(item){
      if(item.order_amount > 0 && item.order_amount < 20) {
          
          this.cart.push({
              img: item.img,
              prod: item.name,
              qty: item.order_amount,
              price: item.price,
          });

          /*acc -> accumulator; cv -> current value*/
          this.cart = this.cart.reduce((acc, cv) => {
              const elementExists = acc.find(e => e.prod === cv.prod);
              if (elementExists) {
              return acc.map((e) => {
                  if (e.prod === cv.prod) {
                  return {
                      ...e,
                      qty: e.qty + cv.qty
                  }
                  }
                  return e;
              });
              }
              return [...acc, cv];
          }, []);

          this.fcartN = this.cart.length;

          alert(`Se agregaron ${item.order_amount} ${item.name} al carrito`);
          item.order_amount = 1;

      }else{
          alert('Debe agregar mínimo un producto');
      }
  },


  searchFor(){

    if(this.categorie == "all" || this.categorie == ""){
      
      this.products = this.appliances;
    }
    else{
      this.products = this.appliances.filter(item => item.categorie == this.categorie);
     
    }

    
  },
  }
});

  //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
