<template>
  <div>
    <button @click="action('de una')">ADD SOMETHING</button>
    <div v-for="(each, i) in getter" :key="each + i">{{each}}</div>
  </div>
</template>

<script>
  import connect from '@/components/global/connect'
  import {GET_TEST} from "../../../types";

  const TestComponent = {
    props: ['getter', 'action']
  };

  export default connect(TestComponent, {getter: 'test/getTest', action: `test/${GET_TEST}`})
</script>
