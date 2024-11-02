<template>
  <el-container class="container">
    <div class="app-wrapper">
      <el-header class="header">
        <img src="../assets/news.png" height="40px" id="logo" />
        <p id="title">财经新闻</p>
      </el-header>
    
      <el-container class="content-wrapper">
        <el-main class="content">
          <!-- <div class="news-bar" v-for="item in data" :key="item">
            <div class="item">
              <p class="title">{{ item.title }}</p>
              <p class="date">{{ item.date }}</p>
              <img src="{{item.thumbnail_pic_s}}" alt="{{item.title}}"/>
            </div>
          </div> -->

          <div class="news-bar">
            <el-skeleton :rows="2" :animated="true" :loading="loading">
              <template #template>
                <el-skeleton-item variant="div" style=" width:  calc(40% - 168px);height:45%; margin: 12px;">
                </el-skeleton-item>
                <el-skeleton-item variant="div" style=" width:  calc(40% - 168px);height:45%; margin: 12px;">
                </el-skeleton-item>
                <el-skeleton-item variant="div" style=" width:  calc(40% - 168px);height:45%; margin: 12px;">
                </el-skeleton-item>
                <el-skeleton-item variant="div" style=" width:  calc(40% - 168px);height:45%; margin: 12px;">
                </el-skeleton-item>
                <el-skeleton-item variant="div" style=" width:  calc(40% - 168px);height:45%; margin: 12px;">
                </el-skeleton-item>
                <el-skeleton-item variant="div" style=" width:  calc(40% - 168px);height:45%; margin: 12px;">
                </el-skeleton-item>
                <el-skeleton-item variant="div" style=" width:  calc(40% - 168px);height:45%; margin: 12px;">
                </el-skeleton-item>
                <el-skeleton-item variant="div" style=" width:  calc(40% - 168px);height:45%; margin: 12px;">
                </el-skeleton-item>
              </template>
            </el-skeleton>
            <div class="item"  v-for="item in data" :key="item" @click="openUrl(item.url)">
              <img class="pic" :src="item.picUrl" />
              <div class="text">
                <p class="title">{{ item.title }}</p>
                <p class="date">{{ item.ctime }}</p>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </el-container>
</template>

<script>
import {onMounted,ref } from 'vue'
import axios from 'axios'
export default {
  name: "NewsCore",

  setup() {
    let data=ref();
    let loading=ref(true);
    let api='/fapigx/caijing/query?num=20&page=&rand=&word=&key=a46d9e7d814c74852583a595114e6d53'; 
    onMounted(()=>{
      getData();
    });
    function getData(){
        axios.get("/myApi"+api).then((Response)=>{
        console.log(Response.data);
        console.log(Response.data);
          data.value=Response.data.result.newslist;
          loading.value=false;
      })
    }
   function setDefaultImage(e){

    e.target.src = 'https://img95.699pic.com/photo/50058/8530.jpg_wh860.jpg'

   }
   function openUrl(url){
      window.open(url,"_blank");
   }
    return{
      data,
      getData,
      setDefaultImage,
      openUrl,
      loading
    }
      
  }
};
</script>
<style scoped>
    .app-wrapper {
    width: 100%;
    height: 100%;
  }

  .header {
    height: 50px;
    background-color:white;
    padding: 2px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
  }

  .content {
   
    position: relative;
    width: 100%;
    height: calc(100vh - 50px);  
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow-y: scroll; */
  }

  .header > #title {
  margin-left: 10px;
  font-size: 20px;
  }
  .news-bar{
    border-radius: 20px;
    height: calc(100vh - 150px);
    width: calc(100vw - 200px);
    
    backdrop-filter: blur(10px) brightness(90%);
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
  }

  .item{
    margin: 12px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 2px 20px #00000050;
    border-radius: 10px;
    width:  calc(40% - 168px);
    cursor: pointer;
    /* padding-bottom: 8px; */
  }
  /* .item:hover{
    
  } */
  .title{
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */
  }
  .date{
    margin-bottom: 5px;
    color: grey;
  }
  .pic{
    height: 50%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .text{
    margin: 10px;
  }

  ::-webkit-scrollbar {
    width: 14px;
}

::-webkit-scrollbar:hover {
    background-color: #7f7f7f30;
}

::-webkit-scrollbar-thumb {
    background: #7f7f7f70;
    background-clip: padding-box;
    border: 6px solid transparent;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    border: 4px solid transparent;
}
</style>
