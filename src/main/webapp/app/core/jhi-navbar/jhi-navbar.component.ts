import { Component, Inject, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { VERSION } from '@/constants';
import LoginModalService from '@/account/login-modal.service';

import AccountService from '@/account/account.service';
import TranslationService from '@/locale/translation.service';

@Component
export default class JhiNavbar extends Vue {
  @Inject('loginModalService')
  private loginModalService: () => LoginModalService;

  @Inject('translationService')
  private translationService: () => TranslationService;

  @Inject('accountService')
  private accountService: () => AccountService;
  public version = VERSION ? 'v' + VERSION : '';
  public isNavbarCollapsed = true;
  private currentLanguage = this.$store.getters.currentLanguage;
  private languages: any = this.$store.getters.languages;

  created() {
    this.translationService().refreshTranslation(this.currentLanguage);
  }

  public subIsActive(input) {
    const paths = Array.isArray(input) ? input : [input];
    return paths.some(path => {
      return this.$route.path.indexOf(path) === 0; // current path starts with this path string
    });
  }

  public getImageUrl(): boolean {
    return false;
  }

  public collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  public changeLanguage(newLanguage: string): void {
    this.translationService().refreshTranslation(newLanguage);
  }

  public isActiveLanguage(key: string): boolean {
    return key === this.$store.getters.currentLanguage;
  }

  public logout(): void {
    localStorage.removeItem('jhi-authenticationToken');
    sessionStorage.removeItem('jhi-authenticationToken');
    this.$store.commit('logout');
    this.$router.push('/');
  }

  public openLogin(): void {
    this.loginModalService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public hasAnyAuthority(authorities: any): boolean {
    return this.accountService().hasAnyAuthority(authorities);
  }

  public get swaggerEnabled(): boolean {
    return this.$store.getters.activeProfiles.indexOf('swagger') > -1;
  }

  public get inProduction(): boolean {
    return this.$store.getters.activeProfiles.indexOf('prod') > -1;
  }
}
