<template>
    <div>
        <h2 id="page-heading">
            <span v-text="$t('demoApp.department.home.title')" id="department-heading">Departments</span>
            <router-link to="/entity/department/new" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-department">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span  v-text="$t('demoApp.department.home.createLabel')">
                    Create new Department
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
        <div class="table-responsive" v-if="departments">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span v-text="$t('global.field.id')">ID</span></th>
                        <th><span v-text="$t('demoApp.department.departmentName')">Department Name</span></th>
                            <th><span v-text="$t('demoApp.department.location')">Location</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="department in departments"
                    :key="department.id">
                    <td><router-link :to="{name: 'DepartmentView', params: {departmentId: department.id}}">{{department.id}}</router-link></td>
                            <td>{{department.departmentName}}</td>
                        <td>
                                        <div v-if="department.location">
                                            <router-link :to="'../entity/location/' + department.location.id + '/view'" >{{department.location.id}}</router-link>
                                        </div>
                        </td>
                    <td class="text-right">
                        <div class="btn-group flex-btn-group-container">
                            <router-link :to="{name: 'DepartmentView', params: {departmentId: department.id}}" tag="button" class="btn btn-info btn-sm">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                            </router-link>
                            <router-link :to="{name: 'DepartmentEdit', params: {departmentId: department.id}}"  tag="button" class="btn btn-primary btn-sm">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline" v-text="$t('entity.action.edit')">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(department)"
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
            <span slot="modal-title"><span id="demoApp.department.delete.question" v-text="$t('entity.delete.title')">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-department-heading" v-bind:title="$t('demoApp.department.delete.question')">Are you sure you want to delete this Department?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-text="$t('entity.action.cancel')" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-department" v-text="$t('entity.action.delete')" v-on:click="removeDepartment()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./department.component.ts">
</script>
