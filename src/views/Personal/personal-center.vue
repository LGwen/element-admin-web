<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
      <el-card style="margin-bottom:16px">
        <div class="person-info">
          <div class="person-info__avatar">
            <el-avatar :size="80">
              <img
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                alt="头像"
              />
            </el-avatar>
          </div>
          <div class="person-info__name">{{ userInfo.username }}</div>
          <div class="person-info__desc">三人行必有我师</div>
          <div class="person-info__detail">
            <div class="detail-item">
              <div class="detail-item__left">
                <i class="el-icon-user"></i>职位
              </div>
              <div class="detail-item__right">架构师</div>
            </div>
            <div class="detail-item">
              <div class="detail-item__left">
                <i class="el-icon-office-building"></i>部门
              </div>
              <div class="detail-item__right">腾讯云华南区技术支持组</div>
            </div>
            <div class="detail-item">
              <div class="detail-item__left">
                <i class="el-icon-location-information"></i>籍贯
              </div>
              <div class="detail-item__right">湖南长沙</div>
            </div>
            <div class="detail-item">
              <div class="detail-item__left">
                <i class="el-icon-date"></i>生日
              </div>
              <div class="detail-item__right">1989-02-19</div>
            </div>
          </div>
          <el-divider content-position="left">技术认证</el-divider>
          <div>
            <el-tag size="small">TCA架构</el-tag>
            <el-tag size="small">应用加固</el-tag>
            <el-tag size="small">蓝盾</el-tag>
            <el-tag size="small">CMQ</el-tag>
            <el-tag size="small">企业微信</el-tag>
            <el-tag size="small">TBASE</el-tag>
            <el-tag size="small">天御</el-tag>
            <el-tag size="small">TSF</el-tag>
          </div>
          <el-divider content-position="left">标签</el-divider>
          <div>
            <el-tag size="small">技术大佬</el-tag>
            <el-tag size="small">工作狂人</el-tag>
            <el-tag size="small">TCA专家</el-tag>
            <el-tag size="small">TSG专家</el-tag>
            <el-tag size="small">CMQ专家</el-tag>
            <el-tag size="small">TSF专家</el-tag>
          </div>
          <el-divider content-position="left">爱好</el-divider>
          <div>
            <el-tag size="small">看书</el-tag>
            <el-tag size="small">爬山</el-tag>
            <el-tag size="small">打篮球</el-tag>
            <el-tag size="small">吃鸡</el-tag>
            <el-tag size="small">LOL</el-tag>
            <el-tag size="small">荣耀</el-tag>
            <el-tag size="small">其他</el-tag>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <el-card>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="'消息 ('+4+')'" name="first">
            <div v-loading="loading">
              <ul class="message-list" style="min-height:100px;">
                <li v-for="m in messages" :key="m.id" class="message-item">
                  <div class="message-item-header">
                    <div class="message-item-header__title">
                      <h4>{{ m.title }}</h4>
                    </div>
                    <div class="message-item-header__sub">from：张大山</div>
                  </div>
                  <div class="message-item-content">{{ m.content }}</div>
                  <div class="message-item-footer">
                    <div>{{ m.time }}</div>
                    <div>
                      <el-button type="text">查看详情</el-button>
                      <el-divider direction="vertical"></el-divider>
                      <el-popconfirm title="确定删除吗？">
                        <el-button slot="reference" type="text">删除</el-button>
                      </el-popconfirm>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="personal-pagination">
                <el-pagination
                  :current-page.sync="currentPage1"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="'缺陷 ('+4+')'" name="second">
            <ul v-loading="loading" class="message-list" style="min-height:100px;">
              <li v-for="m in problems" :key="m.id" class="message-item">
                <div class="message-item-header">
                  <div class="message-item-header__title">
                    <h4>{{ m.title }}</h4>
                  </div>
                  <div class="message-item-header__sub">
                    <span>创建人：张大山</span>
                    <span>处理人：张大山</span>
                  </div>
                </div>
                <div class="message-item-content">
                  <div>{{ m.content }}</div>
                  <div class="problem-status">
                    <template v-if="m.status==1">
                      <div>
                        严重程度:
                        <span class="normal">一般</span>
                      </div>
                      <div>
                        状态:
                        <span class="normal">处理中</span>
                      </div>
                    </template>
                    <template v-if="m.status==2">
                      <div>
                        严重程度:
                        <span class="warn">紧急</span>
                      </div>
                      <div>
                        状态:
                        <span class="warn">处理中</span>
                      </div>
                    </template>
                    <template v-if="m.status==3">
                      <div>
                        严重程度:
                        <span class="danger">严重</span>
                      </div>
                      <div>
                        状态:
                        <span class="normal">已关闭</span>
                      </div>
                    </template>
                  </div>
                </div>

                <div class="message-item-footer">
                  <div>{{ m.time }}</div>
                  <div>
                    <el-button type="text">流转记录</el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text">处理</el-button>
                  </div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="我的项目" name="third">
            <e-list>
              <e-list-item v-for="l in list" :key="l.id">
                <el-avatar
                  slot="avatar"
                  shape="square"
                  :size="50"
                  fit="cover"
                  src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
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
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import List from "@/components/List/index.js";
const EList = List.EList;
const EListItem = List.EListItem;
export default {
  name: "PersonalCenter",
  components: {
    EList,
    EListItem
  },
  data() {
    return {
      activeName: "first",
      loading: false,
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
      currentPage1: 5
    };
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    ...mapState("message", ["messages", "problems"])
  },
  mounted() {
    this.loadData();
  },
  methods: {
    ...mapActions("message", ["getMessage", "getProblem"]),
    loadData() {
      this.loading = true;
      this.getMessage()
        .then(message => {
          console.log("getMessage:", message);
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    },
    handleClick(tab, event) {
      console.log(tab.name, event);
      if (tab.name === "second") {
        if (this.problems && this.problems.length) {
          return;
        }
        this.loading = true;
        this.getProblem()
          .then(problem => {
            this.loading = false;
            console.log("getProblem:", problem);
          })
          .catch(err => {
            this.loading = false;
            console.log(err);
          });
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang='less' scoped>
.personal-pagination {
  text-align: right;
  margin: 20px 0;
}
.problem-status {
  margin-top: 12px;
  div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
  }
  .normal,
  .warn,
  .danger {
    display: inline-block;
    border-radius: 2px;
    padding: 0 4px;
    color: #fff;
    margin-left: 4px;
  }
  .normal {
    background: #98b0cf;
  }
  .warn {
    background: #f66062;
  }
  .danger {
    background: #f66062;
  }
}
.person-info {
  &__avatar {
    text-align: center;
    margin-bottom: 20px;
  }
  &__name {
    font-size: 20px;
    text-align: center;
    margin-bottom: 4px;
    line-height: 1;
  }
  &__detail {
    font-size: 14px;
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.75);
    .detail-item {
      display: flex;
      margin-bottom: 4px;
      &__left {
        flex: 0 0 50px;
        color: rgba(0, 0, 0, 0.45);
        i {
          margin-right: 4px;
        }
      }
      &__right {
        margin-left: 20px;
      }
    }
  }
  &__desc {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    line-height: 1;
  }
  .el-tag {
    margin: 4px;
  }
}
.message-list {
  li {
    padding: 16px 0;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdfe6;
    }
  }
  .message-item {
    clear: both;
    &-header {
      &__title {
        font-size: 16px;
        display: inline-block;
        h4 {
          margin: 0;
          color: rgba(0, 0, 0, 0.75);
        }
      }
      &__sub {
        float: right;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.45);
        span {
          margin-left: 20px;
        }
      }
    }
    &-content {
      font-size: 14px;
      margin-top: 12px;
      color: rgba(0, 0, 0, 0.45);
      padding-right: 120px;
    }
    &-footer {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.45);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
