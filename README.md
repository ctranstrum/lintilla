# Lintilla Keyboard

![Lintilla Keyboard](images/lintilla-keyboard.jpg)
![Lintilla side view](images/lintilla-side-view.jpg)
![Lintilla PCB](images/pcb-lintilla.jpg)

- 42 key wireless split ergo keyboard with splay and "reachy" thumbs
- Seeed Studio [XIAO BLE][xiao] microcontroller
- Choc v1 hotswap switches
- "Relaxed" choc spacing: a compromise between MX and choc
- 7mm ultra low profile sandwich case with no exposed components on top or bottom
- Wireless first design using [ZMK][zmk] [firmware][firmware]
- Reversible PCB designed with [ergogen][ergogen]
- Soldering is simple: SMD components all on a single side of the board for each half
- Internal space (5.4 x 24 x 34) for a "large" 502030 250mAh battery
- Licensed under the [CERN Open Hardware License v2][ohl]
- All source files available, so you can tweak the design if needed

## Bill of Materials

- 2 identical [PCBs][pcb] (can be printed at [JLC][jlc])
- Top and bottom [3D printed cases][case] for each half
- 2 [XIAO BLE][xiao] processors
- 2 [Panasonic EVQ-PUC02K momentary switches][reset] for reset
- 2 [Alps SSSS8 surface mount slide switch][power] for the battery
- 2 [3.7v 250mAh 502030 rechargeable LiPo battery][battery]
- 42 SOD-123 [1N4148W SMD diodes][diodes]
- 42 Kailh [Choc Hot Swap Sockets][sockets]
- 42 [Choc v1 switches][switches]
- 42 [Choc v1 keycaps][keycaps]
- 8 [M2 hex nuts][hexnuts]
- 8 [M2 x 6mm countersunk screws][screws]
- 8 [6mm x 1.5mm bumpons][bumpons]

[battery]: https://ydlbattery.com/products/3-7v-250mah-502030-lithium-polymer-ion-battery
[bumpons]: https://www.walmart.com/ip/Small-Door-Bumpers-Self-Adhesive-Clear-Rubber-Feet-Tiny-Bumpons-1-4-Diameter-X-1-16-Thick-100-Pack-u2026/2377364014
[case]: cases/
[diodes]: https://typeractive.xyz/products/smd-diodes
[ergogen]: https://ergogen.xyz
[firmware]: https://github.com/ctranstrum/lintilla/tree/zmk
[hexnuts]: https://www.getfpv.com/m2-black-metal-hex-nut-set-of-8.html
[jlc]: https://jlcpcb.com
[keycaps]: https://lowprokb.ca/collections/keycaps/products/mbk-low-profile-pbt-blank-keycaps
[ohl]: LICENSE.txt
[pcb]: pcb/lintilla-gerbers.zip
[power]: https://typeractive.xyz/products/power-switch
[reset]: https://typeractive.xyz/products/reset-button
[screws]: https://monsterbolts.com/products/mach-phil-flat-a2-m2?variant=21222571802707
[sockets]: https://lowprokb.ca/collections/parts/products/kalih-choc-hot-swap-sockets
[switches]: https://lowprokb.ca/collections/switches/products/ambients-silent-choc-switches
[xiao]: https://wiki.seeedstudio.com/XIAO_BLE/
[zmk]: https://zmk.dev
