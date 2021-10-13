/* Get Queries */
function gq(n, u = window.location.href) { n = n.replace(/[\[\]]/g, '\\$&'); var r = new RegExp('[?&]' + n + '(=([^&#]*)|&|#|$)'), res = r.exec(u); if (!res) return ''; if (!res[2]) return ''; return decodeURIComponent(res[2].replace(/\+/g, ' ')); }
