function getValue(dataContainer, reference, defaultValue) {
    var steps = reference.split(".");
    var i;
    if (dataContainer === undefined) {
        return defaultValue;
    }
    for (i = 0; i < steps.length; ++i) {
        if (typeof dataContainer[steps[i]] === "undefined") {
            return defaultValue;
        }
        dataContainer = dataContainer[steps[i]];
    }
    return dataContainer;
}
export default {
    getValue: getValue,
};
