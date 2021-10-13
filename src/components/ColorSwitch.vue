<template>
    <div class="color-switch">
        <form class="themes">
            <div v-for="themeItem in themes" :key="themeItem.name">
                <input
                    :id="themeItem.name"
                    v-model="theme"
                    type="radio"
                    :value="themeItem.name"
                />
                <label
                    :for="themeItem.name"
                    class="theme-wrapper"
                    :style="{
                        border: '5px solid ' + themeItem.colors.accent,
                        background: themeItem.colors.background,
                    }"
                >
                    <div
                        class="theme-primary-color"
                        :style="{ background: themeItem.colors.primary }"
                    ></div>
                    <div
                        class="theme-secondary-color"
                        :style="{ background: themeItem.colors.secondary }"
                    ></div>
                    <div
                        class="theme-text-color"
                        :style="{ background: themeItem.colors.text }"
                    ></div>
                </label>
            </div>
        </form>
    </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import themes from '@/data/themes'

export default {
    name: 'ColorSwitch',
    setup() {
        const LIGHT_BLUE = 'lightblue'
        let theme = ref(LIGHT_BLUE)

        onMounted(() => {
            themes.forEach((themes) => {
                if (
                    localStorage.colorScheme === themes.name ||
                    document.documentElement.dataset.userColorScheme ===
                        themes.name
                ) {
                    theme.value = themes.name
                    return
                }
            })
        })

        watch(theme, () => {
            localStorage.colorScheme = theme.value
            document.documentElement.dataset.userColorScheme = theme.value
        })

        return {
            theme,
            themes,
        }
    },
}
</script>

<style lang="scss" scoped>
.themes {
    display: flex;
    gap: 10px;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
}

[type='radio']:checked,
[type='radio']:not(:checked) {
    display: none;
    & + label {
        display: grid;
        gap: 5px;
        background: rgb(110, 110, 110);
        width: 50px;
        height: 50px;
        border-radius: 10px;
        padding: 7px;
        position: relative;
        transition: transform 0.2s;
        grid-template-areas:
            'textcolor textcolor'
            'primary secondary';
        .theme-text-color {
            grid-area: textcolor;
            border-radius: 15px;
        }
        .theme-primary-color {
            grid-area: primary;
            border-radius: 15px;
        }
        .theme-secondary-color {
            grid-area: secondary;
            border-radius: 15px;
        }
        &:hover {
            transform: scale(1.1);
        }
    }
}

[type='radio']:checked {
    & + label::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 5px;
        width: 30px;
        height: 7px;
        background: rgb(0, 180, 69);
        border-radius: 10px;
    }
}
</style>
