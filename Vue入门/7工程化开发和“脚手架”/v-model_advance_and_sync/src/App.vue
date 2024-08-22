<template>
  <div>
    <SelectBox
      :selectedId="selectedId"
    ></SelectBox>
  </div>
</template>

<script>

import SelectBox from './components/SelectBox.vue';

export default {

  data(){
    return{
      selectedId:"S3",
    }
  },
  
  components:{
    SelectBox,
  }

}
</script>

<style>
  
</style>