module.exports = class Interpreter extends EventEmitter2 {
  constructor() {
    Object.assign(this, {
      menus: require.context('../menu', true, /\.js$/i),
      scripts: require.context('../story', true, /\.js$/i)
    })
  }
}
