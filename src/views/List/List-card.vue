<template>
  <el-row :gutter="16">
    <el-col v-for="(o, index) in 4" :key="o" :span="6">
      <el-card :body-style="{ padding: '0px' }" class="card-cell">
        <img
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          class="image"
          alt
        />
        <div style="padding: 14px;">
          <span></span>
          <div class="bottom clearfix">
            <time class="time">2020-05-20</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col v-for="(o, index) in 4" :key="'id_'+o" :span="6">
      <el-card :body-style="{ padding: '0px' }" class="card-cell">
        <div style="padding: 14px;">
          <div class="card-cell-title">Element</div>
          <div
            class="card-cell-content"
          >这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介</div>
        </div>
        <div class="card-cell-footer">
          <div>
            <el-button type="text">操作按钮1</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text">操作按钮2</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>


<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.card-cell {
  margin-bottom: 16px;
}
.card-cell-footer {
  padding: 14px;
  border-top: 1px solid #DCDFE6;
  text-align: right;
}
.card-cell-footer button{
  padding: 0;
}
.card-cell-title {
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 8px;
}
.card-cell-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  color: rgba(0, 0, 0, 0.45);
  margin: 20px 0;
}
</style>

<script>
export default {
  name: "CardList",
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>
