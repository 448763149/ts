
<script lang="ts">
  import { Component, Vue, Prop, Watch } from "vue-property-decorator"
  @Component({})
  export default class AsyncLoadComp extends Vue {
    name: string = 'AsyncLoadComp';
    @Prop()
    public app!: string;
    @Prop()
    public configdata!: any;
    // render
    render(h, cxt) {
      return h(require(`@/components/modules/build/${this.app}.vue`).default, {
        props: {
          configdata: this.configdata
        }
      })
    }
  }
</script>
<style></style>
