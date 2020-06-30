<template>
  <div class="">
    name:<el-input class="inpcontent" v-model="inpContent"></el-input>
     age:<el-input class="inpcontent" v-model="inpage"></el-input>
    <el-button type="primary" @click="getAll">获取数据</el-button>
    <el-button type="primary" @click="setValue">添加数据</el-button>
    <p>hahah</p>
    <ul>
      <li :key="item.studentid" v-for="item in all">{{item.studentid}} {{item.studentname}} {{item.studentage}} <button @click="deleteby(item.studentid)">删除</button> </li>
    </ul>
  </div>
</template>
<style scoped>
.inpcontent{
  width: 200px;
  height: 40px;
}
</style>
<script>
export default {
  name: 'blog',
  data() {
    return {
      inpContent: '',
      inpage:'',
      all:[]
    }
  },
  methods: {
    getValue() {
      // axios.get('/', {params: ''})
      this.$http.get('/api/getValue', {
        params: {id: 1}
      }).then( (res) => {
        this.inpContent = res.data[0].studentname;
        this.inpage = res.data[0].studentage;
        
      })
    },
    setValue() {
      // axios.post('/', {})
      var that=this;
      this.$http.post('/api/setValue', {
        name: that.inpContent,age:that.inpage
      }).then( (res) => {
        this.getAll()
      })
    },
    getAll() {
      // axios.get('/', {params: ''})
      this.$http.get('/api/getAll').then( (res) => {
        this.all=res.data
      })
    },
    deleteby(studentid){
      this.$http.post('/api/deleteId', {
       id: studentid
       }).then( (res) => {
       this.getAll()
      })
    }
  }
}
</script>