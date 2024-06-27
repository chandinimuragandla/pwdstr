
var link =  document.createElement('link');
link.href = 'pass.css';
link.rel = 'stylesheet'
document.head.appendChild(link);

var div = document.createElement('div')
div.id  = 'main';
div.style.width = '300px';
div.style.height = '100px';
div.style.padding = '20px';
div.style.textAlign = 'center';
div.style.backgroundColor = 'aliceblue';
div.style.borderRadius = '6px';
document.body.appendChild(div);

var passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
passwordInput.style.margin = '10px';
passwordInput.style.outline = 'none';
passwordInput.style.padding = '5px';
passwordInput.style.fontSize = '16px';
passwordInput.placeholder = "Enter password";
div.appendChild(passwordInput);

var strengthDisplay = document.createElement("div");
strengthDisplay.id = "strength";
strengthDisplay.style.margin = '10px';
strengthDisplay.style.padding = '5px';
strengthDisplay.fontSize = '16px';
strengthDisplay.style.marginLeft = '45px';
strengthDisplay.style.width = '200px';
strengthDisplay.style.height = '20px';
strengthDisplay.style.fontSize = '16px';

div.appendChild(strengthDisplay);

function checkPasswordStrength(password) {
    var strength = 0;

    if (password.length >= 8) {
        strength += 1;
    }
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[\W]+/)) {
        strength += 1;
    }

    return strength;
}

function updateStrengthDisplay(strength) {
    var strengthText;
    var strengthClass;
    switch (strength) {
        case 0:
        case 1:
            strengthText = "Very Weak";
            strengthClass = "very-weak";
            break;
        case 2:
            strengthText = "Weak";
            strengthClass = "weak";
            break;
        case 3:
            strengthText = "Medium";
            strengthClass = "medium";
            break;
        case 4:
            strengthText = "Strong";
            strengthClass = "strong";
            break;
        case 5:
            strengthText = "Very Strong";
            strengthClass = "very-strong";
            break;
        default:
            strengthText = "";
            strengthClass = "";
    }
    var strengthElement = document.getElementById("strength");
    strengthElement.innerText = `Password Strength: ${strengthText}`;
    strengthElement.className = strengthClass;
}

passwordInput.addEventListener("input", function() {
    var password = passwordInput.value;
    var strength = checkPasswordStrength(password);
    updateStrengthDisplay(strength);
});
