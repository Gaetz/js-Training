(function() {

    var leftInit;
    var topInit;

    // Manage drag and drop flag
    function init() {
        var dragables = document.querySelectorAll('.draggableBox');
        for(var i = 0; i < dragables.length; i++) {
            // Add class moving when drag
            dragables[i].addEventListener('mousedown', function(e) {
                e.target.classList.add('moving');
                leftInit = e.clientX - e.target.offsetWidth - e.target.offsetLeft;
                topInit = e.clientY - e.target.offsetHeight - e.target.offsetTop;
            });
            // Remove class moving when drop
            dragables[i].addEventListener('mouseup', function(e) {
                if(e.target.classList.contains('moving')) {
                    e.target.classList.remove('moving');
                }
            });
        }

        // Move management
        document.addEventListener('mousemove', function(e) {
            var moving = document.getElementsByClassName('moving')[0];
            if(moving) {
                moving.style.left = leftInit + e.clientX + 'px';
                moving.style.top = topInit + e.clientY + 'px';
            }
        }, false);
    }
    init();

})();