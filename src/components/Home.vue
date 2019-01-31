<template>
  <div class="box">
    <div @click="btn($event,'11')">asdfasdfadf</div>
    <div @click="sets">改变</div>
  </div>
</template>
<script>
  export default {
    name:"Home",
    data(){
      return{}
    },
    created(){

    },
    mounted(){

    },
    methods:{
      btn(ev, i){
        console.log(this.$store.state.aa)
      },
      sets(){
        this.$store.commit("setstate", "dkdddd")
        console.log(this.$store.state.aa)

        this.axios.get("url",{
          headers:{

          },
          params:{

          }
        }).then(function (data) {

        }).catch(function (err) {

        })

        this.axios.post("url",{},{
          headers:{

          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
