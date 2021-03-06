import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ribbon extends Vue {
  public get ribbonEnv(): string {
    return this.$store.getters.ribbonOnProfiles;
  }
}
