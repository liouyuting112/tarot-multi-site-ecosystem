
export default {
    routes: [
        {
            method: 'POST',
            path: '/articles/trigger-manual-post',
            handler: 'manual-trigger.triggerPost',
            config: {
                auth: false, // Set to false for easy testing, or true if you want token protection
            },
        },
    ],
};
