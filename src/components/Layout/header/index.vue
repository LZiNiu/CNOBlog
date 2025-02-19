<template>
    <div class="header-container">
        <div class="left">
            <div class="header-avatar-wrapper">
                <el-avatar>测试</el-avatar>
            </div>
        </div>
        <div class="right">
            <el-menu :default-active="$route.path" mode="horizontal" :ellipsis="false" @select="handleSelect">
                <div v-for="menu in menuList" :key="menu.path">
                    <el-sub-menu v-if="menu.children.length > 0" :index="menu.path">
                        <template #title>{{ menu.title }}</template>
                        <el-menu-item v-for="submenu in menu.children" :index="submenu.path">{{ submenu.title }}</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item v-else :index="menu.path"><i :class="['iconfont', menu.icon]"></i>{{ menu.title }}</el-menu-item>
                </div>
            </el-menu>
            
        </div>
    </div>

</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';

const router = useRouter();

const menuList = [
    {
        title: '首页',
        path: '/home',
        icon: 'icon-shouye',
        children: [],
    },
    {
        title: '关于',
        path: '/about',
        icon: 'icon-about', // 假设有一个名为 icon-about 的图标
        children: [],
    },
    {
        title: '服务',
        path: '/services',
        icon: 'icon-services', // 假设有一个名为 icon-services 的图标
        children: [
            {
                title: '技术支持',
                path: '/services/tech-support',
                icon: 'icon-tech-support', // 假设有一个名为 icon-tech-support 的图标
                
            },
            {
                title: '咨询服务',
                path: '/services/consulting',
                icon: 'icon-consulting', // 假设有一个名为 icon-consulting 的图标
                
            },
        ],
    },
]

function handleSelect(path: string) {
    console.log(path);
    if (!path) return;
    router.push(path)
}
</script>

<style scoped lang="scss">
.iconfont {
    font-size: large;
}
.header-container {
    display: flex;
    justify-content: space-between;

    .left {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .right {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        transition: 1s all linear;
        height: 100%;

    }

}
</style>