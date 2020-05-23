<template>
  <div class="el-list-item">
    <div class="el-list-item__meta">
      <div class="el-list-item__avatar">
        <slot name="avatar"></slot>
      </div>
      <div class="el-list-item__meta__content">
        <div class="meta-content-name">
          <slot name="name"></slot>
        </div>
        <div class="meta-content-desc">
          <slot name="desc"></slot>
        </div>
      </div>
    </div>
    <div class="el-list-item__content">
     <slot name="content" />
    </div>
    <div class="el-list-item__action">
      <slot name="action" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EListItem"
};
</script>

<style>
</style>
