<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="job">
                <h2><span v-text="$t('demoApp.job.detail.title')">Job</span> {{job.id}}</h2>
                <!--<jhi-alert-error></jhi-alert-error>-->
                <dl class="row jh-entity-details">

                        <dt><span v-text="$t('demoApp.job.jobTitle')">Job Title</span></dt>
                        <dd>
                                <span>{{job.jobTitle}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.job.minSalary')">Min Salary</span></dt>
                        <dd>
                                <span>{{job.minSalary}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.job.maxSalary')">Max Salary</span></dt>
                        <dd>
                                <span>{{job.maxSalary}}</span>
                        </dd>

                        <dt><span v-text="$t('demoApp.job.employee')">Employee</span></dt>
                        <dd>
                                        <div v-if="job.employee">
                                            <router-link :to="'../employee/' + job.employee.id + '/View'">{{job.employee.id}}</router-link>
                                        </div>
                        </dd>
                        <dt><span v-text="$t('demoApp.job.task')">Task</span></dt>
                        <dd>
                                    <span v-for="(task, i) in job.tasks">{{i > 0 ? ', ' : ''}}
                                        <router-link :to="'../task/' + task.id + '/View'">{{task.title}}</router-link>
                                    </span>
                        </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>

                <router-link :to="{name: 'JobEdit', params: {jobId: job.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./job-details.component.ts">
</script>

