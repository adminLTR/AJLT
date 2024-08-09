/**
 * 
 * @param {string} link 
 */
export function formatTitle(link) {
    let title = "";
    for (let i = 1; i < link.length; i++) {
        if (link[i] === '/') {
            break;
        }
        title += link[i];
    }
    return title === "" ? "DASHBOARD" : title.toUpperCase();
}