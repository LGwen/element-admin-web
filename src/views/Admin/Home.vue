<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom:18px">
        <!-- <div class="grid-content bg-purple"></div> -->
        <chart-card title="总办件数">
          <div>
            <div class="el-card-content__text">8754</div>
            <div class="el-card-content__desc">
              <div>
                <span>周同比</span>
                <span>
                  <span>11%</span>
                  <span class="bottom">
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                </span>
              </div>
              <div>
                <span>日同比</span>
                <span>
                  <span>11%</span>
                  <span class="up">
                    <i class="el-icon-caret-top"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <template slot="footer">
            日均办件
            <span>234.56</span>
          </template>
        </chart-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom:18px">
        <chart-card title="总访问人数">
          <div>
            <div class="el-card-content__text">88754</div>
            <mini-bar />
          </div>
          <template slot="footer">
            日均访问人数
            <span>2347</span>
          </template>
        </chart-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom:18px">
        <chart-card title="总来信">
          <div>
            <div class="el-card-content__text">23156</div>
            <mini-area />
          </div>
          <template slot="footer">
            日均来信
            <span>2634.56</span>
          </template>
        </chart-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom:18px">
        <chart-card title="回访数">
          <div>
            <div class="el-card-content__text">23156</div>

            <mini-bar />
          </div>
          <template slot="footer">
            日均回访数
            <span>234.56</span>
          </template>
        </chart-card>
      </el-col>
    </el-row>
    <div class="chart-container">
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="用户数" name="first">
          <el-row :gutter="16">
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
              <div class="chart-content">
                <v-bar></v-bar>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <rank-list :datalist="rankdata"></rank-list>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="办件数" name="second">
          <el-row :gutter="16">
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
              <div class="chart-content">
                <v-bar></v-bar>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <rank-list :datalist="rankdata2"></rank-list>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { provinces } from "../../config/province";
const rankdata = [];
for (let i = 0; i < 8; i++) {
  const p = provinces[i];
  const _p = Object.assign(
    {},
    { id: i + 1 },
    { label: p },
    { value: parseInt(Math.random() * 9876 + 100) }
  );
  rankdata.push(_p);
}
const rankdata2 = [];
for (let i = 0; i < 8; i++) {
  const p = provinces[i];
  const _p = Object.assign(
    {},
    { id: i + 1 },
    { label: p },
    { value: parseInt(Math.random() * 9876 + 100) }
  );
  rankdata2.push(_p);
}
export default {
  components: {
    ChartCard: () => import("../../components/Chart/chart-card"),
    VBar: () => import("../../components/Chart/bar"),
    RankList: () => import("../../components/RankList/rank-list"),
    MiniArea: () => import("../../components/Chart/mini-area"),
    MiniBar: () => import("../../components/Chart/mini-bar")
  },
  data() {
    return {
      activeName: "first",
      rankdata,
      rankdata2
    };
  },
  methods: {
    handleTabClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style>
.el-col {
  border-radius: 4px;
}
.chart-container {
  background: #fff;
  padding: 20px 24px 8px;
}
.chart-content {
  height: 350px;
}
</style>
