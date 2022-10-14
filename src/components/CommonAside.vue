<template>
    <!--侧边菜单-->
    <el-aside :width="$store.state.isCollapse ? '180px' : '64px'">
      <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" :collapse="!$store.state.isCollapse" :collapse-transition="false">
        <h3 v-show="$store.state.isCollapse" @click="backHome">Vue前端实战</h3>
        <h3 v-show="!$store.state.isCollapse" @click="backHome">Vue</h3>
        <!--一级菜单-->
        <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)">
          <component class="icons" :is="item.icon"></component>
          <span>{{item.label}}</span>
        </el-menu-item>

        <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
          <template #title>
            <component class="icons" :is="item.icon"></component>
            <span>{{item.label}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
              <component class="icons" :is="subItem.icon"></component>
              <span>{{subItem.label}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from "vuex";
import home from "../views/home/Home.vue";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const list = [
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: 'user',
        url: "UserManage/UserManage"
      },
      {
        label: "其他",
        icon: 'location',
        path: "/other",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: 'setting',
            url: "Other/PageOne"
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: 'setting',
            url: "Other/PageTwo"
          }
        ]
      }
    ];

    const noChildren = () => {
      return list.filter((item) => !item.children);
    };

    const hasChildren = () => {
      return list.filter((item) => item.children);
    };

    const clickMenu =  (item) => {
      router.push({
        name: item.name
      });
      // vuex
      store.commit('selectMenu',item)
    }
    const backHome = () => {
      router.push({
        name:'home'
      })
    }


    return {
      noChildren,
      hasChildren,
      clickMenu,
      backHome
    }
  }
}
</script>

<style scoped>
.icons{
  width: 18px;
  height: 18px;
}

/*.el-menu{*/
/*  border-right: none;*/
/*  h3{*/
/*    line-height: 48px;*/
/*    color: #fff;*/
/*    text-align: center;*/
/*  }*/
/*}*/
.el-menu{
  border-right: none;
}
h3{
  height: 60px;
  color: burlywood;
  text-align: center;
  font:italic 1.5em Georgia, serif;
  padding-top: 15px;
  cursor:pointer;
}

</style>