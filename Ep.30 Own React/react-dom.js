function render(ReactElement, rootElement) {
    function createDOMElement(ReactElement) {
        if (typeof ReactElement.type === 'function') {
            return createDOMElement(ReactElement.type(ReactElement.props))
        }

        if (Array.isArray(ReactElement)) {
            return ReactElement.map((el) => createDOMElement(el))
        }

        if (typeof ReactElement === "string") {
            return document.createTextNode(ReactElement);
        }

        const { type, props } = ReactElement;
        const DOMElement = document.createElement(type)


        if (props) {

            Object.entries(props).forEach(([key, value]) => {
                if (key !== 'children') {
                    DOMElement[key] = value;
                }
            })

            props.children?.forEach(child => {

                if (Array.isArray(child)) {
                    DOMElement.append(...child.map((el) => createDOMElement(el)))
                }
                else if (typeof child === 'string') {
                    const textNode = document.createTextNode(child)
                    DOMElement.append(textNode)
                } else {
                    DOMElement.append(createDOMElement(child))
                }

            });
        }

        return DOMElement;
    }
    const DOMElement = createDOMElement(ReactElement);
    if (Array.isArray(DOMElement)) {
        rootElement.append(...DOMElement)
    } else {
        rootElement.append(DOMElement)
    }
}

export default render