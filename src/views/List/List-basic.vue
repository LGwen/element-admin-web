<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>基本列表</span>
      <div style="float: right;">
        <el-input placeholder="请输入内容" size="small" prefix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div>
      <el-button style="width:100%;margin-bottom:20px;" icon="el-icon-plus" size="small">添加</el-button>
    </div>
    <e-list>
      <e-list-item v-for="l in list" :key="l.id">
        <el-avatar
          slot="avatar"
          shape="square"
          :size="50"
          fit="cover"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        ></el-avatar>
        <span slot="name">{{ l.name }}</span>
        <div slot="desc">{{ l.desc }}</div>
        <template slot="content">
          <div class="list-item__content-item">
            <span>负责人</span>
            <p>{{ l.person }}</p>
          </div>
          <div class="list-item__content-item">
            <span>预计结束时间</span>
            <p>{{ l.finishDate }}</p>
          </div>
        </template>
        <template slot="action">
          <el-button type="text">编辑</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-dropdown>
            <el-button type="text">
              更多
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>删除</el-dropdown-item>
              <el-dropdown-item>延期</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </e-list-item>
    </e-list>
  </el-card>
</template>

<script>
import List from "@/components/List/index.js";
const EList = List.EList;
const EListItem = List.EListItem;
console.log(EList);
export default {
  components: {
    EList,
    EListItem
  },
  data() {
    return {
      list: [
        {
          name: "潇湘出行",
          desc: "智能公交",
          person: "张大千",
          finishDate: "2020-05-20",
          id: 1
        },
        {
          name: "我的长沙",
          desc: "政务服务平台",
          person: "张大千",
          finishDate: "2020-05-20",
          id: 2
        },
        {
          name: "数字星城联盟",
          desc: "企业信息发布",
          person: "张大千",
          finishDate: "2020-05-20",
          id: 3
        },
        {
          name: "一车一码",
          desc: "防疫小程序",
          person: "张大千",
          finishDate: "2020-05-20",
          id: 4
        },
        {
          name: "一车一码",
          desc: "防疫小程序",
          person: "张大千",
          finishDate: "2020-05-20",
          id: 5
        }
      ]
    };
  }
};
</script>
