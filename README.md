# Lintilla Keyboard ZMK Firmware

This repo contains the firmware for the [Lintilla Keyboard][lintilla].

To use it, follow the instructions for [creating your own ZMK firmware repo][zmk]
but note that the Lintilla keyboard is an out-of-tree keyboard so you will not
find it in the list of keyboards, but don't panic, we will make the necessary
changes to get it working.

Add this module to your `config/west.yml` by adding a new entry to both
`remotes` and `projects`:

```yaml
manifest:
  remotes:
    - name: zmkfirmware
      url-base: https://github.com/zmkfirmware
    - name: ctranstrum # <-- new entry
      url-base: https://github.com/ctranstrum
  projects:
    - name: zmk
      remote: zmkfirmware
      revision: main
      import: app/west.yml
    - name: lintilla # <-- new entry
      remote: ctranstrum
      revision: zmk
  self:
    path: config
```

Then, choose one of the following to add to your `build.yaml` file:

For Lintilla with a dongle:

```yaml
include:
  - board: seeeduino_xiao_ble
    shield: lintilla_dongle dongle_display
    snippet: studio-rpc-usb-uart
    artifact-name: lintilla-dongle
  - board: seeeduino_xiao_ble
    shield: lintilla_left_peripheral rgbled_adapter
    artifact-name: lintilla-left
  - board: seeeduino_xiao_ble
    shield: lintilla_right_peripheral rgbled_adapter
    artifact-name: lintilla-right
```

Or for Lintilla without a dongle:

```yaml
include:
  - board: seeeduino_xiao_ble
    shield: lintilla_left_central rgbled_adapter
    snippet: studio-rpc-usb-uart
    artifact-name: lintilla-left
  - board: seeeduino_xiao_ble
    shield: lintilla_right_peripheral rgbled_adapter
    artifact-name: lintilla-right
```

To customize the keymap for your Lintilla board, you can copy the
[default keymap][keymap] from this repo to the `config` directory of
your zmk config repo and edit it from there.

[keymap]: https://github.com/ctranstrum/lintilla/tree/zmk/boards/shields/lintilla/lintilla.keymap
[lintilla]: https://github.com/ctranstrum/lintilla
[zmk]: https://zmk.dev/docs/user-setup#github-repo
