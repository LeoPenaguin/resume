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

<style></style>
