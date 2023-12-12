
import dayjs from 'dayjs';
import numeral from 'numeral'
import {
  mapState
} from "vuex";

var myMixin = {
  data() {
    return {
      active: '',
      langs: [
        {
          value: 'en',
          name: 'English'
        },
        {
          value: 'cn',
          name: '简体中文'
        },
        {
          value: 'cnt',
          name: '繁体中文'
        },
        {
          value: 'fr',
          name: 'Français'
        },
        {
          value: 'ru',
          name: 'Русский'
        },
        {
          value: 'sp',
          name: 'Español'
        },
        {
          value: 'po',
          name: 'Português'
        },
        {
          value: 'kr',
          name: '한국어'
        },
        {
          value: 'jp',
          name: '日本語'
        },
        {
          value: 'ar',
          name: 'عربي'
        },
        {
          value: 'ge',
          name: 'Deutsch'
        },
        {
          value: 'vn',
          name: 'Việt Nam'
        },
      ],
      

      partners: [
       
        
      ]
    }
  },
  methods: {
    scrollTo(id) {
      const domRect = document.getElementById(id).getBoundingClientRect()
      // console.log(domRect.top);
      document.documentElement.scrollTop = domRect.top

    },
    scrollToTop() {
      setTimeout(() => {
        this.active = ''
      }, 500);
      document.documentElement.scrollTop = 0
      // document.body.scrollTop = val
      // window.pageYOffset = val
    },
    href(id) {
      // console.log(id);
      this.active = id.replace('#', '')
      location.href = id
    },
    /**
     * change language
     */
    changeLang(command) {
      this.$i18n.locale = command;
      this.$store.commit('lang', command)
    },
    /**
     * open url in current page
     */
    go(url) {
      location.href = url
    },
    /**
     * open url in new page
     */
    open(url) {
      window.open(url)
    },
    // addAssetToMetaMask(symbol, address, decimals) {
    //   wallet.addERC20ToMetaMask({
    //     symbol: symbol.substring(0, 11), // max length is 11
    //     address: address,
    //     decimals: decimals
    //   })
    // },
    go(url) {
      open(url) // open 3 party url in new page
    },
    /** Obtain a random number between two numbers
     * @getRandom Obtain a random number between two numbers, without passing values by size, it will automatically determine
     * @num1  Number
     * @num2  Number
     * @return Number Random numbers within the range
     */
    getRandom(num1, num2) {
      let max = 0
      let min = 0;
      num1 > num2 ? [max, min] = [num1, num2] : [max, min] = [num2, num1]
      let rand = Math.floor(Math.random() * (max - min + 1) - min);
      return rand;
    }
  },
  computed: {
    ...mapState([
      "lang",
      "isMobile",
      "darkTheme",
      "data",
      "InnerWidth",
      "limitWidth"
    ]),
    urls() {
      return {
        dex: 'https://traderjoexyz.com/trade?inputCurrency=AVAX&outputCurrency=0x2a1d12B6a84999aeAc82579F730e8Df9875092F0#/',
        home: process.env.VUE_APP_MODE === 'prod' ? 'https://apoy.fi/' : 'http://xx:8080/',
        dapp: process.env.VUE_APP_MODE === 'prod' ? 'https://doc-en.apoy.fi/' : 'https://doc-en.apoy.fi/',
        secure: '',
        github: 'https://github.com/Apoy-Fi',
        discord: 'https://discord.gg/b5FNSKGM8J',
        telegram: 'https://t.me/apoyfi',
        twitter: 'https://twitter.com/ApoyFinance',
        whitePaper: 'https://doc-en.apoy.fi/',
        docs: 'https://doc-en.apoy.fi/',
        video: 'xx'
      }
    },

    tvl() {      
      return 0;
    },

    // Random animation
    randomAnimate() {
      let animateClasses = [
        'animate__fadeInDown', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeInUp',
        'animate__fadeInTopLeft', 'animate__fadeInTopRight', 'animate__fadeInBottomLeft',
        'animate__fadeInBottomRight'
      ]
      // console.log(animateClasses[this.getRandom(0, 8)])
      return animateClasses[this.getRandom(0, 8)]
    },
    /**
     * current language
     */
    currentLang() {
      return this.langs.find(item => item.value === this.lang).name
    },
    product_list() {
      return [{
          name: 'savings',
          path: 'savings',
          tip1: this.$t('common.savingsTip1'),
          tip2: this.$t('common.savingsTip2')
        },
        {
          name: 'farm',
          path: 'farm',
          tip1: this.$t('common.farmTip1'),
          tip2: this.$t('common.farmTip2')
        },
        {
          name: 'fund',
          path: 'fund',
          tip1: this.$t('common.fundTip1'),
          tip2: this.$t('common.fundTip2')
        },
      ]
    },

  },

  /**
   * Vue filter, uniformly processing data display
   */
  filters: {
    date(val) {
      try {
        if (String(val).length === 10) {
          val = val * 1000
        }
        if (!val) {
          return '-'
        }
        return dayjs(val).format('YYYY-MM-DD')
      } catch (error) {
        console.error('invalid date string:', val, error)
        return '-'
      }
    },
    time(val) {
      try {
        if (String(val).length === 10) {
          val = val * 1000
        }
        if (!val || val == '0') {
          return '-'
        }
        return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
      } catch (error) {
        console.error('invalid date string:', val, error)
        return '-'
      }
    },
    /**
     * Percentage, default to two decimal places
     * @param {*} val 
     * @param {*} decimal Reserve digits
     * @returns 
     */
    percent(val, decimal = 2) {
      if (val === Infinity) {
        return Infinity
      }
      if (isNaN(val)) {
        return '-'
      }
      if (val > 0 && (val < 0.001 || val > 1e5)) {
        val = (Number(val) * 100).toPrecision(decimal);
      } else {
        val = (Number(val) * 100).toFixed(decimal);
      }

      return isNaN(val) ? "-" : val + "%";
    },
    /**
     * Keep decimal places, default to two places
     * @param {*} val 
     * @param {*} decimal Reserve digits
     * @returns 
     */
    fixed(val, decimal = 2) {
      if (val === Infinity) {
        return Infinity
      }
      if (val < 1) {
        val = Number(val).toPrecision(decimal)
      } else {
        val = Number(val).toFixed(decimal);
      }
      // val = Number(val).toPrecision(decimal)
      return isNaN(val) ? "-" : val;
    },

    /**
     * Abbreviation for large numbers using kmb
     * @param {*} val 
     * @returns 
     */
    kmb(val) {
      val = Number(val)
      if (val < 1e-4) {
        val = 0
      }
      return isNaN(val) ? "-" : numeral(val).format('0,0.00[a]');
    },
    money(val) {
      val = Number(val)
      if (val < 1e-4) {
        val = 0
      }
      return isNaN(val) ? "-" : numeral(val).format('0,0.00');
    },
  },
};

export default myMixin;