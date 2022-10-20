<template>
  <div class="form-group">
    <input
      class="form-control"
      id="number"
      @keyup="inWords"
      v-model="number"
      type="text"
    />
    <p class="text-danger input-error">{{ spell }}</p>
  </div>
</template>

<script>
export default {
  name: "NumberSpell",
  props: {
    msg: String,
  },
  data() {
    return {
      number: null,
      spell: null,
      set_1: [
        "",
        "one ",
        "two ",
        "three ",
        "four ",
        "five ",
        "six ",
        "seven ",
        "eight ",
        "nine ",
        "ten ",
        "eleven ",
        "twelve ",
        "thirteen ",
        "fourteen ",
        "fifteen ",
        "sixteen ",
        "seventeen ",
        "eighteen ",
        "nineteen ",
      ],
      set_2: [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
      ],
    };
  },
  methods: {
    inWords() {
      if ((this.number = this.number.toString()).length > 9) {
        this.spell = "Number limit exceed";
      } else {
        let n = ("000000000" + this.number)
          .substr(-9)
          .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return;
        var str = "";
        str +=
          n[1] != 0
            ? (this.set_1[Number(n[1])] ||
                this.set_2[n[1][0]] + " " + this.set_1[n[1][1]]) + "crore "
            : "";
        str +=
          n[2] != 0
            ? (this.set_1[Number(n[2])] ||
                this.set_2[n[2][0]] + " " + this.set_1[n[2][1]]) + "lakh "
            : "";
        str +=
          n[3] != 0
            ? (this.set_1[Number(n[3])] ||
                this.set_2[n[3][0]] + " " + this.set_1[n[3][1]]) + "thousand "
            : "";
        str +=
          n[4] != 0
            ? (this.set_1[Number(n[4])] ||
                this.set_2[n[4][0]] + " " + this.set_1[n[4][1]]) + "hundred "
            : "";
        str +=
          n[5] != 0
            ? (str != "" ? "and " : "") +
              (this.set_1[Number(n[5])] ||
                this.set_2[n[5][0]] + " " + this.set_1[n[5][1]]) +
              "only "
            : "";
        this.spell = str;
      }
    },
  },
};
</script>
