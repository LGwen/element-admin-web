<template>
  <div>
    <el-card class="box-card">
      <el-row type="flex">
        <el-col :span="8">
          <div class="task-info">
            <div class="task-info-t1">我的待办</div>
            <div class="task-info-t2">8个任务</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="task-info">
            <div class="task-info-t1">本周完成任务数</div>
            <div class="task-info-t2">22个任务</div>
            <span class="vertical-line"></span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="task-info">
            <div class="task-info-t1">处理平均用时</div>
            <div class="task-info-t2">4小时</div>
            <span class="vertical-line"></span>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本列表</span>
        <div style="float: right;">
          <el-input placeholder="请输入内容" size="small" prefix-icon="el-icon-search"></el-input>
        </div>
      </div>
      <div>
        <el-button
          style="width:100%;margin-bottom:20px;"
          icon="el-icon-plus"
          size="small"
          @click="showAddDialog"
        >添加</el-button>
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
            <div>
              <div style="width:200px;display: inline-block;margin-left: 20px;">
                <el-progress :percentage="parseInt(Math.random()*50+50)" style="width:200px"></el-progress>
              </div>
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
      <dialog-base :visible.sync="visible" />
    </el-card>
  </div>
</template>

<script>
import List from "@/components/List/index.js";
const EList = List.EList;
const EListItem = List.EListItem;
console.log(EList);
export default {
  components: {
    EList,
    EListItem,
    DialogBase: () => import("./dialog-base-add")
  },
  data() {
    return {
      list: [
        {
          name: "潇湘出行",
          desc: "智能公交，精准预计公交到达时间",
          person: "张大千",
          finishDate: "2020-05-20",
          id: 1
        },
        {
          name: "我的长沙",
          desc: "政务服务平台，便民利民",
          person: "张大千",
          finishDate: "2020-05-20",
          id: 2
        },
        {
          name: "数字星城联盟",
          desc: "企业信息发布，放利企业",
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
          name: "生活圈",
          desc: "一手掌握周边重要生活基础设施",
          person: "张大千",
          finishDate: "2020-05-20",
          id: 5
        }
      ],
      visible: false
    };
  },
  methods: {
    showAddDialog() {
      this.visible = true;
    }
  }
};
</script>
<style lang="less" scoped>
.task-info {
  text-align: center;
  position: relative;
  .vertical-line {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #DCDFE6;
  }
  &-t1 {
    color: rgba(0, 0, 0, 0.4);
    display: inline-block;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 4px;
  }
  &-t2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }
}
.box-card {
  margin-bottom: 16px;
}
</style>
