(function (global) {

    const each = fn =>
        function (...args) {
            this.elements.forEach(elem =>
                fn(elem, ...args));
            return this;
        };

    const on = each((element, eventName, handler, ) =>
        element.addEventListener(eventName, handler))

    const off = each((element, eventName, handler, ) =>
        element.removeEventListener(eventName, handler))

    const addClass = each((element, className) => {
        let classNames = className.split(' ');
        classNames.forEach(name => {
            element.classList.add(name)
        });
    })

    const removeClass = each((element, className) => {
        let classNames = className.split(' ');
        classNames.forEach(name => {
            element.classList.remove(name)
        });
    })

    const toggleClass = each((element, className) => {
        let classNames = className.split(' ');
        classNames.forEach(name => element.classList.toggle(name))
    })

    const html = function (data) {
        if (data != undefined) {
            this.elements.forEach(elem => elem.innerHTML = data);
            return this
        }
        else {
            let values = [];
            this.elements.forEach(elem => values.push(elem.innerHTML));
            return values
        }
    }

    const text = function (data) {
        if (data != undefined) {
            this.elements.forEach(elem => elem.textContent = data);
            return this
        }
        else {
            let values = [];
            this.elements.forEach(elem => values.push(elem.textContent));
            return values
        }
    }

    const val = function (value) {
        if (value != undefined) {;
            this.elements.forEach(elem => elem.value = value);
            return this
        }
        else {
            let values = [];
            this.elements.forEach(elem => values.push(elem.value));
            return values
        }
    }

    const attr = each((element, attr, value) => {
        if (attr != undefined && value != undefined) {
            return element.setAttribute(attr, value);
        }
        if (attr != undefined && value == undefined) {
            return element.getAttribute(attr);
        }
        else {
            throw "error takes atleast one argument recieved 0";
        }
    })

    const parent = function(){
        let elementsArray = []
        elementsArray.push(this.elements[0].parentNode);
        return Object.create(features,{
            elements: {
                value:elementsArray
            }
        });
    }

    const children = function(){
        let childArray = Array.from(this.elements[0].children)
        return Object.create(features,{
            elements: {
                value:childArray
            }
        });
    }

    const next = function(){
        let elementsArray = []
        elementsArray.push(this.elements[0].nextElementSibling);
        return Object.create(features,{
            elements: {
                value:elementsArray
            }
        });
    }

    const is = function(selector){
        return this.elements[0].matches(selector);
    }

    const append = each((elem,data) => {
        elem.appendChild(data.cloneNode(true));
    })

    const prepend = each((elem,data) => {
        elem.insertBefore(data.cloneNode(true),elem.firstChild);
    })

    const hide = each((elem) => {
        elem.style.display = "none";
    })

    const show = each((elem) => {
        elem.style.display = "";
    })

    const css = each((elem,styles) => {
        console.log(styles)
        for(let key in styles){
            elem.style[key] = styles[key]
        }
    })

    const styles = function(name){
        return window.getComputedStyle(this.elements[0],null).getPropertyValue(name)
    }


    const features = {
        on, off, addClass, removeClass, toggleClass, html, text, val, attr,
        parent,children,next,is,append,prepend,hide,show,css,styles
    };

    global.$ = selector =>
        Object.create(features, {
            elements: {
                value: document.querySelectorAll(selector)
            }
        });

    global.$.create = function(selector,data){
        let element = document.createElement(selector);
        let textnode = document.createTextNode(data);
        element.appendChild(textnode);
        return element
    }


})(typeof window !== 'undefined' ? window : this)