module.exports = {
    params: {
        designator: 'ARC',
    },
    body: p => {

      return `
        (module arc_guide (layer F.SilkS) (tedit 5B25E79A)

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            (fp_arc (start 0 -7) (mid -7 0) (end 0 7) (layer F.SilkS) (stroke (width 0.2) (type solid)))
            (fp_arc (start 0 -7) (mid -7 0) (end 0 7) (layer B.SilkS) (stroke (width 0.2) (type solid)))

        )

        `
    }
}
