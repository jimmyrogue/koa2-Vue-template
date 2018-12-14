<template>
    <div>
        <div>hello world vue and koa!</div>
        <router-link to="/">example</router-link>
        <router-link to="/example1">example1</router-link>
        <router-link to="/login">login</router-link>
        <router-view></router-view>
    </div>
</template>
<style>
    body {
        color: blue
    }
</style>