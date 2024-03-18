export default function useConfirmExit() {
    // Register nuxt guard (guards vue-router from switching routes)
    onBeforeRouteLeave((to, from, next) => {
        if (confirm("Are you sure you want to leave?")) {
            next();
        } else {
            next(false);
        }
    });

    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }

    // Register window event listeners (guards browser from closing tab)
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Unregister window event listeners on component unmount
    onUnmounted(() => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
    });
}
