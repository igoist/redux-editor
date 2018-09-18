import { theme } from './theme';

export const l = (config) => {
  const { title, titleBg, titleColor, text, textBg, textColor } = config;
  console.log(
    `%c${ title }%c: %c${ text }`,
    `${ titleBg ? 'background:' + titleBg + ';' : '' }
    ${ titleColor ? 'color:' + theme(titleColor) + ';' : 'color:' + theme('') + ';' }`,
    '',
    `${ textBg ? 'background:' + textBg + ';' : '' }
    ${ textColor ? 'color:' + theme(textColor) + ';' : '' }`
  );
};

export const dev = (config) => {
  if (process.env.NODE_ENV === 'development') {
    l(config);
  }
};

export const prod = (config) => {
  if (process.env.NODE_ENV === 'production') {
    l(config);
  }
};

export default l;
