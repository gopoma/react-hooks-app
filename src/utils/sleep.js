const sleep = (duration) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            return resolve();
        }, duration);
    });
};

export default sleep;