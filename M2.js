(function ($) {

    var activity_options_default_value = '';
    var caem_sorted = false;

    Drupal.behaviors.munca2 = {
        attach: function (context, settings) {
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            if (!Drupal.settings.mywebform.preview) {
                attr_caem('CAP1_RCAEM_C', 2, 12);
            }
        }
    }

    /*webform.afterLoad.munca1_changeYear = function() {
      activity_options_default_value = (typeof Drupal.settings.mywebform.values.dec_fiscCod_caem != "undefined" ? Drupal.settings.mywebform.values.dec_fiscCod_caem : '');
      if (!Drupal.settings.mywebform.preview) {
        year_on_change_action();
      }
    }*/

    function attr_caem(selector, startNumber, endNumber) {
        if (!Drupal.settings.mywebform.preview) {
            if (!caem_sorted && typeof caem === 'object') {
                var caemArray = [];
                for (var x in caem) {
                    caemArray.push(caem[x]);
                }
                caem = caemArray;

                caem.sort(function (a, b) {
                    var nameA = a.code + a.description;
                    var nameB = b.code + b.description;

                    if (nameA < nameB) {
                        return -1;
                    } else if (nameA > nameB) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                caem_sorted = true;
            }

            for (var i = startNumber; i <= endNumber; i++) {
                var field_name = selector + i;
                var obj = jQuery('#' + field_name);
                var valueSelected = Drupal.settings.mywebform.values[field_name];
                var options = [];

                options.push({
                    'id': '',
                    'text': ''
                });
                jQuery.each(caem, function (key, value) {
                    options.push({
                        'id': value.code + value.description,
                        'text': value.code + value.description + ',' + value.name
                    });
                });

                Drupal.settings.mywebform.fields[field_name].options = options;
                obj.myWebformSelect2SetVal(valueSelected);
            }
        }
    }

    webform.afterLoad.bns_split_tables = function () {
        if (Drupal.settings.mywebform.preview) {
            if (typeof (split_tables) == "function") {
                split_tables();
            }
        }
    }
})(jQuery)

webform.validators.munca2 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;
    var arr1_columns = [1, 2, 4];
    var arr1_inputs = ['01', '02', '03', '04', '31', '05', '32', '33', '34', '09', '10', '91', '92', '93', '94', '11'];

    var col1_rd3 = 0;
    var col2_rd3 = 0;
    var col3_rd3 = 0;
    var col4_rd3 = 0;

    var col = 0;
    var RezColMin = 0;
    var RezColMax = 0;
    var col16 = 0;

    for (var h = 2; h < 13; h++) {
        var fields_caem = values["CAP1_RCAEM_C" + h];
        for (var m = 2; m < 13; m++) {
            if (h != m) {
                var comparable_caem = values["CAP1_RCAEM_C" + m];
                if (comparable_caem == fields_caem && comparable_caem !== "") {
                    webform.errors.push({
                        'fieldName': 'CAP1_RCAEM_C' + m,
                        'weight': 25,
                        'msg': Drupal.t('Cod eroare: 07-025 (Cap.1). Cod CAEM nu trebuie sa se repete')
                    });
                }
            }
        }
    }

    for (var h = 2; h < 13; h++) {
        RezColMin = 0;
        RezColMax = 0;
        col16 = 0;
        if (parseInt(values['CAP1_R20_C' + h]) > 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R20_C' + h,
                'weight': 9,
                'msg': Drupal.t('Cod eroare: 07-026 (Cap.1 Rind.20). col @col: Asigurați-vă de corectitudinea datelor. Salariul minim=4000 lei', {
                    '@col': h
                })
            });
        }
        for (var j = 2; j < 14; j++) {
            col = 0;
            if (!isNaN(parseInt(values['CAP1_R' + j + '0_C' + h]))) {
                col = parseInt(values['CAP1_R' + j + '0_C' + h]);
            }



            if (j == 2) {
                RezColMin = 0;
                RezColMax = col * 4 + RezColMax;
            }

            if (j == 3) {
                RezColMin = col * 4 + RezColMin;
                RezColMax = col * 4 + RezColMax;
            }

            if (j == 4) {
                RezColMin = col * 4 + RezColMin;
                RezColMax = col * 5 + RezColMax;
            }

            if (j == 5) {
                RezColMin = col * 5 + RezColMin;
                RezColMax = col * 6 + RezColMax;
            }

            if (j == 6) {
                RezColMin = col * 6 + RezColMin;
                RezColMax = col * 7 + RezColMax;
            }

            if (j == 7) {
                RezColMin = col * 7 + RezColMin;
                RezColMax = col * 8 + RezColMax;
            }

            if (j == 8) {
                RezColMin = col * 8 + RezColMin;
                RezColMax = col * 10 + RezColMax;
            }

            if (j == 9) {
                RezColMin = col * 10 + RezColMin;
                RezColMax = col * 15 + RezColMax;
            }

            if (j == 10) {
                RezColMin = col * 15 + RezColMin;
                RezColMax = col * 20 + RezColMax;
            }

            if (j == 11) {
                RezColMin = col * 20 + RezColMin;
                RezColMax = col * 25 + RezColMax;
            }

            if (j == 12) {
                RezColMin = col * 25 + RezColMin;
                RezColMax = col * 30 + RezColMax;
            }

            if (j == 13) {
                RezColMin = col * 30 + RezColMin;
                RezColMax = col * 40 + RezColMax;

                var caem2 = values['CAP1_RCAEM_C' + h];
                if (RezColMax > 0 && caem2 == '') {
                    webform.errors.push({
                        'fieldName': 'CAP1_RCAEM_C' + h,
                        'weight': 11,
                        'msg': Drupal.t('Cod eroare: 07-011 (Cap.1). col @col CAEM trebuie sa fie introdus ', {
                            '@col': h,
                        })
                    });
                }

                if (!isNaN(parseFloat(values['CAP1_R160_C' + h]))) {
                    col16 = parseFloat(values['CAP1_R160_C' + h]);
                }

                if (col16 != 0 || RezColMax != 0) {

                    if (col16 < RezColMin) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R160_C' + h,
                            'weight': 9,
                            'msg': Drupal.t('Cod eroare: 07-009 (Cap.1). col @col Verificarea la minimum. Diapazonul - ( @rezMin – @rezMax ) R.160 = @col160 (Este mai mic decât min)', {
                                '@col': h,
                                '@col160': col16,
                                '@rezMin': RezColMin,
                                '@rezMax': RezColMax
                            })
                        });
                    }

                    if (col === 0) {
                        if (col16 > RezColMax) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R160_C' + h,
                                'weight': 9,
                                'msg': Drupal.t('Cod eroare: 07-016 (Cap.1). col @col dacă lipseşte rindul 130, atunci suma nu trebuie să depăşească  @rezMax, Verificarea la  maximum ( @rezMin - @rezMax ) ', {
                                    '@col': h,
                                    '@rezMax': RezColMax,
                                    '@rezMin': RezColMin
                                })
                            });
                        }
                    } else {
                        if (col16 > RezColMax) {
                            webform.warnings.push({
                                'fieldName': 'CAP1_R160_C' + h,
                                'weight': 9,
                                'msg': Drupal.t('Cod eroare: 07-009 (Cap.1). Atentionare col @col Verificarea diapazonul(@rezMin - @rezMax ) ', {
                                    '@col': h,
                                    '@rezMax': RezColMax,
                                    '@rezMin': RezColMin
                                })
                            });
                        }
                    }
                }
            }
        }
    }

    if (!values.STREET) {
        webform.warnings.push({
            "fieldName": "STREET+",
            "msg": Drupal.t('Câmpul nu este completat')
        });
    }

    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['munca2'] = 1;
    validateWebform();

}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }

    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }

    return toFloat(a.error_code) - toFloat(b.error_code);
}