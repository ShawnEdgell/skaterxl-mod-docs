
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-500)",
		"--on-secondary": "var(--color-surface-500)",
		"--on-tertiary": "var(--color-surface-500)",
		"--on-success": "var(--color-surface-500)",
		"--on-warning": "var(--color-tertiary-500)",
		"--on-error": "0 0 0",
		"--on-surface": "var(--color-tertiary-500)",
		// =~= Theme Colors  =~=
		// primary | #58b3f4 
		"--color-primary-50": "230 244 253", // #e6f4fd
		"--color-primary-100": "222 240 253", // #def0fd
		"--color-primary-200": "213 236 252", // #d5ecfc
		"--color-primary-300": "188 225 251", // #bce1fb
		"--color-primary-400": "138 202 247", // #8acaf7
		"--color-primary-500": "88 179 244", // #58b3f4
		"--color-primary-600": "79 161 220", // #4fa1dc
		"--color-primary-700": "66 134 183", // #4286b7
		"--color-primary-800": "53 107 146", // #356b92
		"--color-primary-900": "43 88 120", // #2b5878
		// secondary | #a77ef2 
		"--color-secondary-50": "242 236 253", // #f2ecfd
		"--color-secondary-100": "237 229 252", // #ede5fc
		"--color-secondary-200": "233 223 252", // #e9dffc
		"--color-secondary-300": "220 203 250", // #dccbfa
		"--color-secondary-400": "193 165 246", // #c1a5f6
		"--color-secondary-500": "167 126 242", // #a77ef2
		"--color-secondary-600": "150 113 218", // #9671da
		"--color-secondary-700": "125 95 182", // #7d5fb6
		"--color-secondary-800": "100 76 145", // #644c91
		"--color-secondary-900": "82 62 119", // #523e77
		// tertiary | #e3e2e9 
		"--color-tertiary-50": "251 251 252", // #fbfbfc
		"--color-tertiary-100": "249 249 251", // #f9f9fb
		"--color-tertiary-200": "248 248 250", // #f8f8fa
		"--color-tertiary-300": "244 243 246", // #f4f3f6
		"--color-tertiary-400": "235 235 240", // #ebebf0
		"--color-tertiary-500": "227 226 233", // #e3e2e9
		"--color-tertiary-600": "204 203 210", // #cccbd2
		"--color-tertiary-700": "170 170 175", // #aaaaaf
		"--color-tertiary-800": "136 136 140", // #88888c
		"--color-tertiary-900": "111 111 114", // #6f6f72
		// success | #57c66f 
		"--color-success-50": "230 246 233", // #e6f6e9
		"--color-success-100": "221 244 226", // #ddf4e2
		"--color-success-200": "213 241 219", // #d5f1db
		"--color-success-300": "188 232 197", // #bce8c5
		"--color-success-400": "137 215 154", // #89d79a
		"--color-success-500": "87 198 111", // #57c66f
		"--color-success-600": "78 178 100", // #4eb264
		"--color-success-700": "65 149 83", // #419553
		"--color-success-800": "52 119 67", // #347743
		"--color-success-900": "43 97 54", // #2b6136
		// warning | #4d4d4d 
		"--color-warning-50": "228 228 228", // #e4e4e4
		"--color-warning-100": "219 219 219", // #dbdbdb
		"--color-warning-200": "211 211 211", // #d3d3d3
		"--color-warning-300": "184 184 184", // #b8b8b8
		"--color-warning-400": "130 130 130", // #828282
		"--color-warning-500": "77 77 77", // #4d4d4d
		"--color-warning-600": "69 69 69", // #454545
		"--color-warning-700": "58 58 58", // #3a3a3a
		"--color-warning-800": "46 46 46", // #2e2e2e
		"--color-warning-900": "38 38 38", // #262626
		// error | #d6f93d 
		"--color-error-50": "249 254 226", // #f9fee2
		"--color-error-100": "247 254 216", // #f7fed8
		"--color-error-200": "245 254 207", // #f5fecf
		"--color-error-300": "239 253 177", // #effdb1
		"--color-error-400": "226 251 119", // #e2fb77
		"--color-error-500": "214 249 61", // #d6f93d
		"--color-error-600": "193 224 55", // #c1e037
		"--color-error-700": "161 187 46", // #a1bb2e
		"--color-error-800": "128 149 37", // #809525
		"--color-error-900": "105 122 30", // #697a1e
		// surface | #232323 
		"--color-surface-50": "222 222 222", // #dedede
		"--color-surface-100": "211 211 211", // #d3d3d3
		"--color-surface-200": "200 200 200", // #c8c8c8
		"--color-surface-300": "167 167 167", // #a7a7a7
		"--color-surface-400": "101 101 101", // #656565
		"--color-surface-500": "35 35 35", // #232323
		"--color-surface-600": "32 32 32", // #202020
		"--color-surface-700": "26 26 26", // #1a1a1a
		"--color-surface-800": "21 21 21", // #151515
		"--color-surface-900": "17 17 17", // #111111

	}
}