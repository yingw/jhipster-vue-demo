<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="location">
                <h2><span v-text="$t('demoApp.location.detail.title')">Location</span> {{location.id}}</h2>
                <!--<jhi-alert-error></jhi-alert-error>-->
                <dl class="row jh-entity-details">

                        <dt><span v-text="$t('demoApp.location.streetAddress')">Street Address</span></dt>
                        <dd>
                                <span>{{location.streetAddress}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.location.postalCode')">Postal Code</span></dt>
                        <dd>
                                <span>{{location.postalCode}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.location.city')">City</span></dt>
                        <dd>
                                <span>{{location.city}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.location.stateProvince')">State Province</span></dt>
                        <dd>
                                <span>{{location.stateProvince}}</span>
                        </dd>

                        <dt><span v-text="$t('demoApp.location.country')">Country</span></dt>
                        <dd>
                                        <div v-if="location.country">
                                            <router-link :to="'../country/' + location.country.id + '/View'">{{location.country.id}}</router-link>
                                        </div>
                        </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>

                <router-link :to="{name: 'LocationEdit', params: {locationId: location.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./location-details.component.ts">
</script>

