// Reversible Seeed XIAO
//

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'up',
    P0: {type: 'net', value: 'P0'},
    P1: {type: 'net', value: 'P1'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    P4: {type: 'net', value: 'P4'},
    P5: {type: 'net', value: 'P5'},
    P6: {type: 'net', value: 'P6'},
    VUSB: {type: 'net', value: 'VUSB'},
    GND: {type: 'net', value: 'GND'},
    VCC: {type: 'net', value: 'VCC'},
    P10: {type: 'net', value: 'P10'},
    P9: {type: 'net', value: 'P9'},
    P8: {type: 'net', value: 'P8'},
    P7: {type: 'net', value: 'P7'},
    RST: {type: 'net', value: 'RST'},
    BATP: {type: 'net', value: 'BAT+'},
  },
  body: p => {
    const is_up = p.orientation == 'up'
    const {def_neg, def_pos} = is_up ? { def_neg: '-', def_pos: ''} : { def_neg: '', def_pos: '-' }

    let randNum = 0
    const randNet = () => `XX${randNum++}`

    const net = n => p[n].name === 'none' ? '' : p[n].str
    const name = n => p[n].name === 'none' ? n : p[n].name

    const standard = `
      (module xiao-ble (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at -19.3989 -11.28268) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* notes
      (fp_text user "SEEED XIAO BLE\\nFACE ${is_up ? 'UP' : 'DOWN'}" (at ${def_pos}5 -1 ${p.rot} unlocked) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15)) (justify left)))
      turned off for now, but it's cool, so maybe turn it on later /* }

      ${''/* illustration of the (possible) USB port overhang */}
      (fp_line (start -3.81 -12.02) (end -3.81 -6.94) (layer Dwgs.User) (width 0.15))
      (fp_line (start 3.81 -12.02) (end -3.81 -12.02) (layer Dwgs.User) (width 0.15))
      (fp_line (start 3.81 -6.94) (end 3.81 -12.02) (layer Dwgs.User) (width 0.15))
      (fp_line (start -3.81 -6.94) (end 3.81 -6.94) (layer Dwgs.User) (width 0.15))

      ${''/* component outline */}
      (fp_line (start 8.89 3.545) (end 8.89 4.075) (layer "F.SilkS") (width 0.12))
      (fp_line (start 8.89 0.995) (end 8.89 1.525) (layer "F.SilkS") (width 0.12))
      (fp_line (start 8.89 6.085) (end 8.89 6.615) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 3.535) (end -8.89 4.065) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 -10.5) (end 8.89 -10.5) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 -8.6) (end -8.89 -10.5) (layer "F.SilkS") (width 0.12))
      (fp_line (start 8.89 -4.075) (end 8.89 -3.545) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 -6.625) (end -8.89 -6.095) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 10.5) (end -8.89 8.6) (layer "F.SilkS") (width 0.12))
      (fp_line (start 8.89 -10.49) (end 8.89 -8.65) (layer "F.SilkS") (width 0.12))
      (fp_line (start 8.89 -1.535) (end 8.89 -1.005) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 6.075) (end -8.89 6.605) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 -1.545) (end -8.89 -1.015) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 -4.085) (end -8.89 -3.555) (layer "F.SilkS") (width 0.12))
      (fp_line (start 8.89 -6.61) (end 8.89 -6.08) (layer "F.SilkS") (width 0.12))
      (fp_line (start 8.89 8.61) (end 8.89 10.5) (layer "F.SilkS") (width 0.12))
      (fp_line (start 8.89 10.5) (end -8.89 10.5) (layer "F.SilkS") (width 0.12))
      (fp_line (start -8.89 0.995) (end -8.89 1.525) (layer "F.SilkS") (width 0.12))
      (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none))
      (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none))
      (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none))
      (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none))
      (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none))
    `

    function pins(def_neg, def_pos, side) {
      const mirror = side === 'B' ? ' mirror' : ''
      const layer = `(layer ${side}.SilkS)`
      const layers = `(layers ${side}.Cu ${side}.Mask ${side}.Paste)`
      const font = '(effects (font (size 1 1) (thickness 0.15)) '
      const font1 = `${font} (justify left${mirror}))`
      const font2 = `${font} (justify right${mirror}))`
      return `
        ${''/* extra border around pin 1, in case the rectangular shape is not distinctive enough */}
        (fp_line (start ${def_pos}6.35 -6.35) (end ${def_pos}6.35 -3.81) ${layer} (width 0.15))
        (fp_line (start ${def_pos}6.35 -6.35) (end ${def_pos}9.7 -6.35) ${layer} (width 0.15))
        (fp_line (start ${def_pos}6.35 -3.81) (end ${def_pos}9.7 -3.81) ${layer} (width 0.15))
        (fp_line (start ${def_pos}9.7 -6.35) (end ${def_pos}9.7 -3.81) ${layer} (width 0.15))

        ${''/* pin names */}
        (fp_text user "${name('P0')}" (at ${def_neg}9.5 -7.62 ${p.rot}) ${layer} ${font1})
        (fp_text user "${name('P1')}" (at ${def_neg}9.5 -5.08 ${p.rot}) ${layer} ${font1})
        (fp_text user "${name('P2')}" (at ${def_neg}9.5 -2.54 ${p.rot}) ${layer} ${font1})
        (fp_text user "${name('P3')}" (at ${def_neg}9.5 -0 ${p.rot}) ${layer} ${font1})
        (fp_text user "${name('P4')}" (at ${def_neg}9.5 2.54 ${p.rot}) ${layer} ${font1})
        (fp_text user "${name('P5')}" (at ${def_neg}9.5 5.08 ${p.rot}) ${layer} ${font1})
        (fp_text user "${name('P6')}" (at ${def_neg}9.5 7.62 ${p.rot}) ${layer} ${font1})

        (fp_text user "${name('VUSB')}" (at ${def_pos}9.5 -7.62 ${p.rot}) ${layer} ${font2})
        (fp_text user "${name('GND')}" (at ${def_pos}9.7 -5.08 ${p.rot}) ${layer} ${font2})
        (fp_text user "${name('VCC')}" (at ${def_pos}9.5 -2.54 ${p.rot}) ${layer} ${font2})
        (fp_text user "${name('P10')}" (at ${def_pos}9.5 0 ${p.rot}) ${layer} ${font2})
        (fp_text user "${name('P9')}" (at ${def_pos}9.5 2.54 ${p.rot}) ${layer} ${font2})
        (fp_text user "${name('P8')}" (at ${def_pos}9.5 5.08 ${p.rot}) ${layer} ${font2})
        (fp_text user "${name('P7')}" (at ${def_pos}9.5 7.62 ${p.rot}) ${layer} ${font2})

        ${''/* and now the actual pins */}
        (pad 1 smd oval (at ${def_neg}8.12 -7.62 ${p.rot}) (size 2.75 1.8) ${layers} ${net('P0')})
        (pad 2 smd oval (at ${def_neg}8.12 -5.08 ${p.rot}) (size 2.75 1.8) ${layers} ${net('P1')})
        (pad 3 smd oval (at ${def_neg}8.12 -2.54 ${p.rot}) (size 2.75 1.8) ${layers} ${net('P2')})
        (pad 4 smd oval (at ${def_neg}8.12 0 ${p.rot}) (size 2.75 1.8) ${layers} ${net('P3')})
        (pad 5 smd oval (at ${def_neg}8.12 2.54 ${p.rot}) (size 2.75 1.8) ${layers} ${net('P4')})
        (pad 6 smd oval (at ${def_neg}8.12 5.08 ${p.rot}) (size 2.75 1.8) ${layers} ${net('P5')})
        (pad 7 smd oval (at ${def_neg}8.12 7.62 ${p.rot}) (size 2.75 1.8) ${layers} ${net('P6')})

        (pad 8 smd oval (at ${def_pos}8.12 7.62 ${p.rot + 180}) (size 2.75 1.8) ${layers} ${net('P7')})
        (pad 9 smd oval (at ${def_pos}8.12 5.08 ${p.rot + 180}) (size 2.75 1.8) ${layers} ${net('P8')})
        (pad 10 smd oval (at ${def_pos}8.12 2.54 ${p.rot + 180}) (size 2.75 1.8) ${layers} ${net('P9')})
        (pad 11 smd oval (at ${def_pos}8.12 0 ${p.rot + 180}) (size 2.75 1.8) ${layers} ${net('P10')})
        (pad 12 smd oval (at ${def_pos}8.12 -2.54 ${p.rot + 180}) (size 2.75 1.8) ${layers} ${net('VCC')})
        (pad 13 smd rect (at ${def_pos}8.12 -5.08 ${p.rot + 180}) (size 2.75 1.8) ${layers} ${net('GND')})
        (pad 14 smd oval (at ${def_pos}8.12 -7.62 ${p.rot + 180}) (size 2.75 1.8) ${layers} ${net('VUSB')})
      `
    }

    function via(num, x, y, net) {
      return `(pad ${num} thru_hole circle (at ${x} ${y}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${net})`
      }


    return `
      ${standard}
      ${pins(def_neg, def_pos, 'F')}
      ${pins(def_pos, def_neg, 'B')}

      ${via(15, -11, -3.81, net('GND'))}
      ${via(16, -10, -1.27, net('P2'))}
      ${via(17, -10, 1.27, net('P3'))}
      ${via(18, -10, 3.81, net('P4'))}
      ${via(19, -10, 6.35, net('P5'))}
      ${via(20, -8.12, 9.25, net('P6'))}

      ${via(21, -11, -2.54, net('P1'))}
      ${via(22, -11, 0, net('P10'))}
      ${via(23, -11, 2.54, net('P9'))}
      ${via(24, -11, 5.08, net('P8'))}
      ${via(25, -11, 7.62, net('P7'))}

      ${via(19, -15, 6.35, net('P5'))}
      ${via(18, -14.7, 3.81, net('P4'))}
      ${via(17, -14.4, 1.27, net('P3'))}
      ${via(16, -14.1, -1.27, net('P2'))}
      ${via(21, -13.8, -2.54, net('P1'))}

      ${via(19, -15, 8.89, net('P5'))}
      ${via(18, -14.7, 10.16, net('P4'))}
      ${via(17, -14.4, 11.43, net('P3'))}
      ${via(16, -14.1, 12.7, net('P2'))}
      ${via(21, -13.8, 13.97, net('P1'))}
      )
      `
  }
}
