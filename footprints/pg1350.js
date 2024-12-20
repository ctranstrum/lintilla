// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//    vias: default is false
//      only valid if we have hotswap pads
//      if true, will put vias in the hotswap pads
//
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false,
    vias: false,
    from: { type: 'net', value: 'none' },
    to: { type: 'net', value: 'none' }
  },
  body: p => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))

      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))

      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `
    function pins(def_neg, def_pos, def_side) {
      // reverse the pins on the reverse side
      const [pin1, pin2, net1, net2] = def_side === 'F' ? [1, 2, p.from, p.to] : [2, 1, p.to, p.from]
      if(p.hotswap) {
        const vias = (p.vias && def_side === 'B') ? `
          (pad ${pin1} thru_hole circle (at ${def_pos}8.275 -3.75) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${net1})
          (pad ${pin2} thru_hole circle (at ${def_neg}3.275 -5.95) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${net2})
        ` : ''
        const center_post = (def_side === 'B') ? `
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        ` : ''
        return `
          ${'' /* post holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          ${center_post}

          ${'' /* net pads */}
          (pad ${pin1} smd rect (at ${def_pos}8.275 -3.75 ${p.r}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${net1})
          (pad ${pin2} smd rect (at ${def_neg}3.275 -5.95 ${p.r}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${net2})
          ${vias}

          ${'' /* corner mark */}
          (fp_line (start ${def_pos}2.5 -1.7) (end ${def_pos}7.3 -1.7) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_pos}7 -1.7) (end ${def_pos}7 -2.7) (layer ${def_side}.SilkS) (width 0.15))
        `
      } else {
        return `
          ${''/* pins */}
          (pad ${pin1} thru_hole circle (at ${def_pos}0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${net1.str})
          (pad ${pin2} thru_hole circle (at ${def_pos}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${net2.str})
        `
      }
    }

    return `
      ${standard}
      ${p.keycaps ? keycap : ''}
      ${pins('-', '', 'B')}
      ${p.reverse ? pins('', '-', 'F') : ''}
      )
    `
  }
}
