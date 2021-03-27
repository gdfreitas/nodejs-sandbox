/** Nullish Coalescing ES2020 */
const settings = {
  nullValue: null,
  height: 400,
  animationDuration: 0,
  headerText: '',
  showSplashScreen: false
}

// Pipes operator works well here
const undefinedValue = settings.undefinedValue || 'some other default'; // 'some other default'
const nullValue = settings.nullValue || 'some other default'; // 'some other default'

// ... but then we might have some potentially unintended results
const headerText = settings.headerText || 'Hello, world!'; // '' is falsy >> 'Hello, world!'
const animationDuration = settings.animationDuration || 300; // 0 is falsy >> 300
const showSplashScreen = settings.showSplashScreen || true; // false is falsy >> true

// Thats when "??" operator comes in place, to check equality to "null" or "undefined" instead of falsy values
const undefinedValue = settings.undefinedValue ?? 'some other default'; // 'some other default'
const nullValue = settings.nullValue ?? 'some other default'; // 'some other default'
const headerText = settings.headerText ?? 'Hello, world!'; // ''
const animationDuration = settings.animationDuration ?? 300; // 0
const showSplashScreen = settings.showSplashScreen ?? true; // false
