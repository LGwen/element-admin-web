<template>
  <div style="height:350px">
    <div ref="WangEditor" class="editor-wrapper"></div>
  </div>
</template>

<script>
import WEditor from "wangeditor";

export default {
  name: "WangEditor",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null,
      editorCtx: null,
      editorMenu: [
        "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        "italic", // 斜体
        "underline", // 下划线
        "strikeThrough", // 删除线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色
        "link", // 插入链接
        "list", // 列表
        "justify", // 对齐方式
        "quote", // 引用
        "emoticon", // 表情
        "image", // 插入图片
        "table", // 表格
        "video", // 插入视频
        "code", // 插入代码
        "undo", // 撤销
        "redo" // 重复
      ]
    };
  },
  mounted() {
    this.editorCtx = this.value;
    this.initEditor();
  },
  methods: {
    initEditor() {
      this.editor = new WEditor(this.$refs.WangEditor);
      this.editor.onchangeTimeout = 200;
      this.editor.customConfig.onchange = html => {
        this.editorCtx = html;
        this.$emit("change", this.editorCtx);
      };
      this.editor.customConfig.menus = this.editorMenu;
      this.editor.create();
      if (this.editorCtx) {
        this.editor.txt.html(this.editorCtx);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.ant-editor-wang {
  .editor-wrapper {
    text-align: left;
  }
}
</style>
