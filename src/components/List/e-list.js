export default {
  data() {
    return {};
  },
  render() {
    // var slots = context.slots
    console.log(this.$scopedSlots)
    /**
     * var props = context.props,
        slots = context.slots,
        listeners = context.listeners,
        injections = context.injections;

      var slotsMap = slots();
      var getPrefixCls = injections.configProvider.getPrefixCls;
      var customizePrefixCls = props.prefixCls;

      var prefixCls = getPrefixCls('list', customizePrefixCls);

      var avatar = props.avatar || slotsMap.avatar;
      var title = props.title || slotsMap.title;
      var description = props.description || slotsMap.description;
     */
    const slots = this.$slots.default
    return (
      <div class='el-list'>
        {slots}
      </div>
    );
  }
};

