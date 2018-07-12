import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AWS from 'aws-sdk'

Vue.config.productionTip = false

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-1' // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-southeast-1:8bfaa722-7b0d-4fea-82ef-4210ad6c13a9'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
