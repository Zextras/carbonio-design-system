<!--
SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>

SPDX-License-Identifier: AGPL-3.0-only
-->

![Mascotte](./BGURL.svg)

This documentation page serves as a starting point for the successful integration and use of the Zextras Design System.
It will be incrementally expanded over time to accomodate tips, procedures and solutions to common problems that come up
with the deployment and use of the library.

## Under the hood

The Zextras Design System is entirely made of React function components loaded with [hooks](https://reactjs.org/docs/hooks-intro.html)
and styled with [`styled-components`](https://styled-components.com/).

## Input Control
[Controlled input](https://reactjs.org/docs/forms.html#controlled-components)

[Uncontrolled input](https://reactjs.org/docs/uncontrolled-components.html)

Every input component (checkbox, select, etc) can be used in either controlled and uncontrolled mode by using different
props.

Usually uncontrolled components receive a default state, and emit change events, while controlled inputs work by latching
event callbacks on events like `click` and `keypress` to update the value from a controller component. 

## Integration
The Zextras Design System exposes React components, but can also be integrated in Preact projects by following the 
[compat guide](https://preactjs.com/guide/v10/switching-to-preact/#setting-up-compat).

Usually, to insert components into your project you just need to insert the `ThemeProvider` somewhere higher in the 
component hierarchy and, if you code runs from inside an iframe, you will also need to use `styled-components`' 
`StyleSheetManager` specifying a `target` prop.

You can also pass **`loadDefaultFont`** to `ThemeProvider` to load the Roboto font needed by the Design System.
By default *`loadDefaultFont`* is set to false.

The following is an example wrapper component: 
``` jsx static
function StyledWrapper({ extension, children }) {
    return (
        <StyleSheetManager target={window.top.document.head}>
            <ThemeProvider loadDefaultFont={true}>
                {children}
            </ThemeProvider>
        </StyleSheetManager>
    );
}
```

Ideally, you should use only one wrapper at a time, so if you use components on multiple parts of the DOM try to use a single wrapper around a common root.

## Refs

All the components of the DS accept a ref.
