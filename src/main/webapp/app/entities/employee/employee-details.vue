<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="employee">
                <h2><span v-text="$t('demoApp.employee.detail.title')">Employee</span> {{employee.id}}</h2>
                <!--<jhi-alert-error></jhi-alert-error>-->
                <dl class="row jh-entity-details">

                        <dt><span v-text="$t('demoApp.employee.firstName')">First Name</span></dt>
                        <dd>
                                <span>{{employee.firstName}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.employee.lastName')">Last Name</span></dt>
                        <dd>
                                <span>{{employee.lastName}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.employee.email')">Email</span></dt>
                        <dd>
                                <span>{{employee.email}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.employee.phoneNumber')">Phone Number</span></dt>
                        <dd>
                                <span>{{employee.phoneNumber}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.employee.hireDate')">Hire Date</span></dt>
                        <dd>
                                <span>{{employee.hireDate}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.employee.salary')">Salary</span></dt>
                        <dd>
                                <span>{{employee.salary}}</span>
                        </dd>
                        <dt><span v-text="$t('demoApp.employee.commissionPct')">Commission Pct</span></dt>
                        <dd>
                                <span>{{employee.commissionPct}}</span>
                        </dd>

                        <dt><span v-text="$t('demoApp.employee.department')">Department</span></dt>
                        <dd>
                                        <div v-if="employee.department">
                                            <router-link :to="'../department/' + employee.department.id + '/View'">{{employee.department.id}}</router-link>
                                        </div>
                        </dd>
                        <dt><span v-text="$t('demoApp.employee.manager')">Manager</span></dt>
                        <dd>
                                        <div v-if="employee.manager">
                                            <router-link :to="'../employee/' + employee.manager.id + '/View'">{{employee.manager.id}}</router-link>
                                        </div>
                        </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
                </button>

                <router-link :to="{name: 'EmployeeEdit', params: {employeeId: employee.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./employee-details.component.ts">
</script>

