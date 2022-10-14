<template>
  <el-header>
    <div class="l-content">
      <el-button size="small" plain @click="handleCollapse">
        <el-icon>
          <Menu />
        </el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
        <!--        <el-breadcrumb-item>promotion list</el-breadcrumb-item>-->
<!--        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>-->
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
    <span class="el-dropdown-link">
      <img class="user" :src="getImgSrc()" alt=""/>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import {computed,defineComponent} from "vue-demi";
import {useStore} from 'vuex'
export default {
  setup(){
    let store = useStore()
    const getImgSrc = () =>{
      return new URL(`../assets/R-C.png`,import.meta.url).href;
    };
    let handleCollapse = () => {
      store.commit("updateIsCollapse")
    }
    const current = computed(() => {
      return store.state.currentMenu;
    })
    return{
      getImgSrc,
      handleCollapse,
      current
    }
  }
}
</script>

<style lang="less" scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #333;
}

.r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
  h3{
    color: #fff;
  }
}
.el-header{
  height: 62px;
}
//.bread /deep/ span{
//  color: burlywood;
//}
.bread /deep/ span{
  cursor:pointer !important;
  .el-breadcrumb__inner.is-link{
    color: burlywood;
    cousor:pointer ;
  }
}

.bread /deep/ span{
  .el-breadcrumb__separator{
    color: burlywood;
  }
}
</style>