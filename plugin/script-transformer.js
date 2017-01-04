let types = require('babel-types');
module.exports = () => {
  return {
    pre(file, state) {
      let { path } = file;
      require('./util/init')(path, state, this, {});
    },
    post(file, state) {
      let { path } = file;
      require('./util/post')(path, state, this, {});
    },
    visitor: {
      TaggedTemplateExpression(path, state) {
        let { tag: speaker, quasi: spoken } = path.node;
        require('./util/speak')(path, state, this, { speaker, spoken });
      },
      CallExpression(path, state) {
        let { callee, arguments: args } = path.node;
        if (types.isIdentifier(callee)) {
          let { name } = callee;
          switch(name) {
            case 'show':
              return require('./util/show')(path, state, this, { target: args.splice(0, 1)[0], args });
            case 'move':
              return require(`./util/move`)(path, state, this, { args });
            case 'speak':
              let [ speaker, spoken ] = args;
              return require('./util/speak')(path, state, this, { speaker, spoken });
            case 'call':
              let [ script, ...props ] = args;
              return require('./util/call')(path, state, this, { script, props });
            case 'queue':
              return require(`./util/queue`)(path, state, this, { args });
            case 'flag':
              return require('./util/flag')(path, state, this, { args });
            case 'persist':
              return require('./util/persist')(path, state, this, { args });
            case 'menu':
              return require('./util/menu')(path, state, this, { name: args[0], options: args[1] });
            case 'vw':
            case 'vh':
              return require(`./util/${name}`)(path, state, this, { value: args[0] });
            case 'aw':
            case 'ah':
              return require(`./util/${name}`)(path, state, this, { actor: args[0], value: args[1] });
            case 'props':
              return require('./util/props')(path, state, this, {});
            case 'Character':
              return require('./util/Character')(path, state, this, { name: args[0], color: args[1] });
          }
        }
      }
    }
  }
};