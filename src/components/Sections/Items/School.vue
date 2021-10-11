<template>
    <div class="school-item">
        <h2>
            {{ school.date }} <span>{{ school.duration }}</span>
        </h2>
        <p>
            <b>{{ school.degree }}</b> -
            {{ school.description }}
        </p>
        <span class="location">{{ school.location }}</span>
    </div>
</template>

<script>
export default {
    name: 'SchoolItem',
    props: {
        school: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.school-item {
    padding: 2rem;
    margin: 0;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
    background: v(items-background-color);
    position: relative;
    height: fit-content;

    p {
        margin: 0;
    }

    h2 {
        margin: 0 0 10px 0;
    }

    .location {
        background: #5770ff;
        border-radius: 2rem;
        padding: 10px 20px;
        margin: 20px 0 0 0;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(255, 255, 255);
    }
}
</style>
