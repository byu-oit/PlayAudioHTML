import { PlayAudioHTMLPreviewProps } from "../typings/PlayAudioHTMLProps";

export type Platform = "web" | "desktop";

export type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type BaseProps = {
    type: "Image" | "Container" | "RowLayout" | "Text" | "DropZone" | "Selectable" | "Datasource";
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
};

type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
};

type ContainerProps = BaseProps & {
    type: "Container" | "RowLayout";
    children: PreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
};

type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow"; // default is fixed
};

type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
};

type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string; // text to be shown inside the dropzone when empty
    showDataSourceHeader?: boolean; // true by default. Toggles whether to show a header containing information about the datasource
};

type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: PreviewProps; // any type of preview property to visualize the object instance
};

type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: object | null; // datasource property object from Values API
    child?: PreviewProps; // any type of preview property component (optional)
};

export type PreviewProps =
    | ImageProps
    | ContainerProps
    | RowLayoutProps
    | TextProps
    | DropZoneProps
    | SelectableProps
    | DatasourceProps;

export function getProperties(
    _values: PlayAudioHTMLPreviewProps,
    defaultProperties: Properties /* , target: Platform*/
): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */
    return defaultProperties;
}

// export function check(_values: PlayAudioHTMLPreviewProps): Problem[] {
//     const errors: Problem[] = [];
//     // Add errors to the above array to throw errors in Studio and Studio Pro.
//     /* Example
//     if (values.myProperty !== "custom") {
//         errors.push({
//             property: `myProperty`,
//             message: `The value of 'myProperty' is different of 'custom'.`,
//             url: "https://github.com/myrepo/mywidget"
//         });
//     }
//     */
//     return errors;
// }

// export function getPreview(values: PlayAudioHTMLPreviewProps, isDarkMode: boolean, version: number[]): PreviewProps {
//     // Customize your pluggable widget appearance for Studio Pro.
//     return {
//         type: "Container",
//         children: []
//     }
// }

export function getPreview(values: PlayAudioHTMLPreviewProps, isDarkMode: boolean, version: number[]): PreviewProps {
    // Customize your pluggable widget appearance for Studio Pro.

    console.log("props: ", values); // testing only
    console.log("isDarkMode: ", isDarkMode) // testing only
    console.log("version: ", version); // testing only

    const svgImageTest = `<svg height="130" width="500">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
  <text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">SVG</text>
  Sorry, your browser does not support inline SVG.
</svg>`

    const svgImage = `<svg viewBox="0 0 480 32" width="480" height="32">
    <!-- Audio widget BEGIN -->
    <!-- Playback oval -->
    <rect x="1" y="1" width="300" height="30" fill="#f0f0f0" stroke="#aaaaaa" stroke-width="1" rx="16" ry="16"/>
    <!-- Play button (black triangle) -->
    <polygon points="23,10 33,16 23,22" fill="#000000"/>
    <text x="47" y="21" style="font: 14px sans-serif">0:12 / 0:12</text>
    <!-- Progress bar (black line) -->
    <line x1="129" y1="16" x2="209" y2="16" stroke="#000000" stroke-width="4"/>
    <!-- Play head position (black circle) -->
    <circle cx="134" cy="16" r="6" fill="#000000"/>
    <!-- Speaker icon (black) -->
    <polygon points="233,13 237,13 241,9 241,23 237,19 233,19" fill="#000000"/>
    <!-- Speaker sound (black arcs) -->
    <path d="M243,13 A3,3 0 0 1 243,19" />
    <path d="M243,10 A6,6 0 0 1 243,22" stroke="#000000" stroke-width="2" fill="none" />
    <!-- Options icon (3 vertical dots) -->
    <circle cx="273" cy="11" r="1.6" fill="#000000"/>
    <circle cx="273" cy="16" r="1.6" fill="#000000"/>
    <circle cx="273" cy="21" r="1.6" fill="#000000"/>
    <!-- Audio widget END -->
    Sorry, your browser does not support inline SVG.
</svg>`

    return {
        type: "Image",
        document: svgImage,
        width: 480
    }
}

// export function getCustomCaption(values: PlayAudioHTMLPreviewProps, platform: Platform): string {
//     return "PlayAudioHTML";
// }
