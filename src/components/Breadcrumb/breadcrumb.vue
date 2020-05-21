<script>
export default {
  name: "EBreadcrumb",
  props: {
    // menu: {
    //   type: Array,
    //   required: true
    // }
  },
  data() {
    return {
      fullPathList: [],
      pages: []
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
    }
  },
  methods: {
    renderItem(page) {
      const props = { to: { path: page.fullPath }};
      return (
        <el-breadcrumb-item {...{ props }}>
          {page.meta.title}
        </el-breadcrumb-item>
      );
    }
  },
  render() {
    const { pages } = this;
    const breadcrumbItems = pages.map(f => this.renderItem(f));
    // <el-breadcrumb-item to='{ path: "/" }'>首页</el-breadcrumb-item>
    // <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    // <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    return <el-breadcrumb separator='/'>{breadcrumbItems}</el-breadcrumb>;
  }
};
</script>
