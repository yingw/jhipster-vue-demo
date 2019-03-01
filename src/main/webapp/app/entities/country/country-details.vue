<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="country">
                <h2><span v-text="$t('demoApp.country.detail.title')">Country</span> {{country.id}}</h2>
                <!--<jhi-alert-error></jhi-alert-error>-->
                <dl class="row jh-entity-details">

                        <dt><span v-text="$t('demoApp.country.countryName')">Country Name</span></dt>
                        <dd>
                                <span>{{country.countryName}}</span>
                        </dd>

                        <dt><span v-text="$t('demoApp.country.region')">Region</span></dt>
                        <dd>
                                        <div v-if="country.region">
                                            <router-link :to="'../region/' + country.region.id + '/View'">{{country.region.id}}</router-link>
                                        </div>
                        </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>

                <router-link :to="{name: 'CountryEdit', params: {countryId: country.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./country-details.component.ts">
</script>

