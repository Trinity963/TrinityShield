const forbiddenAPIs = [
    "eval",
    "Function(",
    "new Worker(",
    "document.write(",
];

module.exports = function validateModule(code) {
    for (let api of forbiddenAPIs) {
        if (code.includes(api)) {
            return `Forbidden API detected: ${api}`;
        }
    }
    return "VALID";
};
