export const keyCuex = Symbol('CUEX');
export const Cuex = (stores) => {
    return {
        stores,
        install(app) {
            app.provide(keyCuex, stores);
        },
    };
};
//# sourceMappingURL=cuex.js.map