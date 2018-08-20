<template src="./cell.html"></template>

<script src="./cell.js"></script>

<style>
  #cell{
    width: 100px;
    flex: 0 0 200px;
    order: -1;
    border: 1px solid #ccc;
  }
  .basic-cell,.charts-cell{
    width: 100%;
    height: 160px;
    text-align: left;
    border: 1px solid #ccc;
  }
  .basic-cell>i, .charts-cell>i{
    font-size: 64px;
  }
</style>
