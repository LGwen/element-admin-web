<script>
export default {
  name: "MultiTab",
  props: {
    // menu: {
    //   type: Array,
    //   required: true
    // }
  },
  data() {
    return {
      fullPathList: [],
      pages: [],
      activekey: "/"
    };
  },
  computed: {},
  watch: {
    $route: function(newVal) {
      const fullPath = newVal.fullPath;
      if (this.fullPathList.indexOf(fullPath) < 0) {
        this.fullPathList.push(fullPath);
        this.pages.push(newVal);
      }
      this.activekey = fullPath;
    },
    activekey: function(newPathKey) {
      this.$router.push({ path: newPathKey });
    }
  },
  created() {
    this.pages.push(this.$route);
    this.fullPathList.push(this.$route.fullPath);
    this.activekey = this.$route.fullPath;
  },
  methods: {
    renderItem(page) {
      const props = { label: page.meta.title, name: page.fullPath };
      return <el-tab-pane {...{ props }}></el-tab-pane>;
    },
    removeTab(e) {
      console.log("removeTab:", e);
      this.pages = [...this.pages.filter(p => p.fullPath !== e)];
      this.fullPathList = [...this.fullPathList.filter(f => f !== e)];
      if (e === this.activekey) {
        this.selectedLastPath();
      }
    },
    selectedLastPath() {
      this.activekey = this.fullPathList[this.fullPathList.length - 1];
    }
  },
  render() {
    const { pages, activekey } = this;
    const tabPanes = pages.map(f => this.renderItem(f));
    const props = {
      closable: pages.length > 1,
      type: "card"
    };
    const on = {
      "tab-remove": this.removeTab
    };
    return (
      <div class="el-multi-tab">
        <el-tabs {...{ props }} {...{ on: on }} v-model={this.activekey}>
          {tabPanes}
        </el-tabs>
      </div>
    );
  }
};
</script>
<style lang="less">
.el-multi-tab {
  background: #fff;
  margin: -20px -20px 20px -20px;
  padding: 8px 0 0 0;
  .el-tabs__header {
    margin-bottom: 0;
  }
  .el-tabs__nav-wrap {
    padding: 0 20px;
  }
  // padding: ;
}
</style>
