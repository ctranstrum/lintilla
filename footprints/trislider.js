module.exports = {
  params: {
    designator: 'T', // for Toggle
    side: 'F',
    posts: true,
    GND: { type: 'net', value: 'GND' },
    A: { type: 'net', value: '' },
    COM: { type: 'net', value: '' },
    B: { type: 'net', value: '' }
  },
  body: (p) => {
    const netStr = (net) => net.name ? net.str : '';
    const left = p.side === 'F' ? '-' : ''
    const right = p.side === 'F' ? '' : '-'

    const posts = p.posts ? `
        (pad "" np_thru_hole circle (at 1.5 0) (size 1 1) (drill 0.9) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at -1.5 0) (size 1 1) (drill 0.9) (layers *.Cu *.Mask))
    ` : ''

    return `
      (module E73:SPDT_C128955 (layer F.Cu) (tstamp 5BF2CC3C)

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${p.side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${'' /* outline */}
        (fp_line (start 1.95 -1.35) (end -1.95 -1.35) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 0 -1.35) (end -3.3 -1.35) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -3.3 -1.35) (end -3.3 1.5) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -3.3 1.5) (end 3.3 1.5) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 3.3 1.5) (end 3.3 -1.35) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 0 -1.35) (end 3.3 -1.35) (layer ${p.side}.SilkS) (width 0.15))

        ${'' /* extra indicator for the slider */}
        (fp_line (start -1.95 -3.85) (end 1.95 -3.85) (layer Dwgs.User) (width 0.15))
        (fp_line (start 1.95 -3.85) (end 1.95 -1.35) (layer Dwgs.User) (width 0.15))
        (fp_line (start -1.95 -1.35) (end -1.95 -3.85) (layer Dwgs.User) (width 0.15))

        ${posts}

        ${'' /* pins */}
        (pad 1 smd rect (at ${right}2.25 2.075 ${p.r}) (size 0.9 1.25) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${netStr(p.A)})
        (pad 2 smd rect (at ${left}0.75 2.075 ${p.r}) (size 0.9 1.25) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${netStr(p.COM)})
        (pad 3 thru_hole circle (at ${left}0.75 2.075) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${netStr(p.COM)})
        (pad 3 smd rect (at ${left}2.25 2.075 ${p.r}) (size 0.9 1.25) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${netStr(p.B)})
        (pad 3 thru_hole circle (at ${left}2.25 2.075) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${netStr(p.B)})

        ${'' /* side mounts */}
        (pad "" smd rect (at 3.7 -1.1 ${p.r}) (size 0.9 0.9) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${netStr(p.GND)})
        (pad "" smd rect (at 3.7 1.1 ${p.r}) (size 0.9 0.9) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${netStr(p.GND)})
        (pad "" smd rect (at -3.7 1.1 ${p.r}) (size 0.9 0.9) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${netStr(p.GND)})
        (pad "" smd rect (at -3.7 -1.1 ${p.r}) (size 0.9 0.9) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${netStr(p.GND)})
      )
    `;
  }
}