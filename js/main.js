var app = new Vue({
  el: "#app",
  data: {
    appliances:[
      {
                id: 1,
                img: 'images/aparato-electrico.png',
                name: 'TV',
                categorie: 'Televisions',
                desc: `Tv 4k, smart, LG`,
                descmodal: ` Tv 4k, smart, LG
                `,
                price: 3000000,
                idm: 1,
                modal_id: 'pd1',
                modalw: '#pd1',
                order_amount: 1,
      },
      {
        id: 1,
        img: 'images/aparato-electrico.png',
        name: 'TV',
        categorie: 'Televisions',
        desc: `Tv 4k, smart, LG`,
        descmodal: ` Tv 4k, smart, LG
        `,
        price: 3000000,
        idm: 1,
        modal_id: 'pd1',
        modalw: '#pd1',
        order_amount: 1,
}
    ],

    cart: [],
    totalCart: 0,
    //variables below
    fcartN: '',
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
  },
});

  //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
