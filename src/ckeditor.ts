/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic"

import { Alignment } from "@ckeditor/ckeditor5-alignment"
import {
	Bold,
	Italic,
	Subscript,
	Superscript,
	Underline,
} from "@ckeditor/ckeditor5-basic-styles"
import { Essentials } from "@ckeditor/ckeditor5-essentials"
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support"
import { Image, ImageInsert, ImageUpload } from "@ckeditor/ckeditor5-image"
import { Link } from "@ckeditor/ckeditor5-link"
import { Paragraph } from "@ckeditor/ckeditor5-paragraph"
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format"
import {
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
} from "@ckeditor/ckeditor5-special-characters"
import MathType from "@wiris/mathtype-ckeditor5"
import { SimpleUploadAdapter } from "@ckeditor/ckeditor5-upload"
import { HtmlEmbed } from "@ckeditor/ckeditor5-html-embed"
import DOMPurify from "dompurify"

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.
class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		Bold,
		Essentials,
		GeneralHtmlSupport,
		Image,
		ImageInsert,
		ImageUpload,
		Italic,
		Link,
		MathType,
		Paragraph,
		RemoveFormat,
		SimpleUploadAdapter,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Subscript,
		Superscript,
		Underline,
		HtmlEmbed,
	]

	public static override defaultConfig = {
		toolbar: {
			items: [
				"removeFormat",
				"undo",
				"redo",
				"|",
				"bold",
				"underline",
				"italic",
				"subscript",
				"superscript",
				"alignment",
				"|",
				"MathType",
				"specialCharacters",
				"|",
				"link",
				"imageInsert",
				"imageUpload",
				"HtmlEmbed",
			],
		},
		language: "zh-cn",
		htmlSupport: {
			allow: [
				{
					name: "mfenced",
					attributes: ["open", "close"],
				},
			],
		},
	}
}

export default Editor
