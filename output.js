module.exports = function* menu(_interpreter) {
    void 0;

    let _cache;

    let {
        tb,
        bg
    } = _interpreter;
    let Aya = (_cache = new _interpreter.Character({
        id: 'aya',
        name: 'Aya',
        actor: 'Aya'
    }), _interpreter.apply(_cache, ...[{ id: 'aya', name: 'Aya', actor: 'Aya' }, {
        x: _interpreter.renderer.width * 50 * 0.01,
        y: _interpreter.renderer.height * 100 * 0.01,
        cx: {
            _type: 'computed',
            unit: 'aw',
            value: 50
        },
        cy: {
            _type: 'computed',
            unit: 'ah',
            value: 100
        }
    }, {
        mood: 'Neutral'
    }, {
        a: 0
    }]), Object.assign(_cache.last, _cache.position), _cache);

    bg = _interpreter.renderer.find(bg.id) || bg, Object.assign(bg.last, bg.position), _interpreter.show(bg, ...[{
        a: 1
    }]), bg.start = Date.now(), bg.hiding = false, bg;
    Aya = _interpreter.renderer.find(Aya.id) || Aya, Object.assign(Aya.last, Aya.position), _interpreter.show(Aya, ...[{
        a: 1
    }]), Aya.start = Date.now(), Aya.hiding = false, Aya;
    tb = _interpreter.renderer.find(tb.id) || tb, Object.assign(tb.last, tb.position), _interpreter.show(tb, ...[{
        a: 1
    }]), tb.start = Date.now(), tb.hiding = false, tb;

    ({
        rot: Math.PI
    });
    ({
        rot: 0.25 * 2 * Math.PI
    });
    ({
        rot: -90 * Math.PI / 180
    });

    _cache = [Aya || "", `Hello`], _interpreter.tb.speaker = _cache[0].hasOwnProperty('name') ? _cache[0].name : _cache[0], _interpreter.tb.speakerColor = _cache[0].hasOwnProperty('color') ? _cache[0].color : _interpreter.theme.defaultSpeakerColor, _interpreter.tb.text = _cache[1].toString(), _interpreter.tb.textIndex = 0, yield ['pause', void 0], _cache[0];
    void 0;
};
