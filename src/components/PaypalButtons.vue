<template>
  <v-if v-if="this.$store.state.isLog">
    <div id="buttons">
      <div v-if="!paidFor"></div>

      <div v-if="paidFor">
        <h1 class="green--text text-center caption">
          Votre paiement a été effectué !
        </h1>
      </div>

      <div ref="paypal"></div>
    </div>
  </v-if>
</template>

<script>
/*  eslint-disable */

export default {
  name: "PaypalButtons",
  data: function () {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 0.1,
      },
    };
  },
  mounted: function () {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AQZvu1N6-WPQqk9HZRYbY8c0L7K6b9MJsF9rXnmsREb6fcSPPgQ4fZaaqqAkNXCLhMebsZi6fZ0KiHQ1";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    description: this.product.description,
                    currency_code: "USD",
                    value: this.product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();

            this.data;

            this.paidFor = true;

            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
