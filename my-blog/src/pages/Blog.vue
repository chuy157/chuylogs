<template>
  <div class="">
    name:<el-input class="inpcontent" v-model="inpContent"></el-input>
     age:<el-input class="inpcontent" v-model="inpage"></el-input>
    <el-button type="primary" @click="getValue">获取数据</el-button>
    <el-button type="primary" @click="setValue">添加数据</el-button>
    <button @click="getAll">查询所有</button>
    <p>hahah</p>
    <ul>
      <li :key="item.studentid" v-for="item in all">{{item}}</li>
    </ul>
    end show
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
        console.log('res', res);
        this.inpContent = res.data[0].studentname;
        this.inpage = res.data[0].studentage;
        
      })
    },
    setValue() {
      // axios.post('/', {})
      this.$http.post('/api/setValue', {
        name: this.inpContent,age:this.inpage
      }).then( (res) => {
        console.log('res', res);
      })
    },
    getAll() {
      // axios.get('/', {params: ''})
      this.$http.get('/api/getAll').then( (res) => {
        console.log('res', res);
        this.all=res.data
      })
    }
  }
}
</script>