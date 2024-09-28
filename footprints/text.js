module.exports = {
  params: {
    side: 'both', // set to F or B for one side only
    text: '',
    size: 1,
    height: 0,
    width: 0,
    thickness: 0.153,
    justify: '',
    style: ''
  },
  body: p => {
    const text = (side) => {
      let justify = p.justify || ''
      if (side === 'B') {
        if (justify === 'right') {
          justify = 'left mirror'
        } else if (justify === 'left') {
          justify = 'right mirror'
        } else {
          justify = 'mirror'
        }
      }
      const adjust = justify ? `(justify ${justify})` : ''
      const width = p.width || p.size
      const height = p.height || p.size
      return `
        (gr_text "${p.text}" ${p.at} (layer ${side}.SilkS)
          (effects (font (size ${width} ${height}) (thickness ${p.thickness}) ${p.style}) ${adjust})
        )
      `
    }

    return (p.side !== 'B' ? text('F') : '') + (p.side !== 'F' ? text('B') : '')
  }
}
