export default {
  name: "index",

  data() {
    return {
      listData: [
        {
          time: "1968",
          detail: "Estrablished Tangerang, Indonesia Facility - PRB",
          width: "160px",
          line: "200px",
          bottom: "150px",
          left: "60px",
          delay: "1s",
          isRed: false
        },
        {
          time: "1988",
          detail: "Partnership with adidas - PRB",
          width: "120px",
          line: "120px",
          bottom: "153px",
          left: "120px",
          delay: "4s",
          isRed: false
        },
        {
          time: "1991",
          detail: "Established Guangzhou, China Facility - EVG",
          width: "90px",
          line: "20px",
          bottom: "165px",
          left: "220px",
          delay: "7s",
          isRed: false
        },
        {
          time: "1993",
          detail: "Became adidas exclusive sourcing factory - EVG",
          width: "120px",
          line: "100px",
          bottom: "180px",
          left: "300px",
          delay: "10s",
          isRed: false
        },
        {
          time: "1994",
          detail: "Started Golf production (50K/year) - EVG",
          width: "160px",
          line: "240px",
          bottom: "190px",
          left: "350px",
          delay: "13s",
          isRed: false
        },
        {
          time: "1998",
          detail:
            "Appointed to be FOOTBALL SPECIALTY CENTER home of Predator football series development for World Cup - PRB",
          width: "156px",
          line: "30px",
          bottom: "218px",
          left: "470px",
          delay: "16s",
          isRed: true
        },
        {
          time: "2004",
          detail:
            "Started Outdoor development & production (500K/season) - PRB",
          width: "136px",
          line: "210px",
          bottom: "212px",
          left: "560px",
          delay: "19s",
          isRed: false
        },
        {
          time: "2008",
          detail:
            "- Established Qingyuan, China facility - EVN (Headquarter) -Produced Tunit Series -Shoes for World Cup - (500K/Year) - PRB",
          width: "150px",
          line: "80px",
          bottom: "173px",
          left: "660px",
          delay: "22s",
          isRed: false
        },
        {
          time: "2010",
          detail:
            "Established EP Group as strategic alliance between Evervan & Panarub",
          width: "140px",
          line: "250px",
          bottom: "150px",
          left: "760px",
          delay: "25s",
          isRed: false
        },
        {
          time: "2013",
          detail: "Started vulcanized production",
          width: "70px",
          line: "60px",
          bottom: "230px",
          left: "860px",
          delay: "28s",
          isRed: true
        },
        {
          time: "2018",
          detail: "Established Phnom Phen, Cambodia Facility - EVC",
          width: "124px",
          line: "60px",
          bottom: "288px",
          left: "960px",
          delay: "31s",
          isRed: false
        },
        {
          time: "2020",
          detail: "Group monthly dapa. 6M- CN: 2M- VN + KH: 2M- ID: 2M",
          width: "124px",
          line: "160px",
          bottom: "280px",
          left: "1050px",
          delay: "34s",
          isRed: true
        }
      ],
      timer: null
    };
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      let data = this.listData;
      let n = 0;
      this.timer = setInterval(() => {
        if (n === data.length) {
          clearInterval(this.timer);
        } else {
          this.listData.splice(n, 1, Object.assign(data[n], { cur: true }));
          n++;
        }
      }, 3e3);
    }
  }
};
