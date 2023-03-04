function change(callerId) {
    const destId = callerId + 'info';
    const dest = document.getElementById(destId)
    let isCollapsed = dest.getAttribute('data-collapsed') === 'true';

    if(isCollapsed) {
        showInfo(destId);
    } else {
        hideInfo(destId)
    }
}

function hideInfo(destId) {
    const dest = document.getElementById(destId)
    const destHeight = dest.scrollHeight;

    let ElementTransition = dest.style.transition;
    dest.style.transition = '';

    requestAnimationFrame(function() {
        dest.style.height = destHeight + 'px';
        dest.style.transition = ElementTransition;

        requestAnimationFrame(function() {
            dest.style.height = 0 + 'px';
        });
    });

    dest.setAttribute('data-collapsed', 'true')
}

function showInfo(destId) {
    const dest = document.getElementById(destId)
    const destHeight = dest.scrollHeight;
    dest.style.height = destHeight + 'px';
    dest.addEventListener('transitionend', function(e) {
        dest.removeEventListener('transitionend', arguments.callee);
        dest.style.height = null;
    });

    dest.setAttribute('data-collapsed', 'false');
}