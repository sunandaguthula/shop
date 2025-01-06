/** Main js file */
function capitalizeFirstLetter(text) {
    if (!text) return ""; // Handle empty or undefined input
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function capitalizeAllWords(text) {
    if (!text) return ""; // Handle empty or undefined input
    return text
        .split(" ") // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
        .join(" "); // Join the words back into a single string
}

function convertSlugToText(slug) {
    return slug.replace(/-/g, ' ');
}