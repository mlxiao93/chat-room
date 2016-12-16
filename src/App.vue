<style lang="scss" src="./app.scss" />

<template src="./app.html" />

<script>
import config from 'config'
//import io from 'socket.io-client'
import Vue from 'vue'
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, config.serverDomain);

//console.log(config);

//let socket = io(config.serverDomain);

export default {
  name: 'app',
  sockets: {
    message: function(message) {
      console.log(message);
      console.log(this.messages)
    }
  },
  data: function() {
    return {
      message: '',
      messages: []
    }
  },
  methods: {
    sendMessage: function() {
      this.$socket.emit('message', this.message);
      this.message = '';
    }
  },
//  created: function() {
//    socket.on('message', message => {
//      console.log(message);
//      console.log(this.messages);
//    });
//  }
};


</script>

