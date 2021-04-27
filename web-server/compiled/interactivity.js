export class Button {
    constructor(name, className, tagName) {
        this.name = name;
        this.className = className;
        this.tagName = tagName;
    }
    createButton() {
        let button = document.createElement('button');
        button.textContent = this.name.toString();
        button.classList.add(this.className.toString());
        button.id = this.tagName.toString();
        return button;
    }
}
//# sourceMappingURL=interactivity.js.map