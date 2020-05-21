export default {
  name: "EMenu",
  props: {
    menu: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: "dark"
    },
    mode: {
      type: String,
      required: false,
      default: "inline"
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    renderMenuItem(menu) {
      return menu.map(item => {
        if (item.children) {
          return this.renderMenu(item.children)
        }
        const props = { index: item.path }
        return (
          <el-menu-item-group>
            <el-menu-item {...{ props }}>{item.meta.title}</el-menu-item>
          </el-menu-item-group>
        );
      })
    },
    renderMenu(menu) {
      if (menu.children && menu.children.length) {
        return menu.children.map(item => {
          if (item.hidden) return null;
          if (item.children) {
            const children = this.renderMenuItem(item.children);
            console.log('submenu:', item)
            const props = { index: item.path }
            const icon = 'el-icon-' + item.meta.icon
            return (
              <el-submenu {...{ props }}>
                <template slot='title'>
                  <i class={icon}></i>
                  <span slot='title'>{item.meta.title}</span>
                </template>
                {children}
              </el-submenu>
            );
          }
          const icon = 'el-icon-' + item.meta.icon
          const props = { index: item.path }
          return (
            <el-menu-item {...{ props }}>
              <i class={icon}></i>
              <span slot='title'>{item.meta.title}</span>
            </el-menu-item>
          );
        });
      }
      return null;
    }
  },
  render() {
    const { menu } = this;
    const props = {
      collapse: this.collapsed,
      router: true
    };
    const on = {};
    const menuTree = menu.map(item => {
      if (item.hidden) {
        return null;
      }
      return this.renderMenu(item);
    });
    console.log('menuTree:',menuTree)
    return (
      <el-menu
        default-active='1-2-1'
        class='el-menu-vertical-demo'
        {...{ props, on: on }}
      >
        {menuTree}
      </el-menu>
    );
  }
};
