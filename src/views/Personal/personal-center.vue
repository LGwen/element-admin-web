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
          <el-divider content-position="left">完成认证</el-divider>
          <div>
            <el-tag size="small">TCA</el-tag>
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
          <el-tab-pane label="消息 (5)" name="first">
            <ul v-loading="loading" class="message-list" style="min-height:100px;">
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
                    <el-button type="text">删除</el-button>
                  </div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="缺陷" name="second">
            <ul v-loading="loading" class="message-list" style="min-height:100px;">
              <li v-for="m in problems" :key="m.id" class="message-item">
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
                    <el-button type="text">删除</el-button>
                  </div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="新需求" name="third">新需求</el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "PersonalCenter",
  data() {
    return {
      activeName: "first",
      loading: false
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
    }
  }
};
</script>

<style lang='less' scoped>
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
      }
    }
    &-content {
      font-size: 14px;
      margin-top: 12px;
      color: rgba(0, 0, 0, 0.45);
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
