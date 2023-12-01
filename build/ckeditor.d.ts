/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Bold, Italic, Subscript, Superscript, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import { Image, ImageInsert, ImageUpload } from "@ckeditor/ckeditor5-image";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText } from "@ckeditor/ckeditor5-special-characters";
import MathType from "@wiris/mathtype-ckeditor5";
import { SimpleUploadAdapter } from "@ckeditor/ckeditor5-upload";
import { HtmlEmbed } from "@ckeditor/ckeditor5-html-embed";
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof Bold | typeof Essentials | typeof GeneralHtmlSupport | typeof Image | typeof ImageInsert | typeof ImageUpload | typeof Italic | typeof Link | typeof MathType | typeof Paragraph | typeof RemoveFormat | typeof SimpleUploadAdapter | typeof SpecialCharacters | typeof SpecialCharactersArrows | typeof SpecialCharactersCurrency | typeof SpecialCharactersLatin | typeof SpecialCharactersMathematical | typeof SpecialCharactersText | typeof Subscript | typeof Superscript | typeof Underline | typeof HtmlEmbed)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        htmlSupport: {
            allow: {
                name: string;
                attributes: string[];
            }[];
        };
    };
}
export default Editor;
