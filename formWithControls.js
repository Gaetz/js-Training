(function() {

    function init() {

        var tooltips = document.querySelectorAll('.help');

        // Text constaint
        function addCharacterConstraint(element, minimalNumber, tooltipId) {
            element.addEventListener('keyup', function() {
                if(this.value.length < minimalNumber) {
                    tooltips[tooltipId].style.display = 'inline-block';
                } else {
                    tooltips[tooltipId].style.display = 'none';
                }
            });
        }
        addCharacterConstraint(document.getElementById('lastname'), 2, 1);
        addCharacterConstraint(document.getElementById('firstname'), 2, 2);
        addCharacterConstraint(document.getElementById('nickname'), 4, 4);
        addCharacterConstraint(document.getElementById('passwd'), 6, 5);

        // Number constraint
        document.getElementById('age').addEventListener('keyup', function() {
            var constraintVerified = true;
            if(isNaN(this.value)) {
                constraintVerified = false;
            } else {
                if(this.value < 5 || this.value > 140) {
                    constraintVerified = false;
                }
            }
            if(!constraintVerified) {
                tooltips[3].style.display = 'inline-block';
            } else {
                tooltips[3].style.display = 'none';
            }
        });

        // Second password constraint
        document.getElementById('passwd2').addEventListener('keyup', function() {
            if(this.value != document.getElementById('passwd').value) {
                tooltips[6].style.display = 'inline-block';
            } else {
                tooltips[6].style.display = 'none';
            }
        });

        // Check at submit
        document.getElementById('formWithControls').addEventListener('submit', function(e) { 
            // Genre
            var radios = document.getElementsByName('genre');
            if(!(radios[0].checked || radios[1].checked || radios[2].checked)) {
                tooltips[0].style.display = 'inline-block';
            } else {
                tooltips[0].style.display = 'none';
            }
            // Country
            if(document.getElementById('country').value == 'none') {
                tooltips[7].style.display = 'inline-block';
            } else {
                tooltips[7].style.display = 'none';
            }
            // Dont send
            e.preventDefault();
        });
    }

    init();

})();