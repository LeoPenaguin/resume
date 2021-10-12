<template>
    <div class="school-item">
        <h2>
            📅 {{ school.date }} <span>{{ school.duration }}</span>
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
    height: fit-content;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
    background: v(items-background-color);
    position: relative;

    p {
        margin: 0;
    }

    h2 {
        margin: 0 0 10px 0;
    }

    .location {
        margin: 20px 0 0 0;
        color: #5770ff;
    }
}
</style>
