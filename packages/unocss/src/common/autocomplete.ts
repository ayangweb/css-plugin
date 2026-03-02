/**
 * 自动补全模板生成函数
 */

export interface AutocompleteOptions {
  prefix: string
  themeKeys: {
    rounded: 'borderRadius' | 'radius'
    shadow: 'boxShadow' | 'shadow'
    text: 'fontSize' | 'text'
  }
}

/**
 * 为指定前缀创建模板数组
 */
function createTemplatesForPrefix(prefix: string, themeKeys: AutocompleteOptions['themeKeys']) {
  const p = prefix ? `${prefix}-` : ''
  
  return [
    // 颜色类
    `${p}color-$colors`,
    `${p}c-$colors`,
    `${p}bg-$colors`,

    // Border 边框色
    `${p}border`,
    `${p}b`,
    `${p}border-$colors`,
    `${p}b-$colors`,
    // Border 方向性
    `${p}border-t-$colors`,
    `${p}bt-$colors`,
    `${p}border-r-$colors`,
    `${p}br-$colors`,
    `${p}border-b-$colors`,
    `${p}bb-$colors`,
    `${p}border-l-$colors`,
    `${p}bl-$colors`,
    `${p}border-x-$colors`,
    `${p}bx-$colors`,
    `${p}border-y-$colors`,
    `${p}by-$colors`,

    // Margin 类
    `${p}m-$spacing`,
    `${p}mt-$spacing`,
    `${p}mb-$spacing`,
    `${p}ml-$spacing`,
    `${p}mr-$spacing`,
    `${p}mx-$spacing`,
    `${p}my-$spacing`,

    // Padding 类
    `${p}p-$spacing`,
    `${p}pt-$spacing`,
    `${p}pb-$spacing`,
    `${p}pl-$spacing`,
    `${p}pr-$spacing`,
    `${p}px-$spacing`,
    `${p}py-$spacing`,

    // 字体 (使用对应的主题键)
    `${p}text-$${themeKeys.text}`,

    // Rounded 圆角 (使用对应的主题键)
    `${p}rounded`,
    `${p}rd`,
    `${p}rounded-$${themeKeys.rounded}`,
    `${p}rd-$${themeKeys.rounded}`,
    // 角落圆角
    `${p}rounded-tl`,
    `${p}rounded-tl-$${themeKeys.rounded}`,
    `${p}rounded-tr`,
    `${p}rounded-tr-$${themeKeys.rounded}`,
    `${p}rounded-bl`,
    `${p}rounded-bl-$${themeKeys.rounded}`,
    `${p}rounded-br`,
    `${p}rounded-br-$${themeKeys.rounded}`,
    // 边侧圆角
    `${p}rounded-t`,
    `${p}rounded-t-$${themeKeys.rounded}`,
    `${p}rounded-r`,
    `${p}rounded-r-$${themeKeys.rounded}`,
    `${p}rounded-b`,
    `${p}rounded-b-$${themeKeys.rounded}`,
    `${p}rounded-l`,
    `${p}rounded-l-$${themeKeys.rounded}`,

    // Shadow 阴影 (使用对应的主题键)
    `${p}shadow`,
    `${p}shadow-$${themeKeys.shadow}`,
  ]
}

/**
 * 创建自动补全模板（同时支持带前缀和不带前缀）
 */
export function createAutocompleteTemplates(options: AutocompleteOptions) {
  const { prefix, themeKeys } = options

  return [
    // 带前缀的模板 (如 a-mx-lg)
    ...createTemplatesForPrefix(prefix, themeKeys),
    // 不带前缀的模板 (如 mx-lg)
    ...createTemplatesForPrefix('', themeKeys),
  ]
}
