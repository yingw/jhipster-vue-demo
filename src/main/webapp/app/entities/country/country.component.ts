import { mixins } from 'vue-class-component';
import { Component, Inject, Vue } from 'vue-property-decorator';
import { ICountry } from '@/shared/model/country.model';
import AlertService from '@/shared/alert/alert.service';

import CountryService from './country.service';

@Component
export default class Country extends Vue {
  @Inject('alertService')
  private alertService: () => AlertService;
  @Inject('countryService')
  private countryService: () => CountryService;
  private removeId: string = null;
  public countries: ICountry[] = [];

  public dismissCountDown: number = this.$store.getters.dismissCountDown;
  public dismissSecs: number = this.$store.getters.dismissSecs;
  public alertType: string = this.$store.getters.alertType;
  public alertMessage: any = this.$store.getters.alertMessage;

  public getAlertFromStore() {
    this.dismissCountDown = this.$store.getters.dismissCountDown;
    this.dismissSecs = this.$store.getters.dismissSecs;
    this.alertType = this.$store.getters.alertType;
    this.alertMessage = this.$store.getters.alertMessage;
  }

  public countDownChanged(dismissCountDown: number) {
    this.alertService().countDownChanged(dismissCountDown);
    this.getAlertFromStore();
  }

  public mounted(): void {
    this.retrieveAllCountrys();
  }

  public clear(): void {
    this.retrieveAllCountrys();
  }

  public retrieveAllCountrys(): void {
    this.countryService()
      .retrieve()
      .then(res => {
        this.countries = res.data;
      });
  }

  public prepareRemove(instance): void {
    this.removeId = instance.id;
  }

  public removeCountry(): void {
    this.countryService()
      .delete(this.removeId)
      .then(() => {
        const message = this.$t('demoApp.country.deleted', { param: this.removeId });
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();

        this.removeId = null;
        this.retrieveAllCountrys();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
