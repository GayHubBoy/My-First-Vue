<template>
    <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img src="/src/assets/R-C.png" alt="" />
            <div class="userInfo">
              <p class="name">Li Jiahui</p>
              <p class="role">究极管理者</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间:<span>2022-10-13</span></p>
            <p>上次登录地点:<span>西安</span></p>
          </div>
        </el-card>

        <el-card shadow="hover" style="margin-top: 20px" height="450px">
          <el-table :data="tableData">
            <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
          </el-table>
        </el-card>

      </el-col>
      <el-col :span="16" style="margin-top: 20px">
        <div>
          <el-card :body-style="{display:'flex',padding: 0}">

          </el-card>
        </div>
      </el-col>
    </el-row>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  setup(){
    const tableData = [
      {
        Game: 'Sekiro',
        Playtime: 26.2,
        GameGrade: 95
      },
      {
        Game: 'Titan Fall 2',
        Playtime: 9.1,
        GameGrade: 90
      },
      {
        Game: 'GTA5',
        Playtime: 197,
        GameGrade: 80
      },
      {
        Game: 'APEX',
        Playtime: 888,
        GameGrade: 90
      },
      {
        Game: 'WarFrame',
        Playtime: 317,
        GameGrade: 85
      },
      {
        Game: 'Destiny 2',
        Playtime: 607,
        GameGrade: 90
      },
      {
        Game: 'Cyber Punk 2077',
        Playtime: 14.3,
        GameGrade: 90
      }
    ];
    const tableLabel = {
      Game:'游戏',
      Playtime:'游戏时长',
      GameGrade:'游戏评分'
    }
    return{
      tableData,
      tableLabel
    }
  }
})
</script>

<style lang="less" scoped>
.home{
  padding-left: 30px;
  .user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .userInfo{
      .name{
        padding-top: 25px;
        font-weight:bold;
        font:italic 3em Georgia, serif;
      }
      .role{
        font-size: 20px;
        padding-top: 25px;
      }
    }
  }
  .login-info{
    p{
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span{
        color: #666;
        margin-left: 60px;
      }
    }
  }
}
</style>