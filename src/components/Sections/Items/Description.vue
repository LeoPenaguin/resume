<template>
    <div class="description-item">
        <h2><slot name="title"></slot></h2>
        <slot name="list"></slot>
    </div>
</template>

<script>
export default {
    name: 'DescriptionItem',
}
</script>

<style lang="scss" scoped>
.description-item {
    border-radius: 20px;
    overflow: hidden;
    background: v(items-background-color);
    padding: 2rem;
    flex: 2;
    h2 {
        margin: 0;
    }
    ul {
        padding: 0;
        list-style: none;
        li {
            line-height: 2rem;
            padding-left: 1.3rem;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                left: 0.1rem;
                top: 0.63rem;
                width: 0.7rem;
                height: 0.7rem;
                background: #5770ff;
                border-radius: 50%;
            }
        }
    }
}
</style>
