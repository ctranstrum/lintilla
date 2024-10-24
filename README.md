# Lintilla Keyboard

![Lintilla Keyboard](images/lintilla-keyboard.jpg)
![Lintilla side view](images/lintilla-side-view.jpg)
![Lintilla PCB](images/pcb-lintilla.jpg)

- 42 key wireless split ergo keyboard with splay and "reachy" thumbs
- Seeed Studio [XIAO BLE][xiao] microcontroller
- Choc v1 hotswap switches
- "Relaxed" choc spacing: a compromise between MX and choc
- 7mm ultra low profile "snug sandwich" case with no exposed components on top or bottom
- [RGB LED status][rgbled] visible on the top of the case
- Wireless first design using [ZMK][zmk] [firmware][firmware]
- [Reversible](images/pcb-allitnil.jpg) PCB designed with [ergogen][ergogen]
- Soldering is simple: SMD components all on a single side of the board for each half
- Internal space (5.4 x 24 x 34 mm) for a "large" 502030 250mAh battery
- Licensed under the [CERN Open Hardware License v2][ohl]
- All source files available, so you can tweak the design if needed

## Build Your Own

Want to build one? You will need to obtain the following components:

| Qty    | Description |
| ------ | ----------- |
| 2      | identical [Lintilla PCBs][pcb] (can be printed by uploading the zip file to [JLC][jlc]) |
| 4      | [3D printed cases][case], top and bottom for each half |
| 2      | [XIAO BLE][xiao] processors |
| 2      | [Panasonic EVQ-PUC02K momentary switches][reset] for the reset button |
| 2      | [Alps SSSS811101 SPDT slide switches][power] for the battery on/off |
| 2      | [3.7v 250mAh 502030 rechargeable LiPo batteries][battery] |
| 42     | SOD-123 [1N4148W SMD diodes][diodes] |
| 42     | Kailh [Choc Hot Swap Sockets][sockets] |
| 42     | [Choc v1 switches][switches] of your choice |
| 42     | [Choc v1 keycaps][keycaps] of your choice (note: full MX-sized keycaps may be too big) |
| 8      | [M2 hex nuts][hexnuts] |
| 8      | [M2 x 6mm countersunk screws][screws] |
| 8      | [6mm x 1.5mm bumpons][bumpons] |
| ~5-6mm | [1.75mm transparent 3D printer filament][filament] for the "fiber optic" led light guide |

[battery]: https://ydlbattery.com/products/3-7v-250mah-502030-lithium-polymer-ion-battery
[bumpons]: https://www.walmart.com/ip/Small-Door-Bumpers-Self-Adhesive-Clear-Rubber-Feet-Tiny-Bumpons-1-4-Diameter-X-1-16-Thick-100-Pack-u2026/2377364014
[case]: cases/
[diodes]: https://typeractive.xyz/products/smd-diodes
[ergogen]: https://ergogen.xyz
[filament]: https://gizmodorks.com/nylon-filament-200-g-spool/
[firmware]: https://github.com/ctranstrum/lintilla/tree/zmk
[hexnuts]: https://www.getfpv.com/m2-black-metal-hex-nut-set-of-8.html
[jlc]: https://jlcpcb.com
[keycaps]: https://lowprokb.ca/collections/keycaps/products/mbk-low-profile-pbt-blank-keycaps
[ohl]: LICENSE.txt
[pcb]: pcb/lintilla-gerbers.zip
[power]: https://typeractive.xyz/products/power-switch
[reset]: https://typeractive.xyz/products/reset-button
[rgbled]: https://github.com/caksoylar/zmk-rgbled-widget
[screws]: https://monsterbolts.com/products/mach-phil-flat-a2-m2?variant=21222571802707
[sockets]: https://typeractive.xyz/products/hotswap-sockets?variant=45742200324327
[switches]: https://lowprokb.ca/collections/switches/products/ambients-silent-choc-switches
[xiao]: https://wiki.seeedstudio.com/XIAO_BLE/
[zmk]: https://zmk.dev
