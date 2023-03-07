module.exports = {

    board_env: "STM32F103RE_creality",
    //active: false,
    //only: "stable",   // build only stable branch
    meta: {
        stable_name: "ender3pro_v4.2.2_M{{marlin_version}}-custom-{{current_date}}",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}-custom-{{uid}}"
    },

    based_on: {   // default Ender-3 Pro Marlin example config
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-2.1.2",   // latest stable
        nightly_branch: "bugfix-2.1.x"    // latest nightly
//        repo: "https://github.com/zisismaras/ender_3_4.2.2_firmware",
//        path: "/autogeneratedConfigs/baseLin/{{releaseType}}/latest",  // {{releaseType}} will be either stable or nightly
//        stable_branch: "master",
//        nightly_branch: "master"
    },

    
                           // for valid syntax refer to:          https://github.com/zisismaras/marlin_auto_build
    configuration:     {   // "Configuration.h" customizations
        enable: [

            
            ["STRING_CONFIG_H_AUTHOR", "(zisismaras, KamensekD)"],
            ["CUSTOM_MACHINE_NAME",  "Ender-3 Pro v4.2.2"],

            
            //Defaults
            ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 100]],
            ["DEFAULT_TRAVEL_ACCELERATION", 500],
            ["X_BED_SIZE", 235],
            ["Y_BED_SIZE", 235],
            ["X_MAX_POS", 250],  // so that probe can move closer to end of bed
            ["Y_MAX_POS", 235],

            
            //Preheat Constants
            ["PREHEAT_1_LABEL", "PLA"],
            ["PREHEAT_1_TEMP_HOTEND", 200],
            ["PREHEAT_1_TEMP_BED", 50],
            
            ["PREHEAT_2_LABEL", "PETG"],
            ["PREHEAT_2_TEMP_HOTEND", 225],
            ["PREHEAT_2_TEMP_BED", 50],

            //["PREHEAT_3_LABEL", "pre-heat"],
            //["PREHEAT_3_TEMP_HOTEND", 180],
            //["PREHEAT_3_TEMP_BED", 40],

            
            //prevent a single extrusion longer than EXTRUDE_MAXLENGTH.
            "PREVENT_LENGTHY_EXTRUDE",
            ["EXTRUDE_MAXLENGTH", 500],


            //LCD Menu options
            "PID_EDIT_MENU",         // Add PID editing to the "Advanced Settings" menu. (~700 bytes of flash)
            "PID_AUTOTUNE_MENU",     // Add PID auto-tuning to the "Advanced Settings" menu. (~250 bytes of flash)
            "LCD_BED_LEVELING",
            "LCD_BED_TRAMMING",
            "MESH_EDIT_MENU",

            
            //Enable speaker
            "SPEAKER",

            
            //Stepper Driver Types
            //"Creality 4.2.2 boards come with a variety of stepper drivers.
            //Check the board label (typically on SD Card module) and set the correct *_DRIVER_TYPE!
            //(C=HR4988, E=A4988, A=TMC2208, B=TMC2209, H=TMC2225, H8=HR4988)
            //* Use TMC2208/TMC2208_STANDALONE for TMC2225 drivers and TMC2209/TMC2209_STANDALONE for TMC2226 drivers.
            //* Options: A4988, A5984, DRV8825, LV8729, TB6560, TB6600, TMC2100,
            //*          TMC2130, TMC2130_STANDALONE, TMC2160, TMC2160_STANDALONE,
            //*          TMC2208, TMC2208_STANDALONE, TMC2209, TMC2209_STANDALONE,
            //*          TMC26X,  TMC26X_STANDALONE,  TMC2660, TMC2660_STANDALONE,
            //*          TMC5130, TMC5130_STANDALONE, TMC5160, TMC5160_STANDALONE
            ["X_DRIVER_TYPE",  q`A4988`],
            ["Y_DRIVER_TYPE",  q`A4988`],
            ["Z_DRIVER_TYPE",  q`A4988`],
            ["E0_DRIVER_TYPE", q`A4988`],
      

            //Thermal protection settings            
            //["THERMAL_PROTECTION_BED_PERIOD",30],
            //["THERMAL_PROTECTION_BED_HYSTERESIS",3],
            //["WATCH_TEMP_PERIOD",30],
            //["WATCH_TEMP_INCREASE",3],
            //["WATCH_BED_TEMP_PERIOD",60],
            //["WATCH_BED_TEMP_INCREASE",3],

          
            //eliminates vibration during printing by fitting a Bézier curve to move acceleration
            "S_CURVE_ACCELERATION",
            
            
            //Adds the G12 command to perform a nozzle cleaning process
            "NOZZLE_CLEAN_FEATURE",
            
             
            //Auto Level settings
            ["GRID_MAX_POINTS_X", 5],

            "BLTOUCH",
            ["Z_MIN_PROBE_PIN", q`PB1`],

//            "AUTO_BED_LEVELING_BILINEAR",
            "AUTO_BED_LEVELING_UBL",  // most advanced bed leveling system combining the features and benefits of other systems

            "Z_SAFE_HOMING",
            "USE_PROBE_FOR_Z_HOMING",

            ["XY_PROBE_FEEDRATE", q`(150*60)`],
            ["Z_PROBE_FEEDRATE_FAST", q`(6*60)`],
            ["Z_PROBE_FEEDRATE_SLOW", q`(Z_PROBE_FEEDRATE_FAST / 2)`],

            "PREHEAT_BEFORE_LEVELING",
            ["LEVELING_NOZZLE_TEMP", 180],
            ["LEVELING_BED_TEMP", 50],

            ["MESH_INSET", 5],                   // Set Mesh bounds as an inset region of the bed
            ["Z_CLEARANCE_DEPLOY_PROBE", 5],     // Z Clearance for Deploy/Stow

            ["DEFAULT_LEVELING_FADE_HEIGHT", 40],
            ["NOZZLE_TO_PROBE_OFFSET", [-27, 0, 0]],
            // my printer's probe offsets: M851 X-27.00 Y0.00 Z-1.50 ; (mm)

            "BED_TRAMMING_INCLUDE_CENTER",

            //M48 test
            "Z_MIN_PROBE_REPEATABILITY_TEST",

            
        ],
        disable: [

            
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN",

            
        ]
    },

    
    configuration_adv: {   // "Configuration_adv.h" customizations
        enable: [
           
            
            //for Octoprint
            "HOST_ACTION_COMMANDS",

            
            //for Auto Level
            "BABYSTEPPING",
            "BABYSTEP_ZPROBE_OFFSET",
            "PROBE_OFFSET_WIZARD",
            
            ["PROBING_MARGIN_LEFT", 20],
            ["PROBING_MARGIN_RIGHT", 20],
            ["PROBING_MARGIN_FRONT", 10],
            ["PROBING_MARGIN_BACK", 10],

            "ASSISTED_TRAMMING",
            "ASSISTED_TRAMMING_WIZARD",
            "REPORT_TRAMMING_MM",

            
            //Enable Linear Advance and set default K to 0
            "LIN_ADVANCE",
            ["ADVANCE_K", 0],
            "EXPERIMENTAL_SCURVE",
            "ALLOW_LOW_EJERK",

            
            //handles M108, M112, M410, M876 imidiately
            "EMERGENCY_PARSER",

            
            "QUICK_HOME",  // If G28 contains XY do a diagonal move first

            
            ["CHOPPER_TIMING",  q`CHOPPER_DEFAULT_24V`], // my Ender 3 Pro has 24V power supply, for some reason default for E3P was 12V?

            
        ],
        disable: [

            
            "POWER_LOSS_RECOVERY",   //disable this to save SD card writes for each layer

        
        ]
    }

};
