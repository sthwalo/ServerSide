/**
 * This example exports the getCurrentDate function.
 */
function getCurrentDate() {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    
    return currentDate;
}
module.exports = getCurrentDate;