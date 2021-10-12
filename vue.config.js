module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
              @import "@/scss/_responsive.scss";
              @import "@/scss/_variables.scss";
            `,
            },
        },
    },
}
