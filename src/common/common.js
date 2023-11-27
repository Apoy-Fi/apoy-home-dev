
import store from "../store"
import axios from "./utils/api"

let common = {}
common.data_get = async () => {
    if (process.env.VUE_APP_MODE === 'prod') {
      const res = await Promise.allSettled([
        // axios.get('/api/43114/data.json'),
        axios.get('/api/Mainnet/data.json'),
        axios.get('/api/SuiMainnet/data.json'),
      ])
  
      store.commit('data', {
        // avalanche : res[0].value.data,
        aptos : res[0].value.data,
        sui : res[1].value.data

      })
      // console.debug(res)   
  } else if (process.env.VUE_APP_MODE === 'test') {
    const res = await Promise.allSettled([
      // axios.get('/api/43113/data.json'),
      axios.get('/api/Testnet/data.json'),
      axios.get('/api/SuiTestnet/data.json'),
    ])

    store.commit('data', {
      // avalanche_test : res[0].value.data,
      aptos_test : res[0].value.data,
      sui_test : res[1].value.data
    })

    // console.debug(res)
  } else { // DEV
    const res = await Promise.allSettled([
     //  axios.get('/api/43113/data.json'),
     // axios.get('/api/Devnet/data.json'),
    ])

    store.commit('data', {
      avalanche_test : res[0]?.value?.data || 0,
      aptos_test : res[1]?.value?.data || 0
    })

    // console.debug(res)
  }
}

export default common
