<style lang="scss" src="./app.scss" />

<template src="./app.html" />

<script>
import config from 'config'
import Vue from 'vue'
import io from 'socket.io-client'

//console.log(config);

let socket = io(config.serverDomain);

export default {
  name: 'app',
  data: function() {
    return {
      message: '',
      messages: []
    }
  },
  methods: {
    sendMessage: function() {
      socket.emit('message', this.message);
      this.message = '';
    }
  },
  created: function() {
    socket.on('message', message => {
      this.messages.push(message);
      console.log(this.messages);
    });
  }
};


</script>

