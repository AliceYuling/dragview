<template src="./preview.html"></template>

<script src="./preview.js"></script>

<style>
#preview {
  flex: 1;
  width: 100%;
  border: 1px solid #ccc;
  position: relative;
}
.mu-paper {
  height: 100%;
}
.svg-wrapper {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 0;
  overflow: visible;
}
svg{
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
