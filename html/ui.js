const config = {
    locale: 'en',
    i18n: {
        en: {
            loading: 'Loading...'
        }
    }
}

function debugSleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let count = 1;

async function debugLog() {
    while (true) {
        let event = new Event('message');
        event.data = {eventName: 'onLogLine', message: 'Test ' + count};
        window.dispatchEvent(event)
        count++;
        await debugSleep(2000);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('loading').innerText = config.i18n[config.locale].loading;
    debugLog();
});

window.addEventListener('message', function (e) {
    switch (e.data.eventName) {
        case 'startInitFunctionOrder':
            document.getElementById('loading-details').innerText = 'Start ' + e.data.type + '...';
            break;
        case 'initFunctionInvoking':
            document.getElementById('loading-details').innerText = 'Init ' + e.data.idx + "/" + e.data.count + "...";
            break;
        case 'onLogLine':
            document.getElementById('loading-details').innerText = e.data.message;
            break;
        default:
            console.log('[DEBUG] Unhandled event: "' + e.data.eventName + '"!')
            break;
    }
});
