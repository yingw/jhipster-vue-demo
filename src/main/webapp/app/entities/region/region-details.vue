<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="region">
                <h2><span v-text="$t('demoApp.region.detail.title')">Region</span> {{region.id}}</h2>
                <!--<jhi-alert-error></jhi-alert-error>-->
                <dl class="row jh-entity-details">

                        <dt><span v-text="$t('demoApp.region.regionName')">Region Name</span></dt>
                        <dd>
                                <span>{{region.regionName}}</span>
                        </dd>

                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>

                <router-link :to="{name: 'RegionEdit', params: {regionId: region.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./region-details.component.ts">
</script>

