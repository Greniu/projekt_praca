const jb = {
    init: function () {
        this.regEx();
        this.variables();
        this.activeNavigationList();
        this.scrollNavigationBar();
        this.validationForm(this.regexpName, this.inputName, this.validationNameMessage);
        this.validationForm(this.regexpEmail, this.inputEmail, this.validationEmailMessage);
        this.mobileOpenNavigation();
        this.mobileCloseNavigation();
        this.resizeWindow();
        this.scrollHomeBackground();
    },
    regEx: function () {
        this.regexpName = new RegExp("^[^0-9]+[A-Za-z]$");
        this.regexpEmail = new RegExp("^[A-Za-z0-9-_.]+@[A-Za-z0-9-_.]+\\.[A-Za-z0-9]{2,3}$");
    },
    variables: function () {
        this.body = document.getElementsByTagName('body')[0];
        this.contactForm = document.getElementById('contactForm');
        this.inputName = this.contactForm.querySelector('input[type="text"]');
        this.inputEmail = this.contactForm.querySelector('input[type="email"]');
        this.validationNameMessage = document.getElementById('validationNameMessage');
        this.validationEmailMessage = document.getElementById('validationEmailMessage');
        this.burger = document.getElementById('burger');
        this.closeButton = document.getElementById('closeButton');
        this.navBarNav = document.querySelector('.navbar-nav');
        this.navigationList = document.querySelector('.navbar-list');
        this.navigationListHref = document.querySelectorAll('.navbar-list .list a');
        this.navigationContainer = document.getElementById('navigationContainer');
        this.darkBackground = document.querySelector('.bg-dark');
        this.backgroundImage = document.querySelector('.content-home');
    },
    activeNavigationList: function () {
        this.navigationListHref.forEach(function(value) {
            const contentSwitchId = document.getElementById(value.href.split("#")[1]);
            window.addEventListener('scroll', function () {
                if (window.scrollY >= (contentSwitchId.offsetTop) - 1) {
                    const active = document.getElementsByClassName("active");
                    active[0].className = active[0].className.replace(" active", "");
                    value.className = " active";
                }
            }.bind(this));
        }.bind(this));
    },
    scrollNavigationBar: function () {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                this.navigationContainer.classList.add('navbar-fixed')
            } else {
                this.navigationContainer.classList.remove('navbar-fixed')
            }
        });
    },
    validationForm: function (regexpType, inputType, validateMessage) {
        this.contactForm.addEventListener('submit', function (e) {
            if (regexpType.test(inputType.value)) {
                validateMessage.style.display = 'none';
            } else {
                validateMessage.style.display = 'block';
                e.preventDefault();
            }
        }.bind(this));
    },
    changeNavigationStyles: function (bodyOverflow,navBarNavtWidth, NavListWidth, backgroundOpacity, burgerDisplay, closeButtonDisplay) {
        this.body.style.overflow = bodyOverflow;
        this.navBarNav.style.width = navBarNavtWidth;
        this.navigationList.style.width = NavListWidth;
        this.darkBackground.style.opacity = backgroundOpacity;
        this.burger.style.display = burgerDisplay;
        this.closeButton.style.display = closeButtonDisplay;
    },
    mobileOpenNavigation: function () {
        this.burger.addEventListener('click', function () {
            if (window.matchMedia("(max-width: 767px)").matches) {
                this.changeNavigationStyles('hidden', 'calc(100% - 50px)', 'calc(100% - 30px)', '0.6', 'none', 'block');
            } else if (window.matchMedia("(max-width: 1199px)").matches) {
                this.changeNavigationStyles('hidden', 'calc(70% - 50px)', '70%', '0.6', 'none', 'block');
            }
            this.navigationListHref.forEach(function (value) {
                value.addEventListener('click', function () {
                    if (window.matchMedia("(max-width: 1199px)").matches) {
                        this.changeNavigationStyles('auto', '0', '0', '0', 'block', 'none');
                    }
                }.bind(this));
            }.bind(this));
        }.bind(this));
    },
    mobileCloseNavigation: function () {
        this.closeButton.addEventListener('click', function () {
            this.changeNavigationStyles('auto', '0', '0', '0', 'block', 'none');
        }.bind(this));
    },
    resizeWindow: function () {
        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 1200px)").matches) {
                this.changeNavigationStyles('auto', 'auto', 'auto', '0', 'none', 'none');
            } else {
                this.changeNavigationStyles('auto', '0', '0',  '0', 'block', 'none');
            }
        }.bind(this));
    },
    scrollHomeBackground: function () {
        window.addEventListener('scroll', function () {
            if (window.matchMedia("(min-width: 1200px)").matches) {
                this.backgroundImage.style.backgroundPosition = (50 - window.scrollY / 15) + '%' + ' ' + (50 + window.scrollY / 20) + '%';
            } else {
                this.backgroundImage.style.backgroundPosition = (50 + window.scrollY / 20) + '%';
            }
        }.bind(this));
    }
};

document.addEventListener("DOMContentLoaded", function() {
    jb.init();
});