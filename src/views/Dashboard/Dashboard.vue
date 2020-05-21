<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom:12px">
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
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom:12px">
        <chart-card title="总访问人数">
          <div>
            <div class="el-card-content__text">88754</div>
            <div class="el-card-content__desc">
              <div>
                <span>周同比</span>
                <span>
                  <span>28.8%</span>
                  <span class="up">
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
            日均访问人数
            <span>2347</span>
          </template>
        </chart-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom:12px">
        <chart-card title="总来信">
          <div>
            <div class="el-card-content__text">23156</div>
            <div class="el-card-content__desc">
              <div>
                <span>周同比</span>
                <span>
                  <span>19.1%</span>
                  <span class="bottom">
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                </span>
              </div>
              <div>
                <span>日同比</span>
                <span>
                  <span>12%</span>
                  <span class="up">
                    <i class="el-icon-caret-top"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <template slot="footer">
            日均来信
            <span>2634.56</span>
          </template>
        </chart-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="margin-bottom:12px">
        <chart-card title="回访数">
          <div>
            <div class="el-card-content__text">16785</div>
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
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    ChartCard: () => import("../../components/Chart/chart-card")
  },
  computed: {
    ...mapState("user", ["userInfo", "roles"])
  },
  methods: {
    ...mapActions("user", ["logout"]),
    handleLogout() {
      this.logout().then(res => {
        this.$router.push("/user/login");
        window.location.reload();
      });
    }
  }
};
</script>
<style>
.el-col {
  border-radius: 4px;
}
</style>
