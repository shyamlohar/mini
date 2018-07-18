const on = function (name, cb) {
    if (this.constructor === Array) {
        this.forEach(elem => {
            elem.addEventListener(name, cb)
        })
    }
    else {
        this.addEventListener(name, cb);
    }
}

const off = function (name, cb) {
    if (this.constructor === Array) {
        this.forEach(elem => {
            elem.removeEventListener(name, cb)
        })
    }
    else {
        this.removeEventListener(name, cb);
    }
}

const css = function (values) {
    if (this.constructor === Array) {
        this.forEach(elem => {
            for (let key in values) {
                elem.style[key] = values[key];
            }
        })
    }
    else {
        for (let key in values) {
            this.style[key] = values[key];
        }
    }
}

const addClass = function (names) {
    names = names.split(' ');
    elem = this;
    if (this.constructor === Array) {
        this.forEach(elem => {
            names.forEach(function (name) {
                elem.classList.add(name);
            })
        })
    }
    else {
        names.forEach(function (name) {
            elem.classList.add(name);
        })
    }
}

const removeClass = function (names) {
    names = names.split(' ');
    elem = this;
    if (this.constructor === Array) {
        this.forEach(elem => {
            names.forEach(function (name) {
                elem.classList.remove(name);
            })
        })
    }
    else {
        names.forEach(function (name) {
            elem.classList.remove(name);
        })
    }
}

const toggleClass = function (name) {
    if (this.constructor == Array) {
        this.forEach(elem => {
            present = elem.getAttribute('class');
            present = present.split(' ');
            if (present.indexOf(name) != -1) {
                elem.classList.remove(name);
            }
            else {
                elem.classList.add(name);
            }
        })
    }
    else {
        present = this.getAttribute('class');
        present = present.split(' ');
        if (present.indexOf(name) != -1) {
            this.classList.remove(name);
        }
        else {
            this.classList.add(name);
        }
    }

}

const html = function (data) {
    if (this.constructor == Array) {
        values = []
        this.forEach(elem => {
            if (data != undefined) {
                return elem.innerHTML = data;
            }
            else {
                values.push(elem.innerHTML);
            }
        })
        if (values.length != 0) {
            return values
        }
    }
    else {
        if (data != undefined) {
            this.innerHTML = data;
        }
        else {
            return this.innerHTML;
        }
    }
}

const text = function (data) {
    if (this.constructor == Array) {
        values = []
        this.forEach(elem => {
            if (data != undefined) {
                return elem.textContent = data;
            }
            else {
                values.push(elem.textContent);
            }
        })
        if (values.length != 0) {
            return values
        }
    }
    else {
        if (data != undefined) {
            this.textContent = data;
        }
        else {
            return this.textContent;
        }
    }
}

const val = function (value) {
    if (this.constructor == Array) {
        values = []
        this.forEach(elem => {
            if (value != undefined) {
                return elem.value = value;
            }
            else {
                values.push(elem.value);
            }
        })
        if (values.length != 0) {
            return values
        }
    }
    else {
        if (value != undefined) {
            this.value = value;
        }
        else {
            return this.value;
        }
    }
}

const attr = function (attr, value) {
    if (this.constructor === Array) {
        this.forEach(elem => {
            if (attr != undefined && value == undefined) {
                return elem.getAttribute(attr)
            }
            if (attr != undefined && value != undefined) {
                return elem.setAttribute(attr, value)
            }
            else {
                throw "error occured attr takes 1 or 2 arguments passed"

            }
        })
    }
    else {
        if (attr != undefined && value == undefined) {
            return this.getAttribute(attr)
        }
        if (attr != undefined && value != undefined) {
            return this.setAttribute(attr, value)
        }
        else {
            throw "error occured attr takes 1 or 2 arguments passed"

        }
    }
}

const parent = function () {
    if (this.constructor === Array) {
        return this[0].parentNode
    }
    else {
        return this.parentNode
    }
}

const child = function () {
    if (this.constructor === Array) {
        return Array.from(this[0].children)
    }
    else {
        return Array.from(this.children)
    }
}

const next = function () {
    if (this.constructor === Array) {
        return this[0].nextElementSibling
    }
    else {
        return this.nextElementSibling
    }
}

const styles = function (name) {
    if (this.constructor === Array) {
        if (name != undefined) {
            return window.getComputedStyle(this[0], null).getPropertyValue(name)
        }
        else {
            return window.getComputedStyle(this[0], null)
        }
    }
    else {
        if (name != undefined) {
            return window.getComputedStyle(this, null).getPropertyValue(name)
        }
        else {
            return window.getComputedStyle(this, null)
        }
    }
}

const is = function (selector) {
    if (this.constructor === Array) {
        return this[0].matches(selector)
    }
    else {
        return this.matches(selector)
    }
}

const append = function (element) {
    if (this.constructor === Array) {
        this.forEach(elem => {
            elem.appendChild(element.cloneNode(true))
        })
    }
    else {
        this.appendChild(element)
    }
}

const prepend = function (element) {
    if (this.constructor === Array) {
        this.forEach(elem => {
            elem.insertBefore(element.cloneNode(true), elem.firstChild)
        })
    }
    else {
        this.insertBefore(element, this.firstChild)
    }
}

const hide = function () {
    if (this.constructor === Array) {
        this.forEach(elem => {
            elem.style.display = "none"
        })
    }
    else {
        this.style.display = 'none';
    }
}

const show = function () {
    if (this.constructor === Array) {
        this.forEach(elem => {
            elem.style.display = ''
        })
    }
    else {
        this.style.display = '';
    }
}


const features = {
    on, off, css, addClass, removeClass, toggleClass, html, text,
    val, attr, parent, child, next, styles, is, append, prepend, hide, show
}

$ = (name) => {
    value = Array.from(document.querySelectorAll(name));
    if (value.length == 1) {
        value[0] = Object.assign(value[0], features);
        return value[0]
    }
    else {
        elements = []
        value.forEach(val => {
            elem = Object.assign(val, features);
            elements.push(elem);
        })
        elements = Object.assign(elements, features)
        return elements
    }
}

//function to create elements


$create = function (name, content) {
    elem = document.createElement(name);
    textnode = document.createTextNode(content);
    elem.appendChild(textnode);
    return elem;
}