<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('demoApp.jobHistory.home.title')" id="job-history-heading">Job Histories</span>
            <router-link to="/entity/job-history/new" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-job-history">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('demoApp.jobHistory.home.createLabel')">
                    Create new JobHistory
                </span>
            </router-link>
        </h2>
        <b-alert :show="dismissCountDown"
            dismissible
            :variant="alertType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <br/>
        <div class="table-responsive" v-if="jobHistories">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-on:click="changeOrder('id')"><span v-text="$t('global.field.id')">ID</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                        <th v-on:click="changeOrder('startDate')"><span v-text="$t('demoApp.jobHistory.startDate')">Start Date</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                        <th v-on:click="changeOrder('endDate')"><span v-text="$t('demoApp.jobHistory.endDate')">End Date</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                        <th v-on:click="changeOrder('language')"><span v-text="$t('demoApp.jobHistory.language')">Language</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                            <th v-on:click="changeOrder('job.id')"><span v-text="$t('demoApp.jobHistory.job')">Job</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                            <th v-on:click="changeOrder('department.id')"><span v-text="$t('demoApp.jobHistory.department')">Department</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                            <th v-on:click="changeOrder('employee.id')"><span v-text="$t('demoApp.jobHistory.employee')">Employee</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="jobHistory of orderBy(jobHistories, propOrder, reverse === true ? 1 : -1)"
                    :key="jobHistory.id">
                    <td><router-link :to="{name: 'JobHistoryView', params: {jobHistoryId: jobHistory.id}}">{{jobHistory.id}}</router-link></td>
                            <td>{{jobHistory.startDate | formatDate}}</td>
                            <td>{{jobHistory.endDate | formatDate}}</td>
                            <td v-text="$t('demoApp.Language.' + jobHistory.language)">{{jobHistory.language}}</td>
                        <td>
                                        <div v-if="jobHistory.job">
                                            <router-link :to="'../entity/job/' + jobHistory.job.id + '/view'" >{{jobHistory.job.id}}</router-link>
                                        </div>
                        </td>
                        <td>
                                        <div v-if="jobHistory.department">
                                            <router-link :to="'../entity/department/' + jobHistory.department.id + '/view'" >{{jobHistory.department.id}}</router-link>
                                        </div>
                        </td>
                        <td>
                                        <div v-if="jobHistory.employee">
                                            <router-link :to="'../entity/employee/' + jobHistory.employee.id + '/view'" >{{jobHistory.employee.id}}</router-link>
                                        </div>
                        </td>
                    <td class="text-right">
                        <div class="btn-group flex-btn-group-container">
                            <router-link :to="{name: 'JobHistoryView', params: {jobHistoryId: jobHistory.id}}" tag="button" class="btn btn-info btn-sm">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'JobHistoryEdit', params: {jobHistoryId: jobHistory.id}}"  tag="button" class="btn btn-primary btn-sm">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(jobHistory)"
                                   class="btn btn-danger btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.delete')">Delete</span>
                            </b-button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity" >
            <span slot="modal-title"><span id="demoApp.jobHistory.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-jobHistory-heading" v-bind:title="$t('demoApp.jobHistory.delete.question')">Are you sure you want to delete this Job History?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-jobHistory" v-text="$t('entity.action.delete')" v-on:click="removeJobHistory()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./job-history.component.ts">
</script>
