#include "custom_status_screen.h"
#include "widgets/battery_status.h"
#include "widgets/modifiers.h"
#include "widgets/bongo_cat.h"
#include "widgets/layer_status.h"
#include "widgets/output_status.h"

#include <zephyr/logging/log.h>
LOG_MODULE_DECLARE(zmk, CONFIG_ZMK_LOG_LEVEL);

static struct zmk_widget_output_status output_status_widget;
static struct zmk_widget_layer_status layer_status_widget;
static struct zmk_widget_peripheral_battery_status peripheral_battery_status_widget;
static struct zmk_widget_modifiers modifiers_widget;
static struct zmk_widget_bongo_cat bongo_cat_widget;

lv_style_t global_style;

lv_obj_t *zmk_display_status_screen() {
    lv_obj_t *screen;

    screen = lv_obj_create(NULL);

    lv_style_init(&global_style);
    lv_style_set_text_font(&global_style, &lv_font_unscii_8);
    lv_style_set_text_letter_space(&global_style, 1);
    lv_style_set_text_line_space(&global_style, 1);
    lv_obj_add_style(screen, &global_style, LV_PART_MAIN);

    zmk_widget_output_status_init(&output_status_widget, screen);
    lv_obj_align(zmk_widget_output_status_obj(&output_status_widget), LV_ALIGN_TOP_LEFT, 0, 0);

    zmk_widget_bongo_cat_init(&bongo_cat_widget, screen);
    lv_obj_align(zmk_widget_bongo_cat_obj(&bongo_cat_widget), LV_ALIGN_BOTTOM_RIGHT, 0, 0);

    zmk_widget_modifiers_init(&modifiers_widget, screen);
    lv_obj_align(zmk_widget_modifiers_obj(&modifiers_widget), LV_ALIGN_BOTTOM_LEFT, 0, 0);

    zmk_widget_layer_status_init(&layer_status_widget, screen);
    // lv_obj_align(zmk_widget_layer_status_obj(&layer_status_widget), LV_ALIGN_BOTTOM_LEFT, 2, -18);
    lv_obj_align_to(zmk_widget_layer_status_obj(&layer_status_widget), zmk_widget_output_status_obj(&output_status_widget), LV_ALIGN_BOTTOM_LEFT, 0, 20);

    zmk_widget_peripheral_battery_status_init(&peripheral_battery_status_widget, screen);
    lv_obj_align(zmk_widget_peripheral_battery_status_obj(&peripheral_battery_status_widget), LV_ALIGN_TOP_RIGHT, 0, 0);

    return screen;
}
