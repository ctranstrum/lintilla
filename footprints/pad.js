module.exports = {
    params: {
        designator: 'PAD',
        width: 1,
        height: 1,
        side: 'both', // set to F or B if only on one side
        text: '',
        align: 'left',
        shape: 'rect', // can be circle
        mirrored: {type: 'boolean', value: '{{mirrored}}'},
        net: undefined
    },
    body: p => {

        const layout = (toggle, side) => {
            if (!toggle) return ''
            let x = 0, y = 0
            const mirror = side == 'B' ? '(justify mirror)' : ''
            const plus = (p.text.length + 1) * 0.5
            let align = p.align
            if (p.mirrored === true) {
                if (align == 'left') align = 'right'
                else if (align == 'right') align = 'left'
            }
            if (align == 'left') x -= p.width / 2 + plus
            if (align == 'right') x += p.width / 2 + plus
            if (align == 'up') y += p.height / 2 + plus
            if (align == 'down') y -= p.height / 2 + plus
            let text = ''
            if (p.text.length) {
                text = `(fp_text user ${p.text} (at ${x} ${y} ${p.r}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${mirror}))`
            }
            return `(pad 1 smd ${p.shape} (at 0 0 ${p.r}) (size ${p.width} ${p.height}) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.net})\n${text}`
        }

        const via = `(pad 1 thru_hole circle (at 0 0) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${p.net})`

        return `

        (module SMDPad (layer F.Cu) (tedit 5B24D78E)

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            ${''/* SMD pads */}
            ${layout(p.side !== 'B', 'F')}
            ${layout(p.side !== 'F', 'B')}
            ${p.side === 'both' ? via : ''}

        )

        `
    }
}
