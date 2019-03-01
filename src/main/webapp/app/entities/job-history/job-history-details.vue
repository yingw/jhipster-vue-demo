<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="jobHistory">
                <h2><span v-text="$t('demoApp.jobHistory.detail.title')">JobHistory</span> {{jobHistory.id}}</h2>
                <!--<jhi-alert-error></jhi-alert-error>-->
                <dl class="row jh-entity-details">

                        <dt><span v-text="$t('demoApp.jobHistory.startDate')">Start Date</span></dt>
                        <dd>
                                <span>{{jobHistory.startDate}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.jobHistory.endDate')">End Date</span></dt>
                        <dd>
                                <span>{{jobHistory.endDate}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.jobHistory.language')">Language</span></dt>
                        <dd>
                                <span v-text="$t('demoApp.Language.' + jobHistory.language)">{{jobHistory.language}}</span>
                        </dd>

                        <dt><span v-text="$t('demoApp.jobHistory.job')">Job</span></dt>
                        <dd>
                                        <div v-if="jobHistory.job">
                                            <router-link :to="'../job/' + jobHistory.job.id + '/View'">{{jobHistory.job.id}}</router-link>
                                        </div>
                        </dd>
                        <dt><span v-text="$t('demoApp.jobHistory.department')">Department</span></dt>
                        <dd>
                                        <div v-if="jobHistory.department">
                                            <router-link :to="'../department/' + jobHistory.department.id + '/View'">{{jobHistory.department.id}}</router-link>
                                        </div>
                        </dd>
                        <dt><span v-text="$t('demoApp.jobHistory.employee')">Employee</span></dt>
                        <dd>
                                        <div v-if="jobHistory.employee">
                                            <router-link :to="'../employee/' + jobHistory.employee.id + '/View'">{{jobHistory.employee.id}}</router-link>
                                        </div>
                        </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>

                <router-link :to="{name: 'JobHistoryEdit', params: {jobHistoryId: jobHistory.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./job-history-details.component.ts">
</script>

