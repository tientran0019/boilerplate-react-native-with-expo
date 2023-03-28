/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-01 22:13:52
*------------------------------------------------------- */
import { Platform } from 'react-native';

const brandPrimary = '#00953B';
const brandPrimaryTap = '#009A4D';

export default {
	name: 'dark',

	gradient_bg: ['#A1E5C4', '#56BE82', '#00953B'],
	gradient_bg_inverse: ['#A1E5C4', '#56BE82', '#00953B'].reverse(),

	shadow_sm: Platform.select({
		android: {
			elevation: 0.4,
		},
		default: {
			shadowColor: 'rgba(0, 0, 0, 0.05)',
			shadowOffset: { height: 1, width: 1 },
			shadowOpacity: 0.8,
			shadowRadius: 2,
		},
	}),
	shadow_base: Platform.select({
		android: {
			elevation: 2,
		},
		default: {
			shadowColor: 'rgba(0, 0, 0, 0.2)',
			shadowOffset: { height: 2, width: 2 },
			shadowOpacity: 0.8,
			shadowRadius: 4,
		},
	}),
	shadow_lg: Platform.select({
		android: {
			elevation: 8,
		},
		default: {
			shadowColor: 'rgba(0, 0, 0, 0.3)',
			shadowOffset: { height: 2, width: 2 },
			shadowOpacity: 0.7,
			shadowRadius: 8,
		},
	}),

	// text color
	color_text_base: '#ffffff', // base
	color_text_base_inverse: '#181818', // base_inverse
	color_text_secondary: '#EA4434', // secondary color
	color_text_placeholder: '#999999', // text box prompt
	color_text_disabled: '#828282', // disabled
	color_text_caption: '#333333', // auxiliary description
	color_text_paragraph: '#666666', // paragraph
	color_link: brandPrimary, // link

	// background color
	fill_base: '#202020', // component default background
	fill_body: '#181818', // page background
	fill_tap: '#FAFAFA', // component default background _ press
	fill_disabled: '#F2F2F2', // general invalidation background
	fill_mask: 'rgba(0, 0, 0, .4)', // mask background
	color_icon_base: '#666666', // The background of many small icons, such as some small dots, plus and minus signs
	fill_grey: '#f7f7f7',
	fill_highlight_bg: '#F9F9FB',
	fill_highlight: '#E8EBED',

	// transparency
	opacity_disabled: '0.3', // switch opacity disabled for components such as checkbox radio

	// global/brand color
	brand_primary: brandPrimary,
	brand_primary_tap: brandPrimaryTap,
	brand_success: '#009A49',
	brand_warning: '#FF9430',
	brand_error: '#EB5050',
	brand_important: '#EA4434', // for the little red dot
	brand_wait: brandPrimaryTap,

	// border color
	border_color_base: '#E0E0E0',
	border_color_component: '#E0E0E0',

	// font size
	//---
	font_size_icontext: 10,
	font_size_caption_sm: 12,
	font_size_base: 14,
	font_size_subhead: 15,
	font_size_caption: 16,
	font_size_heading: 17,

	// rounded corners
	//---
	radius_xs: 2,
	radius_sm: 4,
	radius_md: 8,
	radius_lg: 16,

	// border size
	//---
	border_width_sm: 0.5,
	border_width_md: 1,
	border_width_lg: 2,

	// spacing
	//---
	// horizontal spacing
	h_spacing_sm: 5,
	h_spacing_md: 10,
	h_spacing_lg: 15,

	// vertical spacing
	v_spacing_xs: 3,
	v_spacing_sm: 6,
	v_spacing_md: 9,
	v_spacing_lg: 15,
	v_spacing_xl: 21,

	// high
	//---
	line_height_base: 1, // single line height
	line_height_paragraph: 1.5, // multi-line line height

	// icon size
	//---
	icon_size_xxs: 15,
	icon_size_xs: 18,
	icon_size_sm: 21,
	icon_size_md: 22, // icon on the navigation bar
	icon_size_lg: 36,

	// animation easing
	//---
	ease_in_out_quint: 'cubic_bezier(0.86, 0, 0.07, 1)',

	// component variable
	//---

	actionsheet_item_height: 50,
	actionsheet_item_font_size: 18,

	// button
	button_height: 50,
	button_font_size: 16,
	button_font_weight: 'bold',
	button_font_transform: 'capitalize',

	button_height_sm: 34,
	button_font_size_sm: 12,

	primary_button_fill: brandPrimary,
	primary_button_fill_tap: brandPrimaryTap,

	ghost_button_color: brandPrimary, // also apply to background, text color, border color
	ghost_button_fill_tap: brandPrimaryTap, // alpha 60% https://codepen.io/chriscoyier/pen/XjbzAW

	warning_button_fill: '#FF9430',
	warning_button_fill_tap: '#FF9E44',

	link_button_fill_tap: '#dddddd',
	link_button_font_size: 16,

	// modal
	modal_font_size_heading: 16,
	modal_button_font_size: 16, // button font size
	modal_button_height: 50, // button height

	// list
	list_title_height: 30,
	list_item_height_sm: 35,
	list_item_height: 44,

	// input
	input_label_width: 16, // InputItem, TextareaItem text length basic value
	input_font_size: 16,
	input_color_icon: '#cccccc',
	input_color_icon_tap: brandPrimary,

	// tabs
	tabs_color: brandPrimary,
	tabs_height: 42,
	tabs_font_size_heading: 15,

	// segmented_control
	segmented_control_color: brandPrimary, // also apply to background, text color, border color
	segmented_control_height: 27,
	segmented_control_fill_tap: brandPrimaryTap,

	// tab_bar
	tab_bar_fill: '#ebeeef',
	tab_bar_height: 50,

	// toast
	toast_fill: 'rgba(0, 0, 0, .8)',

	// search_bar
	search_bar_fill: '#efeff4',
	search_bar_height: 44,
	search_bar_input_height: 28,
	search_bar_font_size: 15,
	search_color_icon: '#bbbbbb', // background color of input search icon

	// notice_bar
	notice_bar_fill: '#fffada',
	notice_bar_height: 36,

	// checkbox
	checkbox_fill: '#1890ff',
	checkbox_fill_disabled: '#f5f5f5',
	checkbox_border: '#d9d9d9',
	checkbox_border_disabled: '#b9b9b9',

	// switch
	switch_fill: brandPrimary,
	switch_unchecked: '#cccccc',
	switch_unchecked_disabled: '#cccccc66', // 40% opacity for switch_fill
	switch_checked_disabled: '#1890ff66', // 40% opacity for switch_unchecked

	// tag
	tag_height: 25,
	tag_small_height: 15,

	// picker
	option_height: 42, // height of picker header

	toast_zindex: 9999999,
	action_sheet_zindex: 1000,
	popup_zindex: 999,
	modal_zindex: 999,
};
