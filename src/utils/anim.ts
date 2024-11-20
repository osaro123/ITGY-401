export const heroText = {
    initial: {
        y: "100%"
    },

    animate: (i: number) => ({
        y: 0,
        transition: {duration: 0.6, delay: 0.02 * i}
    }),
}